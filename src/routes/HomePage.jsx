import { useContext, useEffect, useState } from "react"
import SearchBar from "../components/searchPage/SearchBar"
import { ArticlesContext } from "../contexts/ArticlesContext"
import Tag from "../components/common/Tag"

const HomePage = () => {
	const { setSearchQuery } = useContext(ArticlesContext)
	const [selectedTags, setSelectedTags] = useState([])
	const tags = [
		{ text: "NY Times", type: "source" },
		{ text: "The Guardian", type: "source" },
		{ text: "NewsAPI", type: "source" },
		{ text: "Sports", type: "category" },
		{ text: "Technology", type: "category" },
		{ text: "Business", type: "category" },
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
	useEffect(() => {
		console.log(selectedTags, "selectedTags")
	}, [selectedTags])

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
		</section>
	)
}

export default HomePage
