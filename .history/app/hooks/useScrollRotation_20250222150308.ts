import { useEffect, useState } from "react";

export function useScrollRotation() {
	const [rotation, setRotation] = useState(0);

	useEffect(() => {
		let animationFrameId: number;
		const handleScroll = () => {
			const newRotation = window.scrollY / 10;
			animationFrameId = requestAnimationFrame(() => {
				setRotation(newRotation);
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return rotation;
}
