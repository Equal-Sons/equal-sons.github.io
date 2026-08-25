import { readFile, rm } from "node:fs/promises";
import path from "node:path";

const appRoot = path.resolve(import.meta.dirname, "..");
const distRoot = path.join(appRoot, "dist");
const manifest = JSON.parse(
	await readFile(path.join(distRoot, "assets/generated/manifest.json"), "utf8"),
);

for (const source of Object.keys(manifest)) {
	const outputPath = path.resolve(distRoot, source.slice(1));
	if (!outputPath.startsWith(`${distRoot}${path.sep}`)) {
		throw new Error(`Refusing to remove image outside dist: ${source}`);
	}
	await rm(outputPath, { force: true });
}

console.log(
	`Removed ${Object.keys(manifest).length} oversized source images from dist.`,
);
