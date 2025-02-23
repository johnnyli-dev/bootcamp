"use client";
import Image from "next/image";
import { JSX } from "react";

interface SocialLink {
	icon: JSX.Element;
	url: string;
}

interface PCardProps {
	name: string;
	subtitle: string;
	description: string;
	profileImage: string;
	socialLinks: SocialLink[];
}

export default function PCard({
	name,
	subtitle,
	description,
	profileImage,
	socialLinks,
}: PCardProps) {
	return (
		<div className="border border-gray-200 rounded-lg p-6 w-full max-w-xl bg-white">
			{/* Top row: Profile image + Name & Socials */}
			<div className="flex items-center">
				<Image
					src={profileImage}
					alt={name}
					width={100}
					height={100}
					className="rounded-full object-cover mr-4"
				/>
				<div className="flex-1">
					<div className="flex items-center justify-between">
						<h3 className="text-xl font-bold">{name}</h3>
						<div className="flex space-x-2">
							{socialLinks.map((link, index) => (
								<a
									key={index}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-800 hover:text-blue-900"
								>
									{link.icon}
								</a>
							))}
						</div>
					</div>
					<p className="text-gray-500 text-sm mt-1">{subtitle}</p>
				</div>
			</div>
			{/* Description */}
			<p className="mt-4 text-gray-700 leading-relaxed">{description}</p>
		</div>
	);
}
