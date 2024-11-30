import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ role }) => {
  return (
    <nav className="bg-[#1e1e1e] p-4 text-white border-b border-[#333333]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Website Name */}
        <div className="flex items-center space-x-2"> {/* Flex layout for left-alignment */}
          <img src="/icon.png" alt="Website Icon" className="h-8 w-8" /> {/* Logo Image */}
          <Link to="/" className="text-2xl font-bold hover:text-[#a8a8a8]">
            PSG Event Bridge
          </Link>
        </div>

        <div className="flex space-x-6">
          <Link
            to="/"
            className="hover:text-[#a8a8a8] px-3 py-2 rounded-md bg-[#2c2c2c] hover:bg-[#383838]"
          >
            🏠
          </Link>
          <Link
            to="/about"
            className="hover:text-[#a8a8a8] px-3 py-2 rounded-md bg-[#2c2c2c] hover:bg-[#383838]"
          >
            ℹ️
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#a8a8a8] px-3 py-2 rounded-md bg-[#2c2c2c] hover:bg-[#383838]"
          >
            📞
          </Link>
          <Link
            to="/profile"
            className="hover:text-[#a8a8a8] px-3 py-2 rounded-md bg-[#2c2c2c] hover:bg-[#383838]"
          >
            👤
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
