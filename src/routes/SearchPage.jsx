import { useContext, useEffect, useState } from "react"
import { ArticlesContext } from "../contexts/ArticlesContext"
import ResultsContainer from "../components/common/ResultsContainer"
import SearchBarContainer from "../components/searchPage/SearchBarContainer"
const SearchPage = () => {
	const [filteredArticlesData, setFilteredArticlesData] = useState([])
	const { allArticles, setSearchQuery, isLoading, isSuccess, error } =
		useContext(ArticlesContext)
	useEffect(() => {
		if (allArticles && isSuccess) {
			setFilteredArticlesData(allArticles)
		}
	}, [isSuccess, allArticles])
	return (
		<div className="search-page">
			<SearchBarContainer
				setSearchQuery={setSearchQuery}
				setFilteredArticlesData={setFilteredArticlesData}
				allArticles={allArticles}
			/>
			<ResultsContainer
				articles={filteredArticlesData}
				isLoading={isLoading}
				isSuccess={isSuccess}
				error={error}
			/>
		</div>
	)
}

export default SearchPage
