import React from "react";
import { motion } from "framer-motion";
import droneImg from "../assets/drone.png";

export default function Hero() {
  return (
    <section className="mt-20 grid md:grid-cols-2 gap-14 items-center">

      {/* LEFT TEXT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            VyomGarud
          </span>
        </h1>

        <p className="mt-5 text-gray-400 max-w-xl text-lg">
          Military-grade autonomous UAV systems built for reliability, precision, 
          and real-time mission intelligence.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-md hover:opacity-90 shadow-md">
            Request Demo
          </button>
          <button className="px-6 py-3 border border-gray-700 rounded-md text-gray-300 hover:text-white hover:border-white">
            Our Capabilities
          </button>
        </div>
      </motion.div>

      {/* RIGHT DRONE IMAGE CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-[#0c0f13] border border-gray-800 rounded-2xl p-6 shadow-2xl overflow-hidden"
      >
        {/* Glow background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-40"></div>

        {/* Drone image */}
        <div className="relative z-10 flex items-center justify-center h-64">
          <img
            src={droneImg}
            alt="VyomGarud Drone"
            className="h-full w-auto object-contain mix-blend-lighten opacity-90"
          />
        </div>

        {/* Stats */}
        <div className="relative z-10 mt-5 text-gray-300 text-sm">
          <div className="flex justify-between py-1">
            <span>Endurance</span>
            <span className="font-semibold text-white">&gt; 10 hrs</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Payload</span>
            <span className="font-semibold text-white">Modular 10 kg</span>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
