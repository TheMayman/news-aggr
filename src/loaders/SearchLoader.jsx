import useFetchArticlesFromAPIs from "../hooks/useFetchArticlesFromAPIs"

const ArticlesQuery = (query) => useFetchArticlesFromAPIs(query)

export const SearchLoader =
	(queryClient) =>
	async ({ params }) => {
		const query = ArticlesQuery(params.query)
		return (
			queryClient.getQueryData(query.queryKey) ??
			(await queryClient.fetchQuery(query))
		)
	}
