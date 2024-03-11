import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/index.scss"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/Root.jsx"
import ErrorPage from "./routes/ErrorPage.jsx"
import SearchPage from "./routes/SearchPage.jsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
	},
	{
		path: "search",
		element: <SearchPage />,
		errorElement: <ErrorPage />,
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
