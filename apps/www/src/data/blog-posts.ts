import { z } from "zod";
import { parse as parseYaml } from "yaml";
import type { AdjacentPosts, BlogPost } from "../types/blog";
import { getAuthor } from "./authors";
import { getBlogCategory } from "./blog-categories";

const frontmatterSchema = z
	.object({
		title: z.string().min(1),
		excerpt: z.string().min(1),
		publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
		author: z.string().min(1),
		category: z.string().min(1),
		image: z.string().min(1).optional(),
		imageAlt: z.string().min(1).optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	})
	.refine((data) => !data.image || data.imageAlt, {
		message: "imageAlt is required when image is set",
		path: ["imageAlt"],
	});

type Frontmatter = z.infer<typeof frontmatterSchema>;

const markdownFiles = import.meta.glob("../content/blog/*.md", {
	query: "?raw",
	import: "default",
	eager: true,
}) as Record<string, string>;

function parseMarkdown(source: string, path: string) {
	const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);

	if (!match) {
		throw new Error(`Blog post ${path} is missing frontmatter.`);
	}

	return {
		frontmatter: frontmatterSchema.parse(parseYaml(match[1])),
		content: match[2].trim(),
	};
}

function makePost(path: string, source: string): BlogPost {
	const { frontmatter, content } = parseMarkdown(source, path);
	const slug = path.split("/").pop()?.replace(/\.md$/, "");

	if (!slug) throw new Error(`Could not create a slug for ${path}.`);
	validateReferences(frontmatter, path);

	return {
		slug,
		title: frontmatter.title,
		excerpt: frontmatter.excerpt,
		publishedAt: frontmatter.publishedAt,
		authorId: frontmatter.author,
		categoryId: frontmatter.category,
		image: frontmatter.image,
		imageAlt: frontmatter.imageAlt,
		tags: frontmatter.tags,
		draft: frontmatter.draft,
		content,
	};
}

function validateReferences(frontmatter: Frontmatter, path: string) {
	if (!getAuthor(frontmatter.author)) {
		throw new Error(`Unknown author "${frontmatter.author}" in ${path}.`);
	}

	if (!getBlogCategory(frontmatter.category)) {
		throw new Error(`Unknown category "${frontmatter.category}" in ${path}.`);
	}
}

const allPosts = Object.entries(markdownFiles)
	.map(([path, source]) => makePost(path, source))
	.filter((post) => !post.draft)
	.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

if (new Set(allPosts.map((post) => post.slug)).size !== allPosts.length) {
	throw new Error("Blog post filenames must produce unique slugs.");
}

export const blogPosts = allPosts;

export function getBlogPost(slug: string) {
	return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(categoryId?: string | null) {
	if (!categoryId) return blogPosts;
	return blogPosts.filter((post) => post.categoryId === categoryId);
}

export function getAdjacentPosts(post: BlogPost): AdjacentPosts {
	const categoryPosts = getPostsByCategory(post.categoryId);
	const index = categoryPosts.findIndex((candidate) => candidate.slug === post.slug);

	return {
		previous: categoryPosts[index + 1],
		next: index > 0 ? categoryPosts[index - 1] : undefined,
	};
}

export function formatPublishedDate(publishedAt: string) {
	return new Intl.DateTimeFormat("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	}).format(new Date(`${publishedAt}T00:00:00`));
}
