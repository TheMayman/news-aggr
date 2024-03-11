import { useRef, useEffect, useCallback } from "react"

export function useDebounce(func, delay) {
	const timerRef = useRef() // Use useRef for timer

	const debouncedFunction = useCallback(
		(...args) => {
			clearTimeout(timerRef.current) // Cancel previous timer
			timerRef.current = setTimeout(() => {
				func(...args)
			}, delay)
		},
		[func, delay]
	) // Update the function when func or delay changes

	useEffect(() => {
		return () => {
			// Clear the timer when the component unmounts
			clearTimeout(timerRef.current)
		}
	}, [])

	return debouncedFunction
}
