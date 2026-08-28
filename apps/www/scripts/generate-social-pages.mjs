import { cp, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";

const appDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDirectory = path.join(appDirectory, "src/content/blog");
const imageDirectory = path.join(appDirectory, "src/assets/images/blog");
const outputDirectory = path.join(appDirectory, "dist");
const siteUrl = "https://equalsons.com";
const fallbackImage = `${siteUrl}/assets/img/es-og.jpg`;

const template = await readFile(path.join(outputDirectory, "index.html"), "utf8");
const files = await readdir(contentDirectory);

for (const filename of files.filter((file) => file.endsWith(".md"))) {
	const source = await readFile(path.join(contentDirectory, filename), "utf8");
	const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);

	if (!match) continue;

	const frontmatter = parseYaml(match[1]);
	if (frontmatter.draft) continue;

	const slug = filename.replace(/\.md$/, "");
	const pageUrl = `${siteUrl}/blog/${slug}`;
	let imageUrl = fallbackImage;

	if (frontmatter.image) {
		const normalizedImage = frontmatter.image.replace(/^\.?\//, "");
		const sourceImage = path.resolve(imageDirectory, normalizedImage);
		const relativeImage = path.relative(imageDirectory, sourceImage);

		if (relativeImage.startsWith("..") || path.isAbsolute(relativeImage)) {
			throw new Error(`Blog image escapes the image directory: ${frontmatter.image}`);
		}

		const publicImage = `/assets/blog-share/${relativeImage.split(path.sep).join("/")}`;
		const destinationImage = path.join(outputDirectory, publicImage);
		await mkdir(path.dirname(destinationImage), { recursive: true });
		await cp(sourceImage, destinationImage);
		imageUrl = `${siteUrl}${publicImage}`;
	}

	const title = `${frontmatter.title} - Equal Sons`;
	const socialMetadata = [
		`<meta name="description" content="${escapeAttribute(frontmatter.excerpt)}">`,
		`<link rel="canonical" href="${pageUrl}">`,
		`<meta property="og:type" content="article">`,
		`<meta property="og:url" content="${pageUrl}">`,
		`<meta property="og:title" content="${escapeAttribute(title)}">`,
		`<meta property="og:description" content="${escapeAttribute(frontmatter.excerpt)}">`,
		`<meta property="og:image" content="${imageUrl}">`,
		`<meta name="twitter:card" content="summary_large_image">`,
		`<meta name="twitter:url" content="${pageUrl}">`,
		`<meta name="twitter:title" content="${escapeAttribute(title)}">`,
		`<meta name="twitter:description" content="${escapeAttribute(frontmatter.excerpt)}">`,
		`<meta name="twitter:image" content="${imageUrl}">`,
	].join("\n  ");

	const html = template
		.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
		.replace(/\s*<!-- Open Graph \/ Facebook -->[\s\S]*?<!-- Twitter -->[\s\S]*?<meta property="twitter:image"[^>]*>/, "")
		.replace("</head>", `  ${socialMetadata}\n</head>`);
	const pageDirectory = path.join(outputDirectory, "blog", slug);

	await mkdir(pageDirectory, { recursive: true });
	await writeFile(path.join(pageDirectory, "index.html"), html);
}

function escapeAttribute(value) {
	return escapeHtml(String(value)).replaceAll("'", "&#39;");
}

function escapeHtml(value) {
	return String(value)
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;");
}
