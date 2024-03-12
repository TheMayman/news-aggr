import { checkIfKeyAvailable } from "./checkIfKeyAvailable"
import { convertCriteriaToString } from "./convertCriteriaToString"

export const generateNYTimesURL = (searchQuery, criteria, date, API_KEY) => {
	if (criteria) {
		const authorKeyNYTimes = checkIfKeyAvailable(criteria?.author)
			? convertCriteriaToString(criteria?.author, ",")
			: ""
		const categoryKeyNYTimes = checkIfKeyAvailable(criteria?.category)
			? `fq=news_desk:("${convertCriteriaToString(criteria?.category, '","')}")`
			: ""

		return `https://api.nytimes.com/svc/search/v2/articlesearch.json?${categoryKeyNYTimes}${
			authorKeyNYTimes ? "OR" + authorKeyNYTimes : ""
		}&api-key=${API_KEY}`
	}
	return `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&begin_date=${date}&api-key=${API_KEY}`
}
