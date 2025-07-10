import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    ["/", "Home"],
    ["/services", "Our Services"],
    ["/quotation", "Free Quotation"],
    ["/aboutus", "About Us"],
    // ["/contact", "Contact Us"],
    // ["/faq", "FAQ"],
    // ["/privacy", "Privacy & Policy"],
  ];

  return (
    <header className="bg-gradient-to-r from-slate-900 via-cyan-700 to-cyan-500 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo + Tagline */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src="/images/logo1.png"
            alt="Crystal Clear Roofs"
            className="h-24 object-contain"
          />
          <div className="hidden md:block text-sm text-lime-300 font-semibold tracking-wide">
            Your Trusted Roof Cleaning Experts
          </div>
        </Link>

        {/* Quotation + Contact */}
        <div className="flex gap-6 text-xs sm:text-sm md:text-base justify-center md:justify-end">
          <Link
            to="/quotation"
            className="flex flex-col items-center px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition duration-200"
          >
            <div className="text-3xl">📝</div>
            <div className="font-bold text-white">Quotation</div>
            <div className="text-xs text-lime-300">Request Free</div>
          </Link>
          <Link
            to="/contact"
            className="flex flex-col items-center px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition duration-200"
          >
            <div className="text-3xl">📧</div>
            <div className="font-bold text-white">Contact Us</div>
            <div className="text-xs text-lime-300">Online</div>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-slate-950 px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Hamburger for Mobile */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Desktop Links with slide + underline animation */}
          <div className="hidden md:flex space-x-6 text-sm md:text-base">
            {navLinks.map(([path, label]) => (
              <Link
                key={path}
                to={path}
                className={`relative group inline-block transition duration-200 ${
                  isActive(path)
                    ? "text-lime-300 font-semibold"
                    : "text-white hover:text-lime-300"
                }`}
              >
                <span className="inline-block transform group-hover:-translate-y-0.5 transition duration-300">
                  {label}
                </span>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-lime-300 group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 flex flex-col space-y-3 text-sm px-2">
            {navLinks.map(([path, label]) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`transition duration-200 ${
                  isActive(path)
                    ? "text-lime-300 font-semibold underline"
                    : "text-white hover:text-lime-300"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
