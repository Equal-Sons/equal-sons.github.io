# Ramp playground

A small, dependency-free wrapper around Ramp's `/generate` endpoint.

## Run the example

```sh
cd packages/ramp-playground
cp .env.example .env
# Put your real key in .env, then:
pnpm generate
```

Edit `example.mjs` to change the payload or manipulate the response.

## Use it from another workspace package

Add `@equal-sons/ramp-playground: workspace:*` to that package's dependencies,
then import it:

```js
import { generate } from "@equal-sons/ramp-playground";

const response = await generate({
	shader: "moire",
	colors: ["#000000"],
	effects: [],
});

const result = await response.json();
```

`generate` returns the raw Fetch API `Response`, so JSON, text, blobs, and other
response formats remain available. It reads the API key from `RAMP_API_KEY` by
default; pass `{ apiKey: "..." }` as the second argument to override it.
