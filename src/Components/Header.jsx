import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-slate-600 px-4 py-3 shadow-md">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src="/images/logo1.png"
          alt="Logo"
          className="h-16 md:h-24 object-contain"
        />
      </Link>

      {/* Quotation and Contact Icons */}
      <div className="flex gap-6 text-white text-sm md:text-base justify-center">
        <Link to="/quotation" className="flex flex-col items-center hover:text-yellow-400 transition">
          <div className="text-3xl">📝</div>
          <div className="font-bold">Quotation</div>
          <div className="text-xs">Request a Free</div>
        </Link>
        <Link to="/contact" className="flex flex-col items-center hover:text-yellow-400 transition">
          <div className="text-3xl">📧</div>
          <div className="font-bold">Contact Us</div>
          <div className="text-xs">Online</div>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
