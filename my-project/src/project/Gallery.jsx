import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Gallery() {
  const photos = [
    {
      id: 1,
      name: "Tempat 1",
      description: "Lorem ipsum dolor sit amet.",
      //   img: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Tempat 2",
      description: "Consectetur adipiscing elit.",
      //   img: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "Tempat 3",
      description: "Sed do eiusmod tempor.",
      //   img: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      name: "Tempat 4",
      description: "Incididunt ut labore et dolore.",
      //   img: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-black text-white py-6 px-6 md:px-12 flex justify-between items-center text-lg font-poppins">
        <div className="text-white text-2xl font-bold">MyLogo</div>
        <div className="flex-1 hidden md:flex justify-center space-x-12 ml-20">
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
            to="/"
            className="relative text-base font-medium tracking-wide text-white hover:text-gray-400 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            to="#"
            className="bg-white text-black py-2 px-4 md:px-6 rounded-full hover:bg-gray-100 transition duration-300 text-sm md:text-base"
          >
            Contact Us
          </Link>
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
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative bg-white rounded-xl overflow-hidden shadow-md group"
            >
              <div className="absolute top-2 left-2 bg-black text-white text-sm font-medium px-3 py-1 rounded">
                {photo.name}
              </div>
              <img
                src={photo.img}
                alt={photo.name}
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center text-white text-center px-4">
                <p>{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
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

export default Gallery;
