interface EmailBaseArgs {
	host: string;
}

export interface ContactEmailArgs extends EmailBaseArgs {
	name: string;
	email: string;
	message: string;
}

export interface EmailGenerator {
	contactSubmissionEmail: (args: ContactEmailArgs) => EmailMessageBuilder;
}

const escapeHtml = (value: string): string =>
	value.replace(
		/[&<>"']/g,
		(character) =>
			({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#039;",
			})[character] ?? character,
	);

const emailGenerator: EmailGenerator = {
	contactSubmissionEmail: (args: ContactEmailArgs): EmailMessageBuilder => {
		return {
			subject: "New Contact Submission",
			from: {
				name: "Equal Sons",
				email: "justin@equalsons.com",
			},
			to: ["justin@equalsons.com"],
			replyTo: args.email,
			text: `A new contact submission has been received. Here are the details:\n\nName: ${escapeHtml(args.name)}\nEmail: ${escapeHtml(args.email)}\nMessage: ${escapeHtml(args.message)}`,
			html: `
      <html>
        <body>
          <p>A new contact submission has been received. Here are the details:</p>
          <ul>
            <li>Name: ${escapeHtml(args.name)}</li>
            <li>Email: ${escapeHtml(args.email)}</li>
            <li>Message: ${escapeHtml(args.message)}</li>
          </ul>
        </body>
      </html>
      `,
		};
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
