interface EmailBaseArgs {
	host: string;
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
			subject: "New Contact Submission",
			sender: {
				name: "Equal Sons",
				email: "justin@equalsons.com",
			},
			to: [{ email: "justin@equalsons.com" }, { email: "ace@equalsons.com" }],
			replyTo: {
				email: args.email,
			},
			htmlContent: `
      <html>
        <body>
          <p>A new contact submission has been received. Here are the details:</p>
          <ul>
            <li>Name: ${args.name}</li>
            <li>Email: ${args.email}</li>
            <li>Message: ${args.message}</li>
          </ul>
        </body>
      </html>
      `,
		};

		return JSON.stringify(payload);
	},
	// contactSubmissionEmail: (args: ContactEmailArgs): string => {
	// 	const payload = {
	// 		from: {
	// 			email: "justin@equalsons.com",
	// 		},
	// 		reply_to: {
	// 			email: args.email,
	// 		},
	// 		personalizations: [
	// 			{
	// 				to: args.toAddress.map((address) => ({ email: address })),
	// 			},
	// 		],
	// 		subject: "New Contact Submission",
	// 		content: [
	// 			{
	// 				type: "text/plain",
	// 				value: `A new contact submission has been received. Here are the details:\n\nName: ${args.name}\nEmail: ${args.email}\nMessage: ${args.message}\n\n`,
	// 			},
	// 		],
	// 	};

	// 	return JSON.stringify(payload);
	// },
};

export default emailGenerator;
