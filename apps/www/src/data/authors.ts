import type { Author } from "../types/blog";

export const authors: Author[] = [
	{
		id: "justin-kauszler",
		name: "Justin Kauszler",
		role: "Managing Technical Partner",
		image: "/assets/img/team/team-j.jpg",
		bio: "Justin leads Equal Sons' technical practice, bringing deep expertise in product development, system architecture, and technology strategy.",
	},
	{
		id: "ace-callwood",
		name: "Ace Callwood",
		role: "Managing Partner",
		image: "/assets/img/team/team-a.jpg",
		bio: "Ace leads Equal Sons' strategy and communication practice, specializing in positioning, go-to-market strategy, and executive communication.",
	},
];

export function getAuthor(authorId: string) {
	return authors.find((author) => author.id === authorId);
}
