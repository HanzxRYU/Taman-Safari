import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Gallery from "./Gallery";
import About from "./detailed";
import Book from "./book";
import Contact from "./contact";

function Home() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-black text-white py-6 px-6 md:px-12 flex justify-between items-center text-lg font-poppins">
        <div className="text-white text-2xl font-bold">MyLogo</div>

        {/* Link navbar - hanya tampil di desktop */}
        <div className="flex-1 hidden md:flex justify-center space-x-12 ml-20">
          <Link
            to="/Contact"
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

        {/* Tombol Contact Us */}
        <div className="flex items-center">
          <Link
            to="/Contact"
            className="bg-white text-black py-2 px-4 md:px-6 rounded-full hover:bg-gray-100 transition duration-300 text-sm md:text-base"
          >
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url("jerapahh.png")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-center items-center text-white text-center px-4">
          <motion.h1
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: -50 }}
            transition={{ duration: 1 }}
          >
            TAMAN SAFARI
          </motion.h1>
          <motion.h2
            className="text-xl font-semibold"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: -50 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            INDONESIA
          </motion.h2>

          {/* Teks Edukasi, Konservasi, dan Wisata Alam */}
          <motion.div
            className="mt-4 text-lg font-semibold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Edukasi, Konservasi, dan Wisata Alam
          </motion.div>

          {/* Tombol utama */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:space-x-4">
            <Link to="/gallery" className="w-full max-w-[250px]">
              <motion.div
                className="bg-white text-black py-2 px-6 rounded-full hover:bg-gray-200 hover:scale-105 transition duration-300 text-sm md:text-base text-center flex justify-center items-center whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Lihat Wisata
              </motion.div>
            </Link>

            <Link to="/about" className="block md:hidden w-full max-w-[250px]">
              <motion.div
                className="bg-white text-black py-2 px-6 rounded-full hover:bg-gray-200 hover:scale-105 transition duration-300 text-sm md:text-base text-center flex justify-center items-center whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Tentang Taman Safari
              </motion.div>
            </Link>

            <Link to="/Book" className="w-full max-w-[250px]">
              <motion.div
                className="bg-white text-black py-2 px-6 rounded-full hover:bg-gray-200 hover:scale-105 transition duration-300 text-sm md:text-base text-center flex justify-center items-center whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Pesan Tiket
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white px-6 py-12 max-w-6xl mx-auto mt-32 grid md:grid-cols-2 gap-6 items-start">
        <div className="flex justify-start">
          <motion.div
            className="rounded-2xl overflow-hidden w-full h-[350px] md:w-[500px] ml-2" // Ukuran gambar diperbesar
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
            className="text-4xl font-bold mb-4" // Ukuran font judul diperbesar
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Sejarah Singkat Taman Safari |
          </motion.h3>
          <motion.p
            className="text-gray-700 text-justify text-lg mb-4" // Ukuran font paragraf diperbesar
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

      {/* Wisata Favorit Section */}
      <div className="bg-white px-6 py-12 max-w-6xl mx-auto mt-32">
        <motion.h3
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Wisata Favorit
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 - Restoran Bernuansa Tionghoa */}
          <motion.div
            className="relative group overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="Panda.jpg"
              alt="Kebun Binatang Panda"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-center text-white p-4">
              <div>
                <p className="text-xl font-semibold">Istana Panda</p>
                <p className="mt-2 text-base">
                  Kebun Binatang Panda adalah salah satu kebun binatang terbesar
                  di Indonesia yang menyimpan lebih dari 1.000 spesies binatang.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 text-white text-center">
              <p className="font-medium">Wisata Edukasi</p>
            </div>
          </motion.div>

          {/* Card 2 - Gedung Klasik Tionghoa */}
          <motion.div
            className="relative group overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="RainForest.jpg"
              alt="Gedung Klasik Tionghoa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-center text-white p-4">
              <div>
                <p className="text-xl font-semibold">Rain Forest</p>
                <p className="mt-2 text-base">
                  Arsitektur megah ala negeri tirai bambu, spot wajib buat
                  foto-foto estetik 📸
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 text-white text-center">
              <p className="font-medium">Kuliner Kekinian</p>
            </div>
          </motion.div>

          {/* Card 3 - Curug Jaksa */}
          <motion.div
            className="relative group overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="CurugJaksa.jpg"
              alt="Curug Jaksa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-center text-white p-4">
              <div>
                <p className="text-xl font-semibold">Curug Jaksa</p>
                <p className="mt-2 text-base">
                  Air terjun tersembunyi di tengah hutan, seger banget buat
                  recharge energi 🌿
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 text-white text-center">
              <p className="font-medium">Wisata Alam</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ayo Wisata ke Taman Safari Indonesia Section */}
      <motion.div
        className="text-center mt-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-green-700 tracking-wide">
          Ayo Wisata ke Taman Safari Indonesia!
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          Nikmati pengalaman tak terlupakan bersama keluarga dan alam 🌿🐾
        </p>
      </motion.div>

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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
