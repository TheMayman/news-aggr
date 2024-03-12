import { checkIfKeyAvailable } from "./checkIfKeyAvailable"
import { convertCriteriaToString } from "./convertCriteriaToString"

export const generateNewsAPIURL = (searchQuery, criteria, date, API_KEY) => {
	if (criteria) {
		const categoryKeyNewsAPI = checkIfKeyAvailable(criteria?.category)
			? `everything?q=${convertCriteriaToString(criteria?.category, " AND ")}&`
			: "top-headlines?"

		return `https://newsapi.org/v2/${categoryKeyNewsAPI}language=en&sortBy=popularity&apiKey=${API_KEY}`
	}
	return `https://newsapi.org/v2/everything?q=${searchQuery}&from=${date}&language=en&sortBy=popularity&apiKey=${API_KEY}`
}
