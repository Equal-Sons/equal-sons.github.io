import {
	access,
	mkdir,
	readFile,
	readdir,
	rm,
	stat,
	writeFile,
} from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const appRoot = path.resolve(import.meta.dirname, "..");
const sourceRoot = path.join(appRoot, "public/assets/img");
const outputRoot = path.join(appRoot, "public/assets/generated");
const manifestPath = path.join(appRoot, "src/generated/responsive-images.ts");
const cachePath = path.join(outputRoot, ".cache.json");
// Bump when encoder settings change in a way that should invalidate all outputs.
const cacheVersion = 1;
const widths = [480, 768, 1280, 1920, 2560];
const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const homepageBackgrounds = [
	{
		name: "mobile",
		source: path.join(appRoot, "images/homepage_mobile_bg.png"),
		widths: [320],
	},
	{
		name: "desktop",
		source: path.join(appRoot, "images/homepage_desktop_bg.png"),
		widths: [960, 1440, 1920],
	},
];

async function walk(directory) {
	const entries = await readdir(directory, { withFileTypes: true });
	const files = await Promise.all(
		entries.map((entry) => {
			const entryPath = path.join(directory, entry.name);
			return entry.isDirectory() ? walk(entryPath) : entryPath;
		}),
	);

	return files.flat();
}

function publicPath(filePath) {
	return `/${path.relative(path.join(appRoot, "public"), filePath).split(path.sep).join("/")}`;
}

function variantPath(relativeSource, width, extension) {
	const parsed = path.parse(relativeSource);
	return path.join(
		outputRoot,
		parsed.dir,
		parsed.name,
		`${width}.${extension}`,
	);
}

async function readCache() {
	try {
		return JSON.parse(await readFile(cachePath, "utf8"));
	} catch (error) {
		if (error.code !== "ENOENT") {
			console.warn("Ignoring an unreadable responsive image cache.");
		}
		return {};
	}
}

async function outputsExist(outputs) {
	try {
		await Promise.all(outputs.map((output) => access(output)));
		return true;
	} catch {
		return false;
	}
}

function fingerprint(fileStats) {
	return `${cacheVersion}:${fileStats.size}:${fileStats.mtimeMs}`;
}

await mkdir(outputRoot, { recursive: true });

const previousCache = await readCache();
const nextCache = {};
const manifest = {};
let generatedCount = 0;
let cachedCount = 0;
const files = (await walk(sourceRoot)).filter((file) =>
	supportedExtensions.has(path.extname(file).toLowerCase()),
);

for (const file of files) {
	const metadata = await sharp(file).metadata();
	const fileStats = await stat(file);
	if (!metadata.width || !metadata.height) continue;

	// Only replace genuinely oversized sources. Smaller legacy assets keep their
	// existing URLs and are handled by ResponsiveImage's normal <img> fallback.
	if (metadata.width <= 1920 && fileStats.size <= 1024 * 1024) continue;

	const relativeSource = path.relative(sourceRoot, file);
	const sourceUrl = publicPath(file);
	const targetWidths = [
		...new Set([
			...widths.filter((width) => width < metadata.width),
			Math.min(metadata.width, widths.at(-1)),
		]),
	].sort((a, b) => a - b);
	const variants = {
		avif: targetWidths.map((width) => ({
			src: publicPath(variantPath(relativeSource, width, "avif")),
			width,
		})),
		webp: targetWidths.map((width) => ({
			src: publicPath(variantPath(relativeSource, width, "webp")),
			width,
		})),
	};

	const fallbackWidth = targetWidths.at(-1);
	const fallbackExtension = path.extname(file).slice(1).toLowerCase();
	const fallbackPath = variantPath(
		relativeSource,
		fallbackWidth,
		fallbackExtension,
	);
	const parsedSource = path.parse(relativeSource);
	const outputDirectory = path.join(
		outputRoot,
		parsedSource.dir,
		parsedSource.name,
	);
	const cacheEntry = {
		fingerprint: fingerprint(fileStats),
		directory: path.relative(outputRoot, outputDirectory),
	};
	const expectedOutputs = [
		...targetWidths.flatMap((width) => [
			variantPath(relativeSource, width, "avif"),
			variantPath(relativeSource, width, "webp"),
		]),
		fallbackPath,
	];
	const cacheHit =
		previousCache[sourceUrl]?.fingerprint === cacheEntry.fingerprint &&
		(await outputsExist(expectedOutputs));

	if (cacheHit) {
		cachedCount += 1;
	} else {
		await rm(outputDirectory, { recursive: true, force: true });
		await mkdir(outputDirectory, { recursive: true });
		for (const width of targetWidths) {
			for (const format of ["avif", "webp"]) {
				const output = variantPath(relativeSource, width, format);
				const pipeline = sharp(file)
					.rotate()
					.resize({ width, withoutEnlargement: true });
				await (format === "avif"
					? pipeline.avif({ quality: 60, effort: 4 })
					: pipeline.webp({ quality: 78, effort: 4 })
				).toFile(output);
			}
		}

		const fallbackPipeline = sharp(file)
			.rotate()
			.resize({ width: fallbackWidth, withoutEnlargement: true });
		if (fallbackExtension === "jpg" || fallbackExtension === "jpeg") {
			await fallbackPipeline
				.jpeg({ quality: 78, progressive: true })
				.toFile(fallbackPath);
		} else if (fallbackExtension === "png") {
			await fallbackPipeline
				.png({ compressionLevel: 9, palette: true, quality: 85 })
				.toFile(fallbackPath);
		} else {
			await fallbackPipeline
				.webp({ quality: 78, effort: 4 })
				.toFile(fallbackPath);
		}
		generatedCount += 1;
	}
	nextCache[sourceUrl] = cacheEntry;

	manifest[sourceUrl] = {
		width: metadata.width,
		height: metadata.height,
		fallback: { src: publicPath(fallbackPath), width: fallbackWidth },
		...variants,
	};
}

