import { useQueries } from "@tanstack/react-query"
import mergeArrays from "../helpers/mergeArrays"
import processAPIResults from "../helpers/processAPIResults"
import { MIN_SEARCH_DATE } from "../config/config"
import { generateNewsAPIURL } from "../helpers/generateNewsAPIURL"
import { generateNYTimesURL } from "../helpers/generateNYTimesURL"
import { generateTheGuardianURL } from "../helpers/generateTheGuardianURL"
import { createQueries } from "../helpers/createQueries"
const useFetchArticlesFromAPIs = (searchQuery = null, criteria = null) => {
	const date_News_API = MIN_SEARCH_DATE
	const date_NY_TIMES = MIN_SEARCH_DATE.replace(/-/g, "")
	const date_THE_GUARDIAN = MIN_SEARCH_DATE

	const newsAPIs = [
		{
			key: "articles_NewsAPI",
			URL: generateNewsAPIURL(
				searchQuery,
				criteria,
				date_News_API,
				import.meta.env.VITE_NEWS_API_KEY
			),
			source: "NewsAPI",
		},
		{
			key: "articles_NYTimes",
			URL: generateNYTimesURL(
				searchQuery,
				criteria,
				date_NY_TIMES,
				import.meta.env.VITE_NY_TIMES_API_KEY
			),
			source: "NY Times",
		},
		{
			key: "articles_TheGuardian",
			URL: generateTheGuardianURL(
				searchQuery,
				criteria,
				date_THE_GUARDIAN,
				import.meta.env.VITE_THE_GUARDIAN_API_KEY
			),
			source: "The Guardian",
		},
	]
	const results = useQueries({
		queries: createQueries(newsAPIs, searchQuery, criteria),
	})

	const articles = processAPIResults(results)

	const allArticles = mergeArrays(articles)

	return {
		allArticles,
		isLoading: results.some((result) => result.isLoading),
		isSuccess: results.some((result) => result.isSuccess),
		error: results.find((result) => result.error)?.error,
	}
}

export default useFetchArticlesFromAPIs
