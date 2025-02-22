"use client";
import Image from 'next/image';

interface TeamMemberCardProps {
	name: string;
	subtitle: string;
	description: string;
	profileImage: string;
	socialLinks?: {
		icon: JSX.Element;
		url: string;
	}[];
}

export function TeamMemberCard({
	name,
	subtitle,
	description,
	profileImage,
	socialLinks = [],
}: TeamMemberCardProps) {
	return (
		<div className="border border-gray-200 rounded-lg p-6 w-full max-w-md bg-white">
			{/* Top row: Profile image + Name & Socials */}
			<div className="flex items-center">
				<img
					src={profileImage}
					alt={name}
					className="w-16 h-16 rounded-full object-cover mr-4"
				/>
				<div className="flex-1">
					{/* Name and Social Icons */}
					<div className="flex items-center justify-between">
						<h3 className="text-xl font-bold">{name}</h3>
						<div className="flex space-x-2">
							{socialLinks.map((link, index) => (
								<a
									key={index}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-500 hover:text-gray-700"
								>
									{link.icon}
								</a>
							))}
						</div>
					</div>

					{/* Subtitle (e.g. "Computer Science at XYZ") */}
					<p className="text-gray-500 text-sm mt-1">{subtitle}</p>
				</div>
			</div>

			{/* Description */}
			<p className="mt-4 text-gray-700 leading-relaxed">{description}</p>
		</div>
	);
}
