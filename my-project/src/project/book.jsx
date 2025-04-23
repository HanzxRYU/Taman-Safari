import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import wisataData from "./datawis"; // import datawis.jsx

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
  );
}

function Book() {
  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url("jerapahh.png")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center text-white px-6 md:px-20">
          <motion.div
            className="text-left max-w-xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 font-poppins">
              Pesan Tiket Petualanganmu Sekarang!
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-200 tracking-wide">
              Nikmati kemudahan memesan tiket berbagai wahana seru di Taman
              Safari. Siapkan harimu untuk pengalaman tak terlupakan bersama
              keluarga dan teman!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Booking Section - Updated with wisataData */}
      <section className="mt-28 px-6 md:px-20 py-16 bg-gray-100">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 font-poppins text-gray-800"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Temukan Petualanganmu di Sini!
        </motion.h2>
        <div className="space-y-10">
          {wisataData.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-lg rounded-2xl p-4 md:p-6 flex items-center w-full max-w-4xl mx-auto cursor-pointer"
              style={{ height: "220px", minHeight: "220px" }}
              whileHover={{
                scale: 1.03,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-xl mr-6 ml-2"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2 font-poppins">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Buy Tickets Section */}
      <section className="mt-28 px-6 md:px-20 py-16 bg-white">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 font-poppins text-gray-800"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Harga Tiket
        </motion.h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-left text-sm md:text-base">
                <th className="py-4 px-6">Destinasi</th>
                <th className="py-4 px-6">Kategori</th>
                <th className="py-4 px-6">Harga Anak (Weekday)</th>
                <th className="py-4 px-6">Harga Remaja (Weekend)</th>
                <th className="py-4 px-6">Harga Dewasa (Weekend)</th>
              </tr>
            </thead>
            <tbody>
              {wisataData.map((item, idx) => (
                <tr key={idx} className="border-t text-sm md:text-base">
                  <td className="py-4 px-6">{item.name}</td>
                  <td className="py-4 px-6">Wisata Alam</td>
                  <td className="py-4 px-6">Rp 50.000</td>
                  <td className="py-4 px-6">Rp 75.000</td>
                  <td className="py-4 px-6">Rp 100.000</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Button "Pesan di Sini" */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <button className="relative inline-block px-8 py-4 bg-black text-white text-lg md:text-xl font-semibold rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:text-white hover:shadow-xl">
            🎟️ Pesan di Sini
          </button>
        </motion.div>
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

export default Book;
