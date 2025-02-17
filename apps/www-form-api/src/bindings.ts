/**
 * NOTE!: Deployments from cloudflare will remove env vars that aren't encrypted (secrets). Those should be added
 * manually for prod and staging or to .dev.vars for local development. Non-encrypted env vars should be added to
 * the wrangler.toml. Below is the cumulation of both.
 */

export interface Bindings {
	[key: string]: unknown; // required to conform to the Bindings type
	CLIENT_HOST: string;
	ENVIRONMENT: string;
	SENDGRID_API_KEY: string;
}

// extend the ContextVariableMap for services and vars manually added to the context
declare module "hono" {
	interface ContextVariableMap {}
}
