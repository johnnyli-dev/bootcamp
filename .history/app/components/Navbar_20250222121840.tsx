import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="fixed top-4 left-4 right-4 z-50">
      <nav className="bg-white/90 backdrop-blur-sm rounded-3xl p-1 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0 px-2">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="CodeCamp Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </Link>
            </div>
            
            {/* Center navigation items */}
            <div className="flex-1 flex justify-center">
              <div className="hidden sm:flex space-x-8 items-center">
                <Link
                  href="/about-us"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm"
                >
                  About Us
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm"
                >
                  Pricing
                </Link>
                <Link
                  href="/curriculum"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm"
                >
                  Curriculum
                </Link>
              </div>
            </div>

            {/* Sign Up button */}
            <div className="flex-shrink-0 px-3">
              <Link
                href="/sign-up"
                className="bg-[#2cd13f] text-white px-4 py-2 rounded-full text-sm hover:bg-[#8BBBCF] transition-colors"
              >
                Sign Up →
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
} 