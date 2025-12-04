import type { ITeamDT } from "../types/team-d-t";

const team_data: ITeamDT[] = [
	{
		id: 1,
		imageSrc: "/assets/img/team/team-j.jpg",
		name: "Justin Kauszler",
		designation: "Managing Technical Partner",
		bio: "Justin leads our technical practice, bringing deep expertise in product development, system architecture, and technology strategy.",
		detailedBio:
			"Justin brings over a decade of experience building products and leading technical teams. He's helped companies from early-stage startups to established enterprises make smart technology decisions and build products that scale. Before founding Equal Sons, Justin led engineering teams, built products from zero to scale, and learned what works (and what doesn't) in the trenches. He believes the best technology decisions come from understanding business context, not just technical trends. When he's not building products or advising CTOs, you'll find him exploring Richmond's food scene or tinkering with new frameworks.",
		areasOfFocus: [
			"Web & App Development",
			"Technology Strategy & Architecture",
			"MVP Creation & Product Development",
			"Systems Integration",
			"Fractional CTO Services",
		],
		email: "justin@equalsons.com",
	},
	{
		id: 2,
		imageSrc: "/assets/img/team/team-a.jpg",
		name: "Ace Callwood",
		designation: "Managing Partner",
		bio: "Ace leads our strategy and communication practice, specializing in positioning, go-to-market strategy, and executive communication.",
		detailedBio:
			"Ace has spent his career at the intersection of strategy, marketing, and leadership. He's helped dozens of companies find their voice, position their offerings, and communicate with impact. Whether facilitating a leadership offsite, developing a go-to-market strategy, or taking the stage as a keynote speaker, Ace brings clarity to complexity and helps leaders move with confidence. Before Equal Sons, Ace led marketing and strategy teams, built brands from the ground up, and learned that great strategy means nothing without great execution. He believes the best work happens when you partner with people who care as much about the outcome as you do.",
		areasOfFocus: [
			"Marketing Strategy & Positioning",
			"Go-to-Market Strategy",
			"Public Speaking & Keynotes",
			"Facilitation & Mediation",
			"Workshops & Leadership Training",
		],
		email: "ace@equalsons.com",
	},
];

export default team_data;
