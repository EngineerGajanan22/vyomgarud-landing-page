import React from "react";
import { motion } from "framer-motion";

export default function Highlights() {
  const items = [
    { title: "Mission Reliability", text: "Built for 24/7 deployment." },
    { title: "Rapid Integration", text: "Plug-and-play API structure." },
    { title: "Hardened Security", text: "Military-grade encryption." },
  ];

  return (
    <section className="mt-20">
      <h3 className="text-3xl font-bold">Highlights</h3>

      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {items.map((i, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 bg-[#0b0f12] border border-gray-800 rounded-xl hover:scale-[1.02] transition shadow-md"
          >
            <h4 className="text-xl font-semibold text-white">{i.title}</h4>
            <p className="text-gray-400 mt-3">{i.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
