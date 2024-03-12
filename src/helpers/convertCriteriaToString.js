export const convertCriteriaToString = (criteria, symbol) =>
	criteria ? criteria?.toString().toLowerCase().replace(/,/g, symbol) : null
