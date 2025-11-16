import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 20);
    });
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-black/70 backdrop-blur-md py-3" : "py-5"
      }`}
    >
      <div className="max-w-[1250px] mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-tight">
          <span className="text-white">Vyom</span>
          <span className="text-orange-500">Garud</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#capabilities" className="hover:text-white">Capabilities</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}
