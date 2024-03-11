import SearchBar from "./SearchBar"
import SearchFilters from "./SearchFilters"

const SearchBarContainer = ({
	setSearchQuery,
	setFilteredArticlesData,
	allArticles,
}) => {
	return (
		<div className="search-bar-fixed-container">
			<SearchBar setSearchQuery={setSearchQuery} />
			<SearchFilters
				setFilteredArticlesData={setFilteredArticlesData}
				allArticles={allArticles}
			/>
		</div>
	)
}

export default SearchBarContainer
