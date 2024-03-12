import { checkIfKeyAvailable } from "./checkIfKeyAvailable"
import { convertCriteriaToString } from "./convertCriteriaToString"

export const generateTheGuardianURL = (
	searchQuery,
	criteria,
	date,
	API_KEY
) => {
	if (criteria) {
		const authorKeyTheGuardian = checkIfKeyAvailable(criteria?.author)
			? `&author=${convertCriteriaToString(criteria?.author, " | ")}`
			: ""
		const sectionKeyTheGuardian = checkIfKeyAvailable(criteria?.category)
			? `&section=${convertCriteriaToString(criteria?.category, " | ")}`
			: ""

		return `https://content.guardianapis.com/search?${authorKeyTheGuardian}${sectionKeyTheGuardian}&show-fields=byline,headline,thumbnail&api-key=${API_KEY}`
	}
	return `https://content.guardianapis.com/search?q=${searchQuery}&from-date=${date}&show-fields=headline,thumbnail&order-by=relevance&api-key=${API_KEY}`
}
