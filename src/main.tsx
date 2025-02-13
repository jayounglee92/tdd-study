import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import { worker } from "./mocks/browser";

async function enableMocking() {
	// if (
	// 	import.meta.env.MODE === "development" ||
	// 	import.meta.env.VITE_USE_MOCKS === "true"
	// ) {
	// 	worker.start();
	// }
	// return;
}

enableMocking().then(() => {
	createRoot(document.getElementById("root")!).render(
		<StrictMode>
			<App />
		</StrictMode>
	);
});
