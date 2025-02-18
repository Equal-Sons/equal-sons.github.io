import type { ContactApiType } from "@equalsons/www-form-api/src";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "@marsidev/react-turnstile";
import { hc, type InferRequestType } from "hono/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define the schema using Zod (ensure challengeToken is present in validation)
const contactDataSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Invalid email address"),
	message: z.string().min(10, "Message must be at least 10 characters"),
	challengeToken: z.string().min(1, "Captcha verification is required"),
});

// TypeScript type inferred from Zod schema
type ContactFormData = z.infer<typeof contactDataSchema>;

// Initialize the API client
const client = hc<ContactApiType>(
	`${import.meta.env.VITE_CONTACT_SERVER_URL}/submit`,
);

type ContactSubmissionArgs = InferRequestType<
	typeof client.submit.$post
>["json"];

// Contact API request function
const newSubmission = async (data: ContactSubmissionArgs) => {
	try {
		const response = await client.submit.$post({ json: data });

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || "Submission failed");
		}

		return await response.json();
	} catch (error) {
		throw new Error(error.message || "Network error occurred");
	}
};

export default function Contact() {
	const turnstileKey = import.meta.env.VITE_TURNSTILE_KEY;

	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);
	const [challengeToken, setChallengeToken] = useState("");

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
		reset,
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactDataSchema),
		mode: "onBlur",
		defaultValues: {
			name: "",
			email: "",
			message: "",
			challengeToken: "",
		},
	});

	// Handle Captcha success and update form state
	const onChallengeSuccess = (token: string) => {
		setChallengeToken(token);
		setValue("challengeToken", token);
	};

	// Form submit handler
	const onSubmit = async (data: ContactFormData) => {
		console.log(data);
		if (!challengeToken) {
			setError("Please complete the CAPTCHA challenge.");
			return;
		}

		try {
			await newSubmission({ ...data, challengeToken });
			setSuccess(true);
			setError(null);
			reset();
		} catch (error: any) {
			setError(error.message);
		}
	};

	return (
		<div className="contact-area-2 text-center space-bottom">
			<div className="container">
				<div className="row align-items-center justify-content-center">
					<div className="col-lg-8">
						<div className="contact-form-wrap">
							<div className="title-area mb-30">
								<h3 className="sec-title">Have a Project in Mind?</h3>
								<p>
									Great! We're excited to hear from you and let's start
									something.
								</p>
							</div>
							<form
								onSubmit={handleSubmit(onSubmit)}
								className="contact-form ajax-contact"
							>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<input
												type="text"
												className="form-control style-border"
												id="name"
												placeholder="Full name *"
												{...register("name")}
												aria-invalid={errors.name ? "true" : "false"}
											/>
											<div className="invalid-feedback">
												{errors.name?.message}
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<input
												type="email"
												className="form-control style-border"
												id="email"
												placeholder="Email address *"
												{...register("email")}
												aria-invalid={errors.email ? "true" : "false"}
											/>
											<div className="invalid-feedback">
												{errors.email?.message}
											</div>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-group">
											<textarea
												placeholder="Tell us about your needs *"
												id="contactForm"
												className="form-control style-border style2"
												{...register("message")}
												aria-invalid={errors.message ? "true" : "false"}
											/>
											<div className="invalid-feedback">
												{errors.message?.message}
											</div>
										</div>
									</div>

									<Turnstile
										siteKey={turnstileKey}
										className="mb-3"
										options={{ theme: "light" }}
										onSuccess={onChallengeSuccess}
									/>
								</div>

								<div className="form-btn col-12">
									{success && (
										<aside
											className="alert alert-success"
											aria-live="assertive"
										>
											Your message has been sent! Someone will contact you
											shortly.
										</aside>
									)}
									{error && (
										<aside className="alert alert-danger" aria-live="assertive">
											{error}
										</aside>
									)}
									<button type="submit" className="btn mt-20">
										<span className="link-effect">
											<span className="effect-1">SEND MESSAGE</span>
											<span className="effect-1">SEND MESSAGE</span>
										</span>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
