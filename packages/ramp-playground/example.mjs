import { generate } from "./src/index.mjs";

// Edit this object to try other combinations.
const payload = {
	shader: "moire",
	colors: ["#000000", "#cbded0", "#5e8067"],
	effects: [],
};

const response = await generate(payload);
const contentType = response.headers.get("content-type") ?? "";

console.log(`${response.status} ${response.statusText}`);

if (contentType.includes("application/json")) {
	console.dir(await response.json(), { depth: null });
} else {
	console.log(await response.text());
}
