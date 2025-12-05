import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import type { Bindings } from "./bindings";
import { AppError } from "./AppError";
import type { ContentfulStatusCode } from "hono/utils/http-status";
import emailGenerator from "./emailGenerator";
import Emailer from "./Emailer";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { secureHeaders } from "hono/secure-headers";

/**
 * Contact submission schema using Zod
 */
const newSubmissionSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Invalid email address"),
	message: z.string().min(10, "Your message must be at least 10 characters"),
	challengeToken: z.string(),
});

/**
 * Hono Router with chaining.
 *
 * !!! IMPORTANT !!!
 *
 * This router uses chained routing. We do this so the that the RPC output is correct. Be mindful of
 * how Hono structures routes when creating them via the chained method. They will inherit the route
 * path from handlers before it.
 *
 * !!! IMPORTANT !!!
 */

const app = new Hono<{ Bindings: Bindings }>()
	.use(logger())
	.use(
		"*",
		cors({
			origin: [
				"https://equalsons.com",
				"https://www.equalsons.com",
				"http://localhost:5173",
			],
			credentials: true,
			allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
		}),
	)
	.use(secureHeaders())
	.notFound((c) => c.json({ message: "Not Found." }, 404))
	.onError((err, c) => {
		console.error(err);

		return c.json({ message: "Internal Server Error." }, 500);
	})
	.get("/", (c) => {
		return c.json({ message: "ping" }, 200);
	})
	.post("/submit", zValidator("json", newSubmissionSchema), async (c) => {
		try {
			const { name, email, message, challengeToken } = c.req.valid("json");

			// Validate the challenge token
			const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
			const ip = c.req.header("cf-connecting-ip");

			const result = await fetch(url, {
				body: JSON.stringify({
					secret: c.env.PRIVATE_TURNSTILE_KEY,
					remoteip: ip,
					response: challengeToken,
				}),
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const outcome: { success: boolean } = await result.json();

			if (!outcome.success) {
				throw AppError.create({
					message: "Invalid challenge token.",
					status: 400,
				});
			}

			// Generate email body and send email
			const emailBody = emailGenerator.contactSubmissionEmail({
				host: c.env.CLIENT_HOST,
				toAddress: ["justin@equalsons.com", "ace@equalsons.com"],
				name,
				email,
				message,
			});

			await Emailer.send({ authKey: c.env.SENDGRID_API_KEY, body: emailBody });

			// Return success message
			return c.json(
				{
					data: {},
					message: "Contact submitted.",
				},
				200,
			);
		} catch (error) {
			if (error instanceof AppError) {
				return c.json(
					{ message: error.message },
					error.status as ContentfulStatusCode,
				);
			}
			// Handle error, log it and capture in Sentry if necessary
			console.error("Error during contact submission:", error);

			return c.json({ message: "Error sending contact submission." }, 500);
		}
	});

export default app;

// For client-side type inference
export type ContactApiType = typeof app;
