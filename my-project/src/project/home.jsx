import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-black text-white py-4 px-8 flex justify-between items-center text-sm">
        <Link to="#">Contact Us</Link>
        <Link to="#">Tentang Taman Safari</Link>
        <Link to="#">Gallery</Link>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-[600px] bg-cover bg-center" style={{ backgroundImage: `url('/images/jerapahh.png')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl font-bold">TAMAN SAFARI</h1>
          <h2 className="text-2xl font-semibold">INDONESIA</h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-3xl overflow-hidden w-full h-full">
          <img
            src="jerapahh.png"
            alt="Pemandangan"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4">Sejarah Singkat Taman Safari |</h3>
          <p className="text-gray-700 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat condimentum justo, in ultrices nisl luctus in. Aenean nec urna et ante finibus malesuada. Curabitur lorem mauris, ultricies sit amet vehicula id, vehicula vitae mauris. Nulla arcu libero, sagittis vitae orci nec, condimentum tincidunt lacus. Vivamus quis ante elementum, fermentum lorem ac, luctus orci. Praesent gravida non quam sed ultricies. Sed mauris justo, pharetra a sollicitudin nec, rutrum vitae quam. Maecenas metus neque, varius vitae posuere ac, tempus at purus. Vestibulum malesuada nisi risus. Sed at libero ac nisl auctor hendrerit. Nulla tincidunt ipsum nec eros dapibus dictum.
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
