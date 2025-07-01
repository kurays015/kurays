import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#23242b] text-white p-4 flex flex-col sm:flex-row items-center justify-between shadow-md border-b border-[#2c2e36] gap-2 sm:gap-0">
      <h1 className="text-xl sm:text-2xl font-bold tracking-widest">
        Kuraysnime
      </h1>
      <nav className="space-x-2 sm:space-x-4 text-xs sm:text-sm flex flex-wrap justify-center">
        <Link href="#" className="hover:underline text-gray-200">
          Home
        </Link>
        <Link href="#" className="hover:underline text-gray-200">
          Series
        </Link>
        <Link href="#" className="hover:underline text-gray-200">
          Movies
        </Link>
        <Link href="#" className="hover:underline text-gray-200">
          About
        </Link>
      </nav>
    </header>
  );
}
