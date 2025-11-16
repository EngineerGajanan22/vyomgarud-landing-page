import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold">About VyomGarud</h2>

      <p className="mt-5 text-gray-400 max-w-3xl leading-relaxed">
        VyomGarud engineers autonomous aerial platforms and integrated mission systems for demanding
        operational environments. Our focus is on mission assurance — delivering hardened sensors,
        secure communications, and deterministic autonomy.
      </p>
    </motion.section>
  );
}
