import Image from "next/image";
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <main className="flex flex-col gap-8 items-center sm:items-start">
          <h1 className="text-4xl font-bold text-center sm:text-left">
            Welcome to CodeCamp for High Schoolers!
          </h1>
          <p className="text-lg text-center sm:text-left">
            Learn the fundamentals of programming with hands-on projects and guidance from experienced instructors.
          </p>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Sign up for our upcoming bootcamp sessions.
            </li>
            <li>Start your journey to becoming a coding pro!</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://codecamp.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up Now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://codecamp.com/learn-more"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </main>
      </div>
      <footer className="border-t border-black/[.08] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 flex-wrap items-center justify-center">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://codecamp.com/about-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Us
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://codecamp.com/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://codecamp.com/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
