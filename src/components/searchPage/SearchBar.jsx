import * as Yup from "yup"
import SearchInput from "../common/SearchInput"
import SearchButton from "../common/SearchButton"
import { Field, Form, Formik } from "formik"
import { MIN_SEARCH_LENGTH } from "../../config/config"
import { useNavigate, useLocation } from "react-router-dom"

const SearchBar = ({ setSearchQuery }) => {
	const validationSchema = Yup.object().shape({
		searchQuery: Yup.string().min(
			MIN_SEARCH_LENGTH,
			`Search query must be at least ${MIN_SEARCH_LENGTH} characters`
		),
	})
	const navigate = useNavigate()
	const location = useLocation()
	return (
		<div className="search-bar">
			<Formik
				initialValues={{
					searchQuery: "",
				}}
				onSubmit={(values) => {
					setSearchQuery(values.searchQuery)
					if (location.pathname !== "/search") {
						navigate("/search")
					}
				}}
				validationSchema={validationSchema}
			>
				{({ setFieldValue, handleSubmit, values }) => (
					<Form className="search-form">
						<label htmlFor="searchQuery">Search</label>
						<Field
							name="searchQuery"
							placeholder="Search"
							component={SearchInput}
							onChange={(e) => {
								const value = e.target.value
								setFieldValue("searchQuery", value)
							}}
						/>
						<SearchButton
							submit={handleSubmit}
							searchQuery={values.searchQuery}
						/>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default SearchBar
