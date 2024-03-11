import { createContext, useState } from "react"
import { MIN_SEARCH_LENGTH } from "../config/config"
import useFetchArticlesFromAPIs from "../hooks/useFetchArticlesFromAPIs"

export const ArticlesContext = createContext()

export const ArticlesProvider = ({ children }) => {
	const [searchQuery, setSearchQuery] = useState("")
	const { allArticles, isLoading, isSuccess, error } = useFetchArticlesFromAPIs(
		searchQuery,
		MIN_SEARCH_LENGTH
	)

	return (
		<ArticlesContext.Provider
			value={{
				searchQuery,
				setSearchQuery,
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
