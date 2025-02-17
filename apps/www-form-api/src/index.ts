import { Hono } from "hono";

const app = new Hono();

app.get("/ping", (c) => {
	return c.json({ message: "pong" }, 200);
});

export default app;
