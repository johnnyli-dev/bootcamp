import { useState, useEffect, useRef } from "react";

export function useScrollRotation(specialParam: boolean = false, rotSpeed: number = 0) {
	const [rotation, setRotation] = useState(0);
    const scrollLocRef = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const newLoc = window.scrollY;
            let diff = 0;
            if (!specialParam) { 
                diff = (scrollLocRef.current - newLoc) * .25; // edit constant on this line to change rotation speed for general shapes
            }
            else {
                diff = (scrollLocRef.current - newLoc) * rotSpeed;
            }
            setRotation((prevRotation) => prevRotation + diff);
            scrollLocRef.current = newLoc;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [specialParam, rotSpeed]);

	return rotation;
}
