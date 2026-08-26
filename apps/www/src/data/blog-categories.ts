import type { BlogCategory } from "../types/blog";

export const blogCategories: BlogCategory[] = [
	{ id: "build", name: "Build" },
	{ id: "lead", name: "Lead" },
	{ id: "share", name: "Share" },
];

export function getBlogCategory(categoryId: string) {
	return blogCategories.find((category) => category.id === categoryId);
}
