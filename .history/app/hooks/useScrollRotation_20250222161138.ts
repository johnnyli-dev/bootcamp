import { useState, useEffect, useRef } from "react";

export function useScrollRotation() {
	const [rotation, setRotation] = useState(0);
    const scrollLocRef = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const newLoc = window.scrollY;
            const diff = (scrollLocRef.current - newLoc) * .5;
            setRotation((prevRotation) => prevRotation + diff);
            scrollLocRef.current = newLoc;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return rotation;
}
