import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-slate-800 text-white px-4 py-3">
      <div className="flex justify-between items-center">
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <div className="hidden md:flex space-x-6 text-sm md:text-base">
          {[
            ["/", "Home"],
            ["/services", "Our Services"],
            ["/quotation", "Request a Free Quotation"],
            ["/aboutus", "About Us"],
            ["/contact", "Contact Us"],
            ["/faq", "Faq"],
            ["/privacy", "Privacy&Policy"],
          ].map(([path, label]) => (
            <Link
              key={path}
              to={path}
              className={`${
                isActive(path) ? "text-yellow-400 font-semibold" : "transition"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-3 text-sm">
          {[
            ["/", "Home"],
            ["/services", "Our Services"],
            ["/quotation", "Request a Free Quotation"],
            ["/aboutus", "About Us"],
            ["/contact", "Contact Us"],
            ["/faq", "Faq"],
            ["/privacy", "Privacy&Policy"],
          ].map(([path, label]) => (
            <Link
              key={path}
              to={path}
              className={`${
                isActive(path) ? "text-yellow-400 font-semibold" : "transition"
              }`}
              onClick={() => setMenuOpen(false)}
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
