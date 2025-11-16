import React from "react";
import { motion } from "framer-motion";

export default function Capabilities() {
  const products = [
    { title: "Tactical ISR UAV", desc: "Long endurance, secure imaging system.", badge: "Platform" },
    { title: "Autonomous Cargo", desc: "Precision logistics in contested zones.", badge: "Payload" },
    { title: "EW Pod", desc: "Lightweight electronic warfare pod.", badge: "Payload" },
    { title: "Edge AI Suite", desc: "Onboard intelligence for real-time awareness.", badge: "Software" },
  ];

  return (
    <section id="capabilities" className="mt-20">
      <h3 className="text-3xl font-bold">Capabilities & Products</h3>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-5 bg-[#0b0f12] border border-gray-800 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition"
          >
            <span className="text-xs bg-gray-800 px-2 py-1 rounded-md text-gray-400">
              {p.badge}
            </span>

            <h4 className="mt-3 text-white font-semibold">{p.title}</h4>
            <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
