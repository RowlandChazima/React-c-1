import React from "react";

export default function Navbar() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-white font-bold text-xl">
          ⚡
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-900">
          nuru<span className="text-orange-500">labs</span>
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#services" className="hover:text-slate-900 transition-colors">
          Services
        </a>
        <a href="#work" className="hover:text-slate-900 transition-colors">
          Our Work
        </a>
        <a href="#pricing" className="hover:text-slate-900 transition-colors">
          Pricing
        </a>
        <a href="#resources" className="hover:text-slate-900 transition-colors">
          Resources
        </a>
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button className="hidden sm:block text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-2">
          Login
        </button>
        <button className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-all">
          Contact-Us
        </button>
      </div>
    </header>
  );
}
