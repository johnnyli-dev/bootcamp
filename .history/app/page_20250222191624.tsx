import Image from "next/image";
import Navbar from "./components/Navbar";
import PCard from "./components/PCard";
import FaqDropdown from "./components/FaqDropdown";
import {
	GitHubLogoIcon,
	LinkedInLogoIcon,
	InstagramLogoIcon,
} from "@radix-ui/react-icons";

import {
	RedCircle,
	YellowHexagon,
	GreenStar,
	BlueSquare,
} from "./components/Shapes";

export default function Home() {
	return (
		<div className="min-h-screen bg-white relative overflow-hidden">
			{/* Hero Section */}
			<div className="relative h-screen flex items-center justify-center">
				{/* SVG Shapes positioned relative to hero section */}
				<div className="absolute inset-0">
					<RedCircle />
					<YellowHexagon />
					<GreenStar />
					<BlueSquare />
				</div>

				<Navbar />

				{/* Centered Content */}
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 mt-100">
					<main className="flex flex-col items-center text-center gap-8">
						<h1 className="text-5xl font-bold">
							Understand Your Education
						</h1>
						<p className="text-lg text-gray-600 max-w-2xl">
							Redefining education by making it open, clear, and
							hands-on. Our immersive coding bootcamps empower you
							with real-world skills through transparent,
							step-by-step instruction and collaborative learning.
						</p>

						{/* CTA Buttons */}
						<div className="flex gap-7 whitespace-nowrap">
							<a
								href="#learn-more"
								className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors w-32 text-center text-sm"
							>
								Learn More
							</a>
							<a
								href="#join"
								className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full hover:bg-blue-200 transition-colors w-32 text-center text-sm"
							>
								Join Us!
							</a>
						</div>
					</main>

					{/* About Us (Meet the Team) Section */}
					<section className="py-16 flex flex-col items-center">
						<h2 className="text-3xl font-bold mb-8">
							Meet the Team
						</h2>

						{/* Cards Container */}
						<div className="flex flex-col md:flex-row gap-8 justify-center">
							{/* Brock Card */}
							<PCard
								name="Brock Brown"
								subtitle="Computer Science at Northwestern University"
								description="Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris nullam dignissim at arcu enim risus gravida. Feugiat vulputate primis urna libero sem netus ridiculus. Inceptos nec aptent interdum dis sollicitudin vulputate curae iaculis. Etiam habitasse ac natoque ad nisl dolor dui in."
								profileImage="https://placehold.co/100.png"
								socialLinks={[
									{
										icon: (
											<GitHubLogoIcon
												width={20}
												height={20}
											/>
										),
										url: "https://github.com/bbrockbrown",
									},
									{
										icon: (
											<LinkedInLogoIcon
												width={20}
												height={20}
											/>
										),
										url: "https://www.linkedin.com/in/brock-brown-058216221/",
									},
									{
										icon: (
											<InstagramLogoIcon
												width={20}
												height={20}
											/>
										),
										url: "https://www.instagram.com/bbrockbrown/",
									},
								]}
							/>

							{/* JQL Card */}
							<PCard
								name="Jonathan Li"
								subtitle="Applied Math • Computer Science at Berkeley"
								description="Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris nullam dignissim at arcu enim risus gravida. Feugiat vulputate primis urna libero sem netus ridiculus. Inceptos nec aptent interdum dis sollicitudin vulputate curae iaculis. Etiam habitasse ac natoque ad nisl dolor dui in."
								profileImage="https://placehold.co/100.png"
								socialLinks={[
									{
										icon: (
											<GitHubLogoIcon
												width={20}
												height={20}
											/>
										),
										url: "https://github.com/johnnyli-dev",
									},
									{
										icon: (
											<LinkedInLogoIcon
												width={20}
												height={20}
											/>
										),
										url: "https://www.linkedin.com/in/johnny-li-390841220/",
									},
									{
										icon: (
											<InstagramLogoIcon
												width={20}
												height={20}
											/>
										),
										url: "https://www.instagram.com/johnny.lii/",
									},
								]}
							/>
						</div>
					</section>

					{/* Section dedicated to why we are different */}

					{/* FAQ Section */}
					{/* <section className="py-16 flex flex-col items-center">
                        <h2 className="text-3xl font-bold mb-8">
                            FAQ
                        </h2>
                        <FaqDropdown />
                    </section> */}
					<section className="py-16 flex flex-col items-center">
						<h2 className="text-3xl font-bold mb-4">
							Frequently Asked{" "}
							<span className="text-teal-500">Questions</span>
						</h2>
						<p className="text-gray-600 max-w-xl text-center mb-8">
							We&apos;ve compiled a list of the most frequently asked
							questions about SmartNotes to help you get the
							information you need. If you have any other
							questions, feel free to reach out to our support
							team.
						</p>

						<div className="w-full max-w-2xl space-y-2">
							<FaqDropdown
								question="What is SmartNotes?"
								answer="SmartNotes is a note-taking platform designed to help you capture, organize, and share ideas effortlessly."
							/>
							<FaqDropdown
								question="How do I get started with SmartNotes?"
								answer="Getting started with SmartNotes is easy! Simply visit our website, sign up for a free trial, and start exploring the features."
							/>
							<FaqDropdown
								question="What are the key features of SmartNotes?"
								answer="SmartNotes offers real-time collaboration, advanced search, version history, and seamless integrations with popular productivity tools."
							/>
							<FaqDropdown
								question="How much does SmartNotes cost?"
								answer="SmartNotes offers a free tier with core features. Premium plans are available for users who need additional storage, advanced security, or priority support."
							/>
							<FaqDropdown
								question="Who is SmartNotes for?"
								answer="SmartNotes is perfect for students, professionals, and anyone who wants to keep track of their ideas and tasks in one place."
							/>
							<FaqDropdown
								question="What is SmartNotes?"
								answer="It's the same powerful note-taking solution described above, but you can use this extra entry to highlight any additional details or repeating info."
							/>
						</div>
					</section>
				</div>
			</div>

			{/* Additional content sections (to allow for spinnage during development) */}
			<div className="h-screen" />
			<div className="h-screen" />
		</div>
	);
}
