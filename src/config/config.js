export const MIN_SEARCH_LENGTH = 3
export const MIN_SEARCH_DATE = "2024-03-01"
export const backgroundColor = "#242424"
export const inputBackgroundColor = "#3b3b3b"
export const goldenColor = "#e49d4a"
export const fontColorPrimary = "#f1f5f9"
export const customDropDownStyles = {
	control: (provided, state) => ({
		...provided,
		background: inputBackgroundColor,
		borderColor: state.isFocused ? goldenColor : "transparent",
		boxShadow: state.isFocused ? null : null,
		padding: ".5rem 1.5rem .5rem 0",
		borderRadius: "7px",
		width: "15rem",
		"&:hover": {
			borderColor: state.isFocused ? goldenColor : "gray",
		},
	}),
	option: (provided, state) => ({
		...provided,
		color: state.isSelected ? "white" : "black",
		background: state.isSelected ? "gray" : "white",
		"&:hover": {
			background: "gray",
			color: "white",
		},
	}),
	singleValue: (provided) => ({
		...provided,
		color: "white",
	}),
}
