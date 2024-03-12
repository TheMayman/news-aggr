import { createNewsQuery } from "./createNewsQuery"

export const createQueries = (apis, searchQuery, criteria) => {
	return apis.map((api) =>
		createNewsQuery(api.key, api.URL, api.source, searchQuery, criteria)
	)
}
