import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

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
