import { useState } from "react"

const Tag = ({ text, onToggle }) => {
	const [isSelected, setIsSelected] = useState(false)

	const toggleSelect = () => {
		setIsSelected((prev) => !prev)
		onToggle(text)
	}

	return (
		<div
			className={`tag-container ${isSelected ? "selected" : ""}`}
			onClick={toggleSelect}
		>
			{text}
		</div>
	)
}

export default Tag
