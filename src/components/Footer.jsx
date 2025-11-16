import React from "react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-28 bg-black/40 border-t border-gray-800 py-12"
    >
      <div className="max-w-[1250px] mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        <div>
          <h1 className="text-2xl font-bold">
            Vyom<span className="text-orange-500">Garud</span>
          </h1>
          <p className="text-gray-400 mt-3 max-w-sm">
            Advanced UAV systems engineered for mission-critical intelligence.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Contact Us</h3>

          <p className="text-gray-400 text-sm mt-3">📞 +91 8881444693</p>
          <p className="text-gray-400 text-sm">✉️ info@vyomgarud.com</p>

          <button className="mt-5 px-6 py-3 bg-orange-500 text-black font-semibold rounded-md hover:opacity-90">
            Request a Demo
          </button>
        </div>

      </div>

      <p className="text-center text-gray-600 text-xs mt-10">
        © {new Date().getFullYear()} VyomGarud • All Rights Reserved
      </p>
    </footer>
  );
}
