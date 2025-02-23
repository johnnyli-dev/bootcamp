"use client";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
// Install react-icons if you haven't already: npm install react-icons

interface FaqDropdownProps {
	question: string;
	answer: string;
}

export default function FaqDropdown({ question, answer }: FaqDropdownProps) {
	const [open, setOpen] = useState(false);

	return (
		<div className="border border-gray-200 rounded-md">
			{/* Toggle Button */}
			<button
				onClick={() => setOpen(!open)}
				className="w-full flex justify-between items-center p-4 text-left"
			>
				<span className="font-medium">{question}</span>
				<FiChevronRight
					className={`transform transition-transform duration-200 ${
						open ? "rotate-90" : ""
					}`}
				/>
			</button>

			{/* Dropdown Content */}
			{open && <div className="px-4 pb-4 text-gray-600">{answer}</div>}
		</div>
	);
}
