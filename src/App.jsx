import { ArticlesProvider } from "./contexts/ArticlesContext"
import SearchPage from "./routes/SearchPage"
import "./styles/App.scss"

const App = () => {
	return (
		<ArticlesProvider>
			<SearchPage />
		</ArticlesProvider>
	)
}

export default App
