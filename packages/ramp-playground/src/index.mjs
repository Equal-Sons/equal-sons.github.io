const DEFAULT_BASE_URL = "https://api.try-ramp.dev";

export class RampApiError extends Error {
	constructor(response, body) {
		super(
			`Ramp API returned ${response.status} ${response.statusText}: ${body}`,
		);
		this.name = "RampApiError";
		this.status = response.status;
		this.body = body;
	}
}

/**
 * Call Ramp's generate endpoint.
 *
 * The raw Response is returned so callers can choose whether to read JSON, text,
 * or binary data.
 *
 * @param {Record<string, unknown>} payload
 * @param {{
 *   apiKey?: string,
 *   baseUrl?: string,
 *   headers?: HeadersInit,
 *   signal?: AbortSignal,
 *   fetch?: typeof globalThis.fetch
 * }} [options]
 * @returns {Promise<Response>}
 */
export async function generate(payload, options = {}) {
	const apiKey = options.apiKey ?? process.env.RAMP_API_KEY;

	if (!apiKey) {
		throw new Error(
			"Missing Ramp API key. Set RAMP_API_KEY or pass options.apiKey.",
		);
	}

	const headers = new Headers(options.headers);
	headers.set("content-type", "application/json");
	headers.set("X-Ramp-Api-Key", apiKey);

	const baseUrl = options.baseUrl ?? DEFAULT_BASE_URL;
	const url = `${baseUrl.replace(/\/$/, "")}/generate`;
	const fetcher = options.fetch ?? globalThis.fetch;
	const response = await fetcher(url, {
		method: "POST",
		headers,
		body: JSON.stringify(payload),
		signal: options.signal,
	});

	if (!response.ok) {
		const body = await response.text();
		throw new RampApiError(response, body);
	}

	return response;
}
