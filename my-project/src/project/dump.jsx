import React, { useState, useRef, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Menutup menu jika ada klik di luar area menu
  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  // Menambahkan event listener untuk klik luar saat komponen di-mount dan membersihkannya saat komponen di-unmount
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white p-4">
      {/* Logo */}
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Logo</div>

        {/* Hamburger Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-all ${
          isMenuOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsMenuOpen(false)} // Close the menu if the background is clicked
      >
        <div className="flex justify-center items-center w-full h-full">
          <div className="bg-white p-6 rounded-lg w-4/5">
            <ul className="flex flex-col items-center gap-4">
              <li
                className="text-xl text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
              >
                Home
              </li>
              <li
                className="text-xl text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </li>
              <li
                className="text-xl text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </li>
              <li
                className="text-xl text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

