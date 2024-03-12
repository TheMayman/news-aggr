import { createContext, useState } from "react"
import { MIN_SEARCH_LENGTH } from "../config/config"
import useFetchArticlesFromAPIs from "../hooks/useFetchArticlesFromAPIs"

export const ArticlesContext = createContext()

export const ArticlesProvider = ({ children }) => {
	const [searchQuery, setSearchQuery] = useState("")
	const [criteria, setCriteria] = useState([])
	const { allArticles, isLoading, isSuccess, error } = useFetchArticlesFromAPIs(
		searchQuery,
		criteria,
		MIN_SEARCH_LENGTH
	)

	return (
		<ArticlesContext.Provider
			value={{
				searchQuery,
				setSearchQuery,
				criteria,
				setCriteria,
				allArticles,
				isLoading,
				isSuccess,
				error,
			}}
		>
			{children}
		</ArticlesContext.Provider>
	)
}
