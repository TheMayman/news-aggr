const processAPIResults = (results) => {
	return results.map((result, index) => {
		if (result.isSuccess && result.data) {
			const data =
				index === 0
					? result.data.articles
					: index === 1
					? result.data.response.docs
					: result.data.response.results
			return data.map((article) => {
				switch (index) {
					case 0: // News API
						return {
							category: "business",
							date: article?.publishedAt,
							description: article?.description,
							image: article?.urlToImage,
							source: "news-api",
							title: article?.title,
							url: article?.url,
						}
					case 1: // NY Times API
						return {
							category: article?.news_desk.toLowerCase(),
							date: article?.pub_date,
							description: article?.snippet,
							image: article?.multimedia[0]?.url
								? "https://static01.nyt.com/" + article?.multimedia[0]?.url
								: null,
							source: "ny-times-api",
							title: article?.headline?.main,
							url: article?.web_url,
						}
					case 2: // The Guardian API
						return {
							category: article?.sectionId.toLowerCase(),
							date: article?.webPublicationDate,
							description: "",
							image: article?.fields?.thumbnail,
							source: "the-guardian-api",
							title: article?.webTitle,
							url: article?.webUrl,
						}
					default:
						return null
				}
			})
		} else {
			return []
		}
	})
}
export default processAPIResults
