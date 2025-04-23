import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

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

        {/* Hamburger Button */}
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
          {["Home", "Tentang Taman Safari", "Gallery Wisata", "Contact Us"].map(
            (text, index) => {
              const paths = ["/", "/About", "/Gallery", "/Contact"];
              return (
                <Link
                  key={index}
                  to={paths[index]}
                  className="relative text-base font-medium tracking-wide text-white hover:text-gray-400 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {text}
                </Link>
              );
            }
          )}
        </div>
      </nav>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "-20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-20%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg w-4/5 mx-auto mt-24"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col items-center gap-4">
                <li
                  className="text-xl text-gray-700 hover:text-blue-600 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to="/">Home</Link>
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
                <li
                  className="text-xl text-gray-700 hover:text-blue-600 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to="/Contact">Contact Us</Link>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Hubungi Kami
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-200 tracking-wide">
              Kami siap membantu Anda dengan pertanyaan atau informasi lebih
              lanjut. Isi form di bawah ini untuk menghubungi kami!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="mt-20 px-6 md:px-20 py-16 bg-gray-100">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 font-poppins text-gray-800"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Kirimkan Pesan Anda
        </motion.h2>
        <form className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Masukkan Nama Anda"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Masukkan Email Anda"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Pesan
              </label>
              <textarea
                id="message"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                rows="5"
                placeholder="Tulis pesan Anda"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-full shadow-md hover:bg-yellow-400 transition-all duration-300 ease-in-out"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
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

export default Contact;
