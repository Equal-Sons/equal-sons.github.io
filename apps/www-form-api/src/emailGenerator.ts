interface EmailBaseArgs {
	host: string;
	toAddress: string[];
}

export interface ContactEmailArgs extends EmailBaseArgs {
	name: string;
	email: string;
	message: string;
}

export interface EmailGenerator {
	contactSubmissionEmail: (args: ContactEmailArgs) => string;
}

const emailGenerator: EmailGenerator = {
	contactSubmissionEmail: (args: ContactEmailArgs): string => {
		const payload = {
			from: {
				email: "justin@equalsons.com",
			},
			reply_to: {
				email: args.email,
			},
			personalizations: [
				{
					to: args.toAddress.map((address) => ({ email: address })),
				},
			],
			subject: "New Contact Submission",
			content: [
				{
					type: "text/plain",
					value: `A new contact submission has been received. Here are the details:\n\nName: ${args.name}\nEmail: ${args.email}\nMessage: ${args.message}\n\n`,
				},
			],
		};

		return JSON.stringify(payload);
	},
};

export default emailGenerator;
