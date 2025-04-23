import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Menutup menu jika klik di luar area menu
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
      <nav className="bg-black text-white py-6 px-6 md:px-12 flex justify-between items-center text-lg font-poppins relative z-50">
        <div className="text-white text-2xl font-bold">MyLogo</div>

        {/* Hamburger Menu */}
        <button onClick={toggleMenu} className="md:hidden z-50">
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
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-all ${
            isMenuOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex justify-center items-center w-full h-full">
            <div
              className="bg-white p-6 rounded-lg w-4/5"
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
              Tentang Taman Safari
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-200 tracking-wide">
              Jelajahi keajaiban alam dan kehidupan satwa di habitat aslinya.
              Taman Safari Indonesia menghadirkan pengalaman yang tak terlupakan
              dalam balutan edukasi, konservasi, dan petualangan.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white px-6 py-12 max-w-6xl mx-auto mt-32 grid md:grid-cols-2 gap-6 items-start">
        <div className="flex justify-start">
          <motion.div
            className="rounded-2xl overflow-hidden w-full h-[350px] md:w-[500px] ml-2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="Pemandangann.png"
              alt="Pemandangan"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="pl-2">
          <motion.h3
            className="text-4xl font-bold mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Sejarah Singkat Taman Safari |
          </motion.h3>
          <motion.p
            className="text-gray-700 text-justify text-lg mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Taman Safari Indonesia adalah salah satu taman safari terbesar di
            dunia, yang terletak di berbagai lokasi di Indonesia. Sejak dibuka
            pertama kali, Taman Safari bertujuan untuk melestarikan berbagai
            jenis satwa langka dan menjadi tempat edukasi yang interaktif bagi
            masyarakat.
          </motion.p>
          <motion.p
            className="text-gray-700 text-justify text-lg mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Menggunakan konsep taman wisata alam terbuka, pengunjung dapat
            berinteraksi dengan berbagai jenis hewan, mulai dari yang biasa
            hingga yang dilindungi. Taman Safari Indonesia juga memiliki
            berbagai program edukasi yang bertujuan untuk meningkatkan kesadaran
            tentang pentingnya pelestarian satwa dan alam.
          </motion.p>
          <motion.p
            className="text-gray-700 text-justify text-lg mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Taman Safari Indonesia juga berkomitmen untuk menjaga keberlanjutan
            ekosistem serta memperkenalkan pentingnya pelestarian alam kepada
            masyarakat. Dengan banyaknya pengunjung setiap tahunnya, taman
            safari ini berusaha untuk menciptakan pengalaman yang aman dan
            menyenangkan, sembari mengedukasi tentang konservasi.
          </motion.p>
        </div>
      </div>

      {/* Footer Section */}
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

export default About;
