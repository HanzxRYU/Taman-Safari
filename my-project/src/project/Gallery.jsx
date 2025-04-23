import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import imageData from "./datagall"; // Mengimpor data gambar dari datagall.js

function Gallery() {
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
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-black text-white py-6 px-6 md:px-12 flex justify-between items-center text-lg font-poppins">
        <div className="text-white text-2xl font-bold">MyLogo</div>

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

        {/* Desktop Menu */}
        <div className="flex-1 hidden md:flex justify-center space-x-12 ml-10">
          <Link
            to="/"
            className="relative text-base font-medium tracking-wide text-white hover:text-gray-400 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="#"
            className="relative text-base font-medium tracking-wide text-white hover:text-gray-400 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact Us
          </Link>
          <Link
            to="/About"
            className="relative text-base font-medium tracking-wide text-white hover:text-gray-400 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Tentang Taman Safari
          </Link>
          <Link
            to="/Gallery"
            className="relative text-base font-medium tracking-wide text-white hover:text-gray-400 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Gallery Wisata
          </Link>
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
                  <Link to="/">Home</Link>
                </li>
                <li
                  className="text-xl text-gray-700 hover:text-blue-600 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to="#">Contact Us</Link>
                </li>
                <li
                  className="text-xl text-gray-700 hover:text-blue-600 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to="/About">Tentang Taman Safari</Link>
                </li>
                <li
                  className="text-xl text-gray-700 hover:text-blue-600 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to="/Gallery">Gallery Wisata</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url("jerapahh.png")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-center text-left px-10 md:px-20 text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            GALLERY TAMAN SAFARI
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl font-semibold mt-2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            INDONESIA
          </motion.h2>
        </div>
      </div>

      {/* Photo Section */}
      <section className="px-6 md:px-12 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Galeri Wisata</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imageData.map((photo) => (
            <div
              key={photo.id}
              className="relative bg-white rounded-xl overflow-hidden shadow-md group"
            >
              <div className="absolute top-2 left-2 bg-black text-white text-sm font-medium px-3 py-1 rounded">
                {photo.title}
              </div>
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center text-white text-center px-4">
                <p>{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-32">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <h4 className="text-2xl font-semibold">Taman Safari Indonesia</h4>
            <p className="text-gray-400 mt-2">
              Edukasi, Konservasi, dan Wisata Alam
            </p>
          </div>
          <div className="flex justify-center space-x-8 mb-6">
            <a
              href="#"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Instagram
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2025 Taman Safari Indonesia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Gallery;
