import { MIN_SEARCH_LENGTH } from "../config/config"
import { checkIfSourceAvailable } from "./checkIfSourceAvailable"
import sendRequest from "./sendRequest"

export const createNewsQuery = (key, url, source, searchQuery, criteria) => ({
	queryKey: [key, searchQuery, criteria],
	queryFn: async () => sendRequest(url),
	enabled:
		searchQuery?.length >= MIN_SEARCH_LENGTH ||
		!!checkIfSourceAvailable(criteria, source),
	retry: false,
	refetchOnWindowFocus: false,
})
