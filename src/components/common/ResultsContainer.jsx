import ArticleCard from "./ArticleCard"
import NoResults from "./NoResults"

const ResultsContainer = ({ articles, isSuccess, isLoading, error }) => {
	return (
		<div className="results">
			{isLoading && <div className="loading">Loading...</div>}
			{error && <div className="error">Error loading articles</div>}
			{isSuccess && articles?.length > 0 ? (
				<div className="articles-container">
					{articles?.map((article, index) => (
						<ArticleCard article={article} key={index} />
					))}
				</div>
			) : (
				<NoResults />
			)}
		</div>
	)
}

export default ResultsContainer
