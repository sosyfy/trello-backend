import express from "express";
import dotenv from "dotenv";
dotenv.config();

import expressConfiguration from "./config/express-config.js";
import routes from "./routes/routes.js";

import AuthCheckerMiddleware from "./middlewares/authorization.js";

export const app = express();

// Configure Express
expressConfiguration();

// check for auth 
app.use(AuthCheckerMiddleware);

// Attach the routes to the app
app.use(routes);

// Start the server
app.listen(process.env["PORT"], () => {
	console.log("Server listening on port " + process.env["PORT"]);
});
