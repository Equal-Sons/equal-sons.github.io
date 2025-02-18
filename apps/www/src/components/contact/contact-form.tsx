import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "@marsidev/react-turnstile";
import type { TurnstileInstance } from "@marsidev/react-turnstile";
import { hc, type InferRequestType } from "hono/client";
import type { ContactApiType } from "@equalsons/www-form-api/src";

// Define the schema using Zod (ensure challengeToken is present)
const contactDataSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Invalid email address"),
	message: z.string().min(10, "Message must be at least 10 characters"),
	challengeToken: z.string().min(1, "Captcha verification is required"),
});

// TypeScript type inferred from Zod schema
type ContactFormData = z.infer<typeof contactDataSchema>;

// Initialize the API client
const client = hc<ContactApiType>(`${import.meta.env.VITE_CONTACT_SERVER_URL}`);
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
		throw new Error((error as Error).message || "Network error occurred");
	}
};

const ContactForm = () => {
	const turnstileKey = import.meta.env.VITE_TURNSTILE_KEY;
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);
	const [challengeToken, setChallengeToken] = useState("");
	const turnstileRef = useRef<TurnstileInstance | null>(null);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		setValue,
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactDataSchema),
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

	const onSubmit = async (data: ContactFormData) => {
		if (!challengeToken) {
			setError("Please complete the CAPTCHA challenge.");
			return;
		}

		try {
			await newSubmission({ ...data, challengeToken });

			setSuccess(true);
			setError(null);
			reset(); // Reset form fields
			setChallengeToken(""); // Clear the token

			// Reset Turnstile challenge
			if (turnstileRef.current) {
				turnstileRef.current.reset();
			}
		} catch (error) {
			setError((error as Error).message);
		}
	};

	// Automatically hide success or error messages after 3 seconds
	useEffect(() => {
		if (success || error) {
			const timer = setTimeout(() => {
				setSuccess(false);
				setError(null);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [success, error]);

	return (
		<div className="contact-area-2 space-bottom">
			<div className="container">
				<div className="row align-items-center justify-content-center">
					<div className="col-lg-8">
						<div className="contact-form-wrap">
							<div className="title-area text-center mb-30">
								<h3 className="sec-title">Have a Project in Mind?</h3>
								<p>
									Great! We're excited to hear from you and let's start
									something.
								</p>
							</div>

							<form onSubmit={handleSubmit(onSubmit)} noValidate>
								<div className="row">
									{/* Name Field */}
									<div className="col-md-6">
										<div className="form-group">
											<input
												type="text"
												id="name"
												placeholder="Full name *"
												className={`form-control ${errors.name ? "is-invalid" : ""} style-border`}
												aria-invalid={errors.name ? "true" : "false"}
												{...register("name")}
											/>
											{errors.name && (
												<div className="invalid-feedback">
													{errors.name.message}
												</div>
											)}
										</div>
									</div>

									{/* Email Field */}
									<div className="col-md-6">
										<div className="form-group">
											<input
												type="email"
												id="email"
												placeholder="Email address *"
												className={`form-control ${errors.email ? "is-invalid" : ""} style-border`}
												aria-invalid={errors.email ? "true" : "false"}
												{...register("email")}
											/>
											{errors.email && (
												<div className="invalid-feedback">
													{errors.email.message}
												</div>
											)}
										</div>
									</div>

									{/* Message Field */}
									<div className="col-lg-12">
										<div className="form-group">
											<textarea
												id="message"
												placeholder="Tell us about your needs *"
												className={`form-control ${errors.message ? "is-invalid" : ""} style-border style2`}
												rows={5}
												aria-invalid={errors.message ? "true" : "false"}
												{...register("message")}
											/>
											{errors.message && (
												<div className="invalid-feedback">
													{errors.message.message}
												</div>
											)}
										</div>
									</div>

									{/* Turnstile CAPTCHA */}
									<div className="col-lg-12">
										<div className="form-group">
											<Turnstile
												siteKey={turnstileKey}
												className="mb-3 flex justify-center"
												options={{ theme: "light" }}
												onSuccess={onChallengeSuccess}
												ref={turnstileRef} // Attach ref to Turnstile
											/>
											{errors.challengeToken && (
												<div
													className="invalid-feedback"
													style={{ display: "block", textAlign: "center" }}
												>
													{" "}
													{/* Manually make it visible */}
													{errors.challengeToken.message}
												</div>
											)}
										</div>
									</div>
								</div>

								{/* Success and Error Messages */}
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

									{/* Submit Button */}
									<button
										type="submit"
										className="btn btn-primary w-100"
										disabled={isSubmitting}
									>
										<span className="link-effect">
											<span className="effect-1">
												{isSubmitting ? "SENDING" : "SEND MESSAGE"}
											</span>
											<span className="effect-1">
												{isSubmitting ? "SENDING" : "SEND MESSAGE"}
											</span>
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
};

export default ContactForm;
