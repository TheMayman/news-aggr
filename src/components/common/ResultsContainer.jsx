import ArticleCard from "./ArticleCard"

const ResultsContainer = ({ articles, isSuccess, isLoading, error }) => {
	return (
		<div className="results">
			{isLoading && <div className="loading">Loading...</div>}
			{error && <div className="error">Error loading articles</div>}
			<div className="articles-container">
				{isSuccess &&
					articles?.length > 0 &&
					articles?.map((article, index) => (
						<ArticleCard article={article} key={index} />
					))}
			</div>
		</div>
	)
}

export default ResultsContainer
