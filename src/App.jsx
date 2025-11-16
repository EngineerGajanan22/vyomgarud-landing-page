import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050506] text-white">
      <Navbar />
      <main className="max-w-[1250px] mx-auto px-6 pt-20">
        <Hero />
        <About />
        <Capabilities />
        <Highlights />
      </main>
      <Footer />
    </div>
  );
}
