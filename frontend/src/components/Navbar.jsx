import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="absolute top-0 left-0 w-full py-4 px-10 bg-transparent text-white flex justify-between items-center z-50">

      <Link to="/" className="flex gap-2 items-center">
        <span className="font-neonderthaw text-7xl font-medium">zh.</span>
      </Link>

      <div className="hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 gap-5 items-center font-garamond">
        <Link to="/about" className="font-medium text-2xl font-cinzel hover:text-red-700">ABOUT</Link>
        <Link to="/contact" className="font-medium text-2xl font-cinzel hover:text-red-700">CONTACT</Link>
        <Link to="/menu" className="font-medium text-2xl font-cinzel hover:text-red-700">MENU</Link>
      </div>

      <Link to="/booking">
        <button className="hidden md:flex items-center gap-2 border-2 border-red-700 text-red-700 text-[16px] font-medium rounded-md px-5 py-3 transition-all duration-300 group hover:bg-red-700 hover:text-white">
          Reserve Table
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-black text-sm transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-45">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </span>
        </button>
      </Link>

      {/* Hamburger */}
      <button className="p-2 md:hidden z-50 relative w-8 h-8 flex flex-col justify-between items-center" onClick={handleMenu}>
        <div className={`w-6 h-0.5 bg-white transform transition-all duration-500 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
        <div className={`w-6 h-0.5 bg-white transition-all duration-500 ${menuOpen ? "opacity-0" : ""}`} />
        <div className={`w-6 h-0.5 bg-white transform transition-all duration-500 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black text-white flex flex-col items-center justify-center gap-8 md:hidden z-40 transform transition-transform duration-700 ${menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <Link
          to="/menu"
          className="font-medium hover:text-red-700"
          onClick={handleMenu}
        >
          Menu
        </Link>
        <Link
          to="/about"
          className="font-medium hover:text-red-700"
          onClick={handleMenu}
        >
          About
        </Link>
        <Link
          to="/signup"
          className="font-medium hover:text-red-700"
          onClick={handleMenu}
        >
          Signup
        </Link>
        <Link
          to="/login"
          className="font-medium hover:text-red-700"
          onClick={handleMenu}
        >
          Login
        </Link>
        <Link
          to="/cart"
          className="font-medium hover:text-red-700"
          onClick={handleMenu}
        >
          Cart
        </Link>

        {/* Divider */}
        <div className="h-[1px] w-[85%] bg-white my-4"></div>

        {/* Reserve Table Button */}
        <Link to="/booking">
          <button className="flex items-center gap-2 border-2 border-red-700 text-red-700 text-[16px] font-medium rounded-md px-5 py-3 transition-all duration-300 group hover:bg-red-700 hover:text-white">
            Reserve Table
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-black text-sm transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-45"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19V5M5 12l7-7 7 7"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
