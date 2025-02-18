export interface SendArgs {
	authKey: string;
	body: string;
}
export interface EmailerService {
	send: (args: SendArgs) => Promise<void>;
}

const Emailer: EmailerService = {
	send: async (args) => {
		try {
			// Send a verification email here and set a pending status
			const url = "https://api.sendgrid.com/v3/mail/send";
			const options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					Authorization: `Bearer ${args.authKey}`,
				},
				body: args.body,
			};

			const response = await fetch(url, options);
			if (response.status > 399) {
				await response.json();
			}
		} catch (error) {
			console.error("EmailService send error", error);
		}
	},
};

export default Emailer;
