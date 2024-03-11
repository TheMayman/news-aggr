import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ArticlesProvider } from "./contexts/ArticlesContext"
import SearchPage from "./routes/SearchPage"
import "./styles/App.scss"

const App = () => {
	const queryClient = new QueryClient()

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ArticlesProvider>
					<SearchPage />
				</ArticlesProvider>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	)
}

export default App
