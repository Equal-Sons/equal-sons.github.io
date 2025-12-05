import type { IMenuDT } from "../types/menu-d-t";

const menu_data: IMenuDT[] = [
	{
		id: 0,
		title: "SERVICES",
		link: "/services",
		subMenuItems: [
			{
				id: 1,
				title: "BUILD",
				link: "/services/build",
			},
			{
				id: 2,
				title: "LEAD",
				link: "/services/lead",
			},
			{
				id: 3,
				title: "SHARE",
				link: "/services/share",
			},
		],
	},
	// {
	// 	id: 1,
	// 	title: "WORK",
	// 	link: "/work",
	// },
	{
		id: 2,
		title: "ABOUT",
		link: "/about",
	},
	{
		id: 3,
		title: "CONTACT",
		link: "/contact",
	},
];

export default menu_data;
