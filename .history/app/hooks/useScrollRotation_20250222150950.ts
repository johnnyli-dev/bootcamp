import { useState, useEffect } from "react";

export function useScrollRotation() {
	const [rotation, setRotation] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY;
			setRotation(scrolled * 0.1); // Adjust this multiplier to control rotation speed
            console.log("scrolled", scrolled);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return rotation;
}
