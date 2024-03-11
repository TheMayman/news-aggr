import axios from "axios"

const sendRequest = async (url) => {
	try {
		const response = await axios.get(url, {
			headers: {
				Accept: "application/json",
			},
		})

		return response.data
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error("Axios error: ", error.message)
			throw error
		} else {
			console.error("Unexpected error: ", error)
			throw new Error("An unexpected error occurred")
		}
	}
}

export default sendRequest
