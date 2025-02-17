import type { Hono } from "hono";
import { logger } from "hono/logger";
import type { Bindings } from "./bindings";
import { cors } from "hono/cors";
import { secureHeaders } from "hono/secure-headers";
import { createMiddleware } from "hono/factory";
import { jwt } from "hono/jwt";

export const jwtMiddleware = () => {
	return createMiddleware(async (c, next) => {
		const jwtMiddleware = jwt({
			secret: c.env.SIGNING_SECRET,
		});

		return jwtMiddleware(c, next);
	});
};

export const applyMiddleware = (
	app: Hono<{ Bindings: Bindings }>,
): Hono<{ Bindings: Bindings }> => {
	app.use(logger());

	// CORS middleware
	app.use(
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
	);

	// Secure headers middleware
	app.use(secureHeaders());

	// Debugger
	// app.use(async (c, next) => {
	// 	console.log('Request:', c.req);

	// 	await next();
	// });

	// Rate limiter middleware
	// app.use(async (c, next) => {
	// 	const { success } = await c.env.FLAT_RATE_LIMITER.limit({ key: "*" }); // limit all requests
	// 	if (!success) {
	// 		Sentry.captureException(new Error("Exceeded Rate limiting"));

	// 		return c.json({ message: "Rate limit exceeded." }, 429);
	// 	}

	// 	await next();
	// });

	// Not found middleware
	app.notFound((c) => c.json({ message: "Not Found." }, 404));

	// Error handling middleware
	app.onError((err, c) => {
		console.error(err);

		return c.json({ message: "Internal Server Error." }, 500);
	});

	return app;
};
