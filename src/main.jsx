import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/index.scss"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./routes/ErrorPage.jsx"
import SearchPage from "./routes/SearchPage.jsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ArticlesProvider } from "./contexts/ArticlesContext.jsx"
import App from "./App.jsx"

const queryClient = new QueryClient()

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <App />,
			errorElement: <ErrorPage />,
		},
		{
			path: "search",
			element: <SearchPage />,
			errorElement: <ErrorPage />,
		},
	],
	{ basename: "/news-aggr" }
)

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ArticlesProvider>
				<RouterProvider router={router} />
			</ArticlesProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</React.StrictMode>
)
