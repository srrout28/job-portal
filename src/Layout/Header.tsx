import React from "react";
import { useRouter } from "next/router";
import { Menu } from "lucide-react";
import { navArr } from "../../utils/Home";
import { logo } from "../assests/Home";
export default function Header() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex items-center justify-between font-medium">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer hover:opacity-90 transition"
          onClick={() => router.push("/")}
        >
          <img src={logo.src} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navArr.map((item: any) => (
            <span
              key={item.id}
              onClick={() => router.push(item.path)}
              className={`cursor-pointer text-base transition duration-300 relative group ${
                router.pathname === item.path
                  ? "text-blue-700 font-semibold"
                  : "text-gray-600 hover:text-blue-700"
              }`}
            >
              {item.title}
              <span className="block h-[2px] w-0 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
            </span>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-3">
          <button
            onClick={() => router.push("/register")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm transition-shadow duration-300 shadow hover:shadow-lg"
          >
            Register
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Menu className="text-gray-700 w-6 h-6" />
        </div>
      </div>
    </header>
  );
}
