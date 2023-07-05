import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import Error from "./pages/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
		errorElement: <Error />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
