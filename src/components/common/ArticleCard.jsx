import DefaultImage from "../../assets/default-image.png"
const ArticleCard = ({ article }) => {
	return (
		<article className="article">
			<a href={article.url}>
				<h3 className="article-title">{article.title}</h3>
				<img
					className={`article-image ${!article.image ? "default" : ""}`}
					src={article.image ?? DefaultImage}
					alt=""
				/>

				{/* <p className="article-description">{article.description}</p> */}
			</a>
		</article>
	)
}

export default ArticleCard
