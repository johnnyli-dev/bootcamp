"use client";
import { useScrollRotation } from "../hooks/useScrollRotation";

export function RedCircle() {
	const rotation = useScrollRotation(true, 0.75); // 0.75 is the rotation speed for the red circle; diff from others
	return (
		<svg
			className="our-circle absolute left-[-15%] top-[-10rem] w-[35vw] h-[35vw]"
			viewBox="0 0 256 256"
			style={{
				transform: `rotate(${rotation}deg)`,
				WebkitTransform: `rotate(${rotation}deg)`,
				MozTransform: `rotate(${rotation}deg)`,
			}}
		>
			<ellipse cx="128" cy="128" rx="100" ry="125" fill="#EF4444" />
		</svg>
	);
}

export function YellowHexagon() {
	const rotation = useScrollRotation();
	return (
		<div
			className="our-hexagon absolute top-[-10rem] right-[-20%] w-[40vw] h-[40vw]"
			style={{
				transform: `rotate(${-rotation}deg)`,
				WebkitTransform: `rotate(${-rotation}deg)`,
				MozTransform: `rotate(${-rotation}deg)`,
			}}
		>
			<svg viewBox="0 0 256 256" className="w-full h-full">
				<polygon
					points="128,8 231.92,68 231.92,188 128,248 24.08,188 24.08,68"
					fill="#FCD34D"
				/>
			</svg>
		</div>
	);
}

export function GreenStar() {
	const rotation = useScrollRotation();
	return (
		<div 
            className="our-star absolute top-[50rem] left-[-25%] w-[50vw] h-[50vw]"
            style={{
                transform: `rotate(${-rotation}deg)`,
                WebkitTransform: `rotate(${-rotation}deg)`,
                MozTransform: `rotate(${-rotation}deg)`,
            }}
        >
			<svg
				viewBox="0 0 256 256"
			>
				<polygon
					points="
                        128,8 
                        152.62,60.34 
                        205.13,36.08 
                        190.35,92 
                        246.18,107.16 
                        198.91,140.52 
                        231.92,188 
                        174.25,183.16 
                        169.04,240.76 
                        128,200 
                        86.96,240.76 
                        81.75,183.16 
                        24.08,188 
                        57.09,140.52 
                        9.82,107.16 
                        65.65,92 
                        50.87,36.08 
                        103.38,60.34
                        "
					fill="#4ADE80"
				/>
			</svg>
		</div>
	);
}

export function BlueSquare() {
	const rotation = useScrollRotation();
	return (
        <div
            className="our-square absolute top-[75%] left-[80%] w-[35vw] h-[35vw]"
            style={{
                transform: `rotate(${-rotation}deg)`,
                WebkitTransform: `rotate(${-rotation}deg)`,
                MozTransform: `rotate(${-rotation}deg)`,
            }}
        >
            <svg
                viewBox="0 0 256 256"
            >
                <rect x="0" y="0" width="256" height="256" fill="blue" />
            </svg>
        </div>
	);
}
