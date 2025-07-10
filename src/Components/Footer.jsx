import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">

        {/* Column 1 */}
        <div className="space-y-2">
          <h4 className="font-semibold text-yellow-400 mb-2">Crystal Clear Roofs</h4>
          <Link to="/" className="hover:text-lime-300 block">Home</Link>
          <Link to="/services" className="hover:text-lime-300 block">Our Services</Link>
          <Link to="/aboutus" className="hover:text-lime-300 block">About Us</Link>
          <Link to="/contact" className="hover:text-lime-300 block">Contact Us</Link>
        </div>

        {/* Column 2 */}
        <div className="space-y-2">
          <h4 className="font-semibold text-yellow-400 mb-2">Helpful Links</h4>
          <Link to="/faq" className="hover:text-lime-300 block">FAQ</Link>
          <Link to="/privacy" className="hover:text-lime-300 block">Privacy Policy</Link>
          <Link to="/quotation" className="hover:text-lime-300 block">Get Quotation</Link>
        </div>

        {/* Column 3 */}
       

      
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-xs text-gray-400 px-4">
        <p>&copy; {new Date().getFullYear()} CrystalClearRoof. All rights reserved.</p>
        <p className="mt-1">
          For inquiries, reach out via contact form or email: <span className="text-white font-medium">info@crystalclearroofs.co.uk</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
