import assert from "node:assert/strict";
import test from "node:test";

import { RampApiError, generate } from "../src/index.mjs";

test("generate sends the expected request", async () => {
	const payload = {
		shader: "moire",
		colors: ["#000000"],
		effects: [],
	};

	const response = await generate(payload, {
		apiKey: "test-key",
		baseUrl: "https://example.com/",
		fetch: async (url, init) => {
			assert.equal(url, "https://example.com/generate");
			assert.equal(init.method, "POST");
			assert.equal(init.headers.get("content-type"), "application/json");
			assert.equal(init.headers.get("X-Ramp-Api-Key"), "test-key");
			assert.deepEqual(JSON.parse(init.body), payload);

			return Response.json({ ok: true });
		},
	});

	assert.deepEqual(await response.json(), { ok: true });
});

test("generate requires an API key", async () => {
	await assert.rejects(generate({}, { apiKey: "" }), /Missing Ramp API key/);
});

test("generate exposes API error details", async () => {
	await assert.rejects(
		generate(
			{},
			{
				apiKey: "test-key",
				fetch: async () => new Response("bad shader", { status: 422 }),
			},
		),
		(error) => {
			assert.ok(error instanceof RampApiError);
			assert.equal(error.status, 422);
			assert.equal(error.body, "bad shader");
			return true;
		},
	);
});
