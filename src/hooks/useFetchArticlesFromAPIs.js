import { useQueries } from "@tanstack/react-query"
import sendRequest from "../helpers/sendRequest"
import mergeArrays from "../helpers/mergeArrays"
import processAPIResults from "../helpers/processAPIResults"
import { MIN_SEARCH_DATE, MIN_SEARCH_LENGTH } from "../config/config"
// import { format } from "date-fns"
const useFetchArticlesFromAPIs = (searchQuery) => {
	const date_News_API = MIN_SEARCH_DATE
	const date_NY_TIMES = MIN_SEARCH_DATE.replace(/-/g, "")
	const date_THE_GUARDIAN = MIN_SEARCH_DATE
	//sometimes API doesn't return any results for the current date, so we need to get the results from the previous day
	// const date_News_API = format(
	// 	new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
	// 	"yyyy-MM-dd"
	// )
	// const date_NY_TIMES = format(new Date(), "yyyyMMdd")
	// const date_THE_GUARDIAN = format(new Date(), "yyyy-MM-dd")

	const URL_News_API = `https://newsapi.org/v2/everything?q=${searchQuery}&from=${date_News_API}&language=en&sortBy=popularity&apiKey=${
		import.meta.env.VITE_NEWS_API_KEY
	}`
	const URL_NY_TIMES = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&begin_date=${date_NY_TIMES}&api-key=${
		import.meta.env.VITE_NY_TIMES_API_KEY
	}`
	const URL_THE_GUARDIAN = `https://content.guardianapis.com/search?q=${searchQuery}&from-date=${date_THE_GUARDIAN}&show-fields=headline,thumbnail&order-by=relevance&api-key=${
		import.meta.env.VITE_THE_GUARDIAN_API_KEY
	}`
	const results = useQueries({
		queries: [
			{
				queryKey: ["articles_NewsAPI", searchQuery],
				queryFn: async () => sendRequest(URL_News_API),
				enabled: searchQuery.length >= MIN_SEARCH_LENGTH,
				retry: false,
				refetchOnWindowFocus: false,
			},
			{
				queryKey: ["articles_NYTimes", searchQuery],
				queryFn: async () => sendRequest(URL_NY_TIMES),
				enabled: searchQuery.length >= MIN_SEARCH_LENGTH,
				retry: false,
				refetchOnWindowFocus: false,
			},
			{
				queryKey: ["articles_TheGuardian", searchQuery],
				queryFn: async () => sendRequest(URL_THE_GUARDIAN),
				enabled: searchQuery.length >= MIN_SEARCH_LENGTH,
				retry: false,
				refetchOnWindowFocus: false,
			},
		],
	})

	const articles = processAPIResults(results)

	const allArticles = mergeArrays(articles)

	return {
		allArticles,
		isLoading: results.some((result) => result.isLoading),
		isSuccess: results.every((result) => result.isSuccess),
		error: results.find((result) => result.error)?.error,
	}
}

export default useFetchArticlesFromAPIs
