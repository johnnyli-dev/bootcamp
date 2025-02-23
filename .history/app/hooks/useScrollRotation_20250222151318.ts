import { useEffect, useState, useRef } from "react";

export function useScrollRotation() {
    const [rotation, setRotation] = useState(0);
    const MAX_ROTATION = 360; // maximum rotation value
    const requestRef = useRef<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const newRotation = Math.min(window.scrollY / 10, MAX_ROTATION);
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
            requestRef.current = requestAnimationFrame(() => {
                setRotation(newRotation);
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);

    return rotation;
}