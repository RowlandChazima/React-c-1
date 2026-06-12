import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Cards from "./components/cards";
import Footer from "./components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
}