for (const background of homepageBackgrounds) {
	const metadata = await sharp(background.source).metadata();
	if (!metadata.width) continue;
	const fileStats = await stat(background.source);
	const targetWidths = background.widths.filter(
		(width) => width <= metadata.width,
	);
	const targetDirectory = path.join(outputRoot, "homepage", background.name);
	const cacheKey = `homepage:${background.name}`;
	const cacheEntry = {
		fingerprint: fingerprint(fileStats),
		directory: path.relative(outputRoot, targetDirectory),
	};
	const expectedOutputs = targetWidths.flatMap((width) =>
		["avif", "webp", "png"].map((format) =>
			path.join(targetDirectory, `${width}.${format}`),
		),
	);
	const cacheHit =
		previousCache[cacheKey]?.fingerprint === cacheEntry.fingerprint &&
		(await outputsExist(expectedOutputs));

	if (cacheHit) {
		cachedCount += 1;
	} else {
		await rm(targetDirectory, { recursive: true, force: true });
		await mkdir(targetDirectory, { recursive: true });
		for (const width of targetWidths) {
			await sharp(background.source)
				.resize({ width, withoutEnlargement: true })
				.avif({ quality: 60, effort: 4 })
				.toFile(path.join(targetDirectory, `${width}.avif`));
			await sharp(background.source)
				.resize({ width, withoutEnlargement: true })
				.webp({ quality: 78, effort: 4 })
				.toFile(path.join(targetDirectory, `${width}.webp`));
			await sharp(background.source)
				.resize({ width, withoutEnlargement: true })
				.png({ compressionLevel: 9, palette: true, quality: 85 })
				.toFile(path.join(targetDirectory, `${width}.png`));
		}
		generatedCount += 1;
	}
	nextCache[cacheKey] = cacheEntry;
}

for (const [cacheKey, cacheEntry] of Object.entries(previousCache)) {
	if (nextCache[cacheKey] || typeof cacheEntry.directory !== "string") continue;
	const staleDirectory = path.resolve(outputRoot, cacheEntry.directory);
	if (
		staleDirectory !== outputRoot &&
		staleDirectory.startsWith(`${outputRoot}${path.sep}`)
	) {
		await rm(staleDirectory, { recursive: true, force: true });
	}
}

const manifestSource = `// Generated by scripts/generate-responsive-images.mjs. Do not edit.\n\nexport interface ResponsiveImageVariant {\n\tsrc: string;\n\twidth: number;\n}\n\nexport interface ResponsiveImageMetadata {\n\twidth: number;\n\theight: number;\n\tfallback: ResponsiveImageVariant;\n\tavif: ResponsiveImageVariant[];\n\twebp: ResponsiveImageVariant[];\n}\n\nexport const responsiveImages: Record<string, ResponsiveImageMetadata> = ${JSON.stringify(manifest, null, "\t")};\n`;

await mkdir(path.dirname(manifestPath), { recursive: true });
await writeFile(manifestPath, manifestSource);
await writeFile(
	path.join(outputRoot, "manifest.json"),
	`${JSON.stringify(manifest, null, "\t")}\n`,
);
await writeFile(cachePath, `${JSON.stringify(nextCache, null, "\t")}\n`);

console.log(
	`Responsive images: ${generatedCount} regenerated, ${cachedCount} reused.`,
);
