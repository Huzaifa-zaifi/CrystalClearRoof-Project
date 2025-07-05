import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} CrystalClearRoof. All rights reserved.</p>
        <p className="text-sm">Made with ❤️  by Huzaifa</p>
      </div>
    </footer>
  );
};

export default Footer;
