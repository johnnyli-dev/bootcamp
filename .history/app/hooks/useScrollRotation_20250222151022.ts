import { useEffect, useState } from "react";

export function useScrollRotation() {
  const [rotation, setRotation] = useState(0);
  const MAX_ROTATION = 360; // maximum rotation value

  useEffect(() => {
    const handleScroll = () => {
      // Compute rotation based on scroll, then cap it
      const newRotation = Math.min(window.scrollY / 10, MAX_ROTATION);
      requestAnimationFrame(() => {
        setRotation(newRotation);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return rotation;
}