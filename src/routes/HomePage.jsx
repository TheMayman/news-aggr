import { useContext, useState } from "react"
import SearchBar from "../components/searchPage/SearchBar"
import { ArticlesContext } from "../contexts/ArticlesContext"
import Tag from "../components/common/Tag"
import ResultsContainer from "../components/common/ResultsContainer"

const HomePage = () => {
	const [selectedTags, setSelectedTags] = useState([])
	const [searched, setSearched] = useState(false)
	const {
		allArticles,
		setSearchQuery,
		setCriteria,
		isLoading,
		isSuccess,
		error,
	} = useContext(ArticlesContext)
	const tags = [
		{ text: "NY Times", type: "source" },
		{ text: "The Guardian", type: "source" },
		{ text: "NewsAPI", type: "source" },
		{ text: "football", type: "category" },
		{ text: "technology", type: "category" },
		{ text: "business", type: "category" },
		{ text: "Tim Hardwick", type: "author" },
		{ text: "Hartley Charlton", type: "author" },
		{ text: "Kris Holt", type: "author" },
		{ text: "Scharon Harding", type: "author" },
		{ text: "Mitchel Broussard", type: "author" },
	]
	const handleTagToggle = (tag) => {
		setSelectedTags((prevTags) => {
			if (prevTags.some((t) => t.text === tag.text)) {
				return prevTags.filter((t) => t.text !== tag.text)
			} else {
				return [...prevTags, tag]
			}
		})
	}

	const handleNewsFeed = (selectedTags) => {
		const groupedTags = selectedTags.reduce((acc, tag) => {
			if (!acc[tag.type]) {
				acc[tag.type] = []
			}
			acc[tag.type].push(tag.text)
			return acc
		}, {})
		setCriteria(groupedTags)
		setSearched(true)
	}
	return (
		<section className="home-page-container">
			<h1>Welcome to the News Aggregator</h1>
			<h2>
				Customize your news feed by selecting tags or use the search to find
				news articles
			</h2>
			<div className="search-container">
				<SearchBar setSearchQuery={setSearchQuery} />
			</div>
			<div className="tags-container">
				{tags.map((tag, index) => (
					<Tag
						key={index}
						text={tag.text}
						onToggle={() => handleTagToggle(tag)}
					/>
				))}
			</div>
			<div className="news-feed-button">
				<button
					onClick={() => handleNewsFeed(selectedTags)}
					disabled={selectedTags.length < 1}
				>
					Get News Feed
				</button>
			</div>
			{searched > 0 && (
				<div className="results-container">
					<ResultsContainer
						selectedTags={selectedTags}
						articles={allArticles}
						error={error}
						isLoading={isLoading}
						isSuccess={isSuccess}
					/>
				</div>
			)}
		</section>
	)
}

export default HomePage
