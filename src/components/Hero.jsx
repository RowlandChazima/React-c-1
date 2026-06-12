import React from "react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center lg:pt-28">
      {/* Main Headline */}
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl sm:leading-[1.15]">
        Stunning Website Frontends <br />
        <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
          Built Fast, Pure & Static
        </span>
      </h1>

      {/* Subtitle Paragraph */}
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
        We build lightning-fast, pixel-perfect, static frontend websites using
        modern React and Tailwind. No complex backend clutter—just pure,
        high-converting performance.
      </p>

      {/* Dual Action Horizontal Buttons */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button className="w-full sm:w-auto rounded-xl bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-md shadow-orange-500/20 hover:bg-orange-600 active:scale-98 transition-all">
          Get Started For Free
        </button>
        <button className="w-full sm:w-auto rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 active:scale-98 transition-all">
          View Our Portfolio
        </button>
      </div>

      {/* Trust Badges / Social Proof */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
        <div className="flex items-center gap-1.5">
          <svg
            className="h-4 w-4 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          No Hidden Retainers
        </div>
        <div className="flex items-center gap-1.5">
          <svg
            className="h-4 w-4 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          Production Ready in 7 Days
        </div>
        <div className="flex items-center gap-1.5">
          <svg
            className="h-4 w-4 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          React & Tailwind Native
        </div>
      </div>
    </section>
  );
}
