const FilterContainer = ({ label, htmlFor, children }) => (
	<div className="filter-container">
		<label htmlFor={htmlFor}>{label}</label>
		{children}
	</div>
)
export default FilterContainer
