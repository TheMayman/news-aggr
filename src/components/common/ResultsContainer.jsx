import ArticleCard from "./ArticleCard"
import ErrorContainer from "./ErrorContainer"
import LoadingContainer from "./LoadingContainer"
import NoResults from "./NoResults"

const ResultsContainer = ({ articles, isSuccess, isLoading, error }) => {
	if (isLoading) {
		return <LoadingContainer />
	}

	if (error) {
		return <ErrorContainer />
	}

	if (isSuccess && articles?.length > 0) {
		return (
			<div className="results">
				<div className="articles-container">
					{articles.map((article, index) => (
						<ArticleCard article={article} key={index} />
					))}
				</div>
			</div>
		)
	}

	if (articles?.length === 0) {
		return <NoResults />
	}

	return null
}

export default ResultsContainer
