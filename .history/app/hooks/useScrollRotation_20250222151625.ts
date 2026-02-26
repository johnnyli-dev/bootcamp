// app/hooks/useScrollRotation.ts
import { useEffect, useState, useRef } from "react";

export function useScrollRotation() {
	const [rotation, setRotation] = useState(0);
	const prevScroll = useRef<number>(0);
	const requestRef = useRef<number | null>(null);
	const MAX_DIFF = 10; // maximum allowed change per scroll event

	useEffect(() => {
		// initialize the previous scroll position
		prevScroll.current = window.scrollY;

		const handleScroll = () => {
			const newScroll = window.scrollY;
			let diff = prevScroll.current - newScroll;

			// Clamp the diff so it doesn't jump too much:
			if (diff > MAX_DIFF) diff = MAX_DIFF;
			if (diff < -MAX_DIFF) diff = -MAX_DIFF;

			prevScroll.current = newScroll;

			// Use requestAnimationFrame to update the rotation
			if (requestRef.current !== null) {
				cancelAnimationFrame(requestRef.current);
			}
			requestRef.current = requestAnimationFrame(() => {
				setRotation((prev) => prev + diff);
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (requestRef.current !== null) {
				cancelAnimationFrame(requestRef.current);
			}
		};
	}, []);

	return rotation;
}
