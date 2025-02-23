"use client";
import { useState, useRef, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";

interface FaqDropdownProps {
	question: string;
	answer: string;
}

export default function FaqDropdown({ question, answer }: FaqDropdownProps) {
	const [open, setOpen] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const [contentHeight, setContentHeight] = useState(0);

	// Measure the content’s full height whenever 'open' changes
	useEffect(() => {
		if (contentRef.current) {
			setContentHeight(contentRef.current.scrollHeight);
		}
	}, [open]);

	return (
		<div className="border bg-white border-gray-200 rounded-md overflow-hidden">
			{/* Toggle Button */}
			<button
				onClick={() => setOpen(!open)}
				className="w-full flex justify-between items-center p-4 text-left"
			>
				<span className="font-medium faq-question">{question}</span>
				<FiChevronRight
					className={`transform transition-transform duration-200 ${
						open ? "rotate-90" : ""
					}`}
				/>
			</button>

			{/* Smoothly Transition the Content’s Height */}
			<div
				ref={contentRef}
				className="transition-all duration-300 ease-in-out px-4 text-gray-600"
				style={{
					// When open, set the container’s height to the content’s measured height
					// When closed, set it to 0
					height: open ? contentHeight : 0,
					opacity: open ? 1 : 0,
				}}
			>
				{/* Actual content wrapper so we can measure scrollHeight accurately */}
				<div className="py-4 faq-answer">{answer}</div>
			</div>
		</div>
	);
}
