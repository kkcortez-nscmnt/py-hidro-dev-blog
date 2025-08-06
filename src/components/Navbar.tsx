"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLaptopCode, FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const base = "transition hover:text-blue-400";
  const active = "text-blue-400 font-semibold";
  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projetos" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "Sobre" },
    { href: "/contact", label: "Contato" },
  ];

  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
      <div className="max-w-60xl mx-auto px-6 p-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-blue-300"
        >
          <FaLaptopCode className="text-blue-300 text-xl" />
          <span>PyHidroDev</span>
        </Link>

        {/* DeskTopNav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm text-gray-300">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={pathname === href ? active : base}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-400 text-xl cursor-pointer"
            title="Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav  */}
      {menuOpen && (
        <div className="bg-gray-800 border-t border-gray-700 px-6 py-4 space-y-2 space-x-4 text-center">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? active : base}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
