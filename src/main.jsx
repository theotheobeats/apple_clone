import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//...
import * as Sentry from "@sentry/react";

Sentry.init({
	dsn: "https://187d883c81c80941053cc2902d753ddc@o4507337893478400.ingest.us.sentry.io/4507498606559232",
	integrations: [
		Sentry.browserTracingIntegration(),
		// Sentry.metrics.metricsAggregatorIntergration(),
		Sentry.reactRouterV6BrowserTracingIntegration({
			useEffect: React.useEffect,
		}),
		Sentry.replayIntegration({
			maskAllText: false,
			blockAllMedia: false,
		}),
	],
	tracesSampleRate: 1.0,
	tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
	// Session Replay
	replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
	replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
