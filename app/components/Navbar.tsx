import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-black/[.08] dark:border-white/[.145]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl">
              CodeCamp
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <Link
              href="/courses"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm"
            >
              Courses
            </Link>
            <Link
              href="/schedule"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm"
            >
              Schedule
            </Link>
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm"
            >
              About Us
            </Link>
            <Link
              href="/sign-up"
              className="bg-foreground text-background px-4 py-2 rounded-full text-sm hover:bg-[#383838] transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 