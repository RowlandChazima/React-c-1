import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 pt-24 pb-12 lg:px-8 border-t border-slate-100 text-center">
      {/* Catchy Conversion Pitch */}
      <div className="mx-auto max-w-2xl">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Stop losing clients to slow, bloated websites.
        </h3>
        <p className="mt-4 text-base text-slate-600 leading-7">
          Most platforms overwhelm your users with unnecessary backend weight.
          We build clean, hyper-optimized, standalone frontends that load
          instantly and keep attention focused exactly where it belongs: on your
          business.
        </p>
        <div className="mt-8 flex justify-center">
          <button className="rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-slate-800 active:scale-98 transition-all">
            Let's Build Your Frontend Today
          </button>
        </div>
      </div>

      {/* Visual Structural Separator */}
      <hr className="my-16 border-slate-100" />

      {/* Clean Copyright Line */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white font-bold text-xs">
            ⚡
          </div>
          <span className="font-semibold text-slate-900">nurulabs</span>
        </div>
        <p className="text-xs tracking-wide">
          &copy; {new Date().getFullYear()} nurulabs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
