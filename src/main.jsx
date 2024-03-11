import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/index.scss"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/Root.jsx"
import ErrorPage from "./routes/ErrorPage.jsx"
import SearchPage from "./routes/SearchPage.jsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient()

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "search",
				element: <SearchPage />,
				errorElement: <ErrorPage />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</React.StrictMode>
)
