import { MIN_SEARCH_LENGTH } from "../../config/config"

const SearchButton = ({ submit, searchQuery }) => {
	return (
		<button
			type="submit"
			className="search-button"
			onClick={submit}
			disabled={searchQuery?.length <= MIN_SEARCH_LENGTH}
		>
			Enter
		</button>
	)
}

export default SearchButton
