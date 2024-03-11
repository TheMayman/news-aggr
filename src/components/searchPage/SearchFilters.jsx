import { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Select from "react-select"
import { MIN_SEARCH_DATE, customDropDownStyles } from "../../config/config"
import FilterContainer from "../common/FilterContainer"

const SearchFilters = ({ allArticles, setFilteredArticlesData }) => {
	const [startDate, setStartDate] = useState(null)
	const [selectedSource, setSelectedSource] = useState(null)
	const [selectedCategory, setSelectedCategory] = useState(null)
	const minDate = new Date(MIN_SEARCH_DATE)
	const sourceOptions = [
		{ value: "news-api", label: "NewsAPI" },
		{ value: "ny-times-api", label: "New York Times" },
		{ value: "the-guardian-api", label: "The Guardian" },
	]
	const categoryOptions = [
		{ value: "technology", label: "Technology" },
		{ value: "sport", label: "Sports" },
		{ value: "business", label: "Business" },
	]
	useEffect(() => {
		let filteredArticles = allArticles

		if (startDate) {
			filteredArticles = filteredArticles.filter(
				(article) => new Date(article.date) >= startDate
			)
		}
		if (selectedCategory) {
			filteredArticles = filteredArticles.filter(
				(article) => article.category == selectedCategory.value
			)
		}
		if (selectedSource) {
			filteredArticles = filteredArticles.filter(
				(article) => article.source === selectedSource.value
			)
		}

		setFilteredArticlesData(filteredArticles)
	}, [
		startDate,
		allArticles,
		setFilteredArticlesData,
		selectedSource,
		selectedCategory,
	])

	return (
		<div className="filters-container">
			<FilterContainer label="Select date from" htmlFor="date-picker">
				<DatePicker
					id="date-picker"
					showIcon
					selected={startDate}
					onChange={(date) => setStartDate(date)}
					minDate={minDate}
					className="date-picker"
					placeholderText="Select a date"
					disabled={allArticles.length <= 0}
				/>
			</FilterContainer>
			<FilterContainer label="Select category" htmlFor="category-dropdown">
				<Select
					id="category-dropdown"
					options={categoryOptions}
					onChange={setSelectedCategory}
					styles={customDropDownStyles}
					placeholder="Select a category"
					isDisabled={allArticles.length <= 0}
				/>
			</FilterContainer>
			<FilterContainer label="Select source" htmlFor="source-dropdown">
				<Select
					id="source-dropdown"
					options={sourceOptions}
					onChange={setSelectedSource}
					styles={customDropDownStyles}
					placeholder="Select a source"
					isDisabled={allArticles.length <= 0}
				/>
			</FilterContainer>
		</div>
	)
}
export default SearchFilters
