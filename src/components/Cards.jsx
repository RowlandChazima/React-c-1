import React from "react";

export default function Cards() {
  return (
    <section
      id="services"
      className="border-t border-slate-100 bg-slate-50/70 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Frontend Solutions
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Choose the perfect architectural tier for your application context.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 mb-6">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-.11-8.314-.318m16.628 0a11.956 11.956 0 01-16.628 0"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                High-Conversion Landings
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Sleek, lightweight marketing pages engineered perfectly to drive
                user acquisitions. Optimized aggressively for perfect SEO and
                core web vitals performance scores.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-50">
              <a
                href="#contact"
                className="text-sm font-semibold text-orange-500 hover:text-orange-600 flex items-center gap-1"
              >
                Learn more <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-orange-500 bg-white p-8 shadow-md relative">
            <div className="absolute -top-3.5 left-8 rounded-full bg-orange-500 px-3 py-0.5 text-xs font-semibold text-white tracking-wide uppercase">
              Most Popular
            </div>
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 mb-6">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17L17.25 21A2.67 2.67 0 1113.5 17.25l-4.83-4.83m-2.808-2.808L3.6 7.35A2.67 2.67 0 117.35 3.6l2.25 2.25m2.808 2.808l4.83 4.83m-4.83-4.83l-1.07-1.07M17.25 10.5A2.67 2.67 0 1121 6.75l-2.25 2.25m-5.325 5.325l-2.25 2.25m-2.81-2.81L3.6 13.5A2.67 2.67 0 107.35 17.25l2.25-2.25"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Premium Web Platforms
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Multi-page corporate environments or interactive web apps
                constructed completely client-side. Blazing fast navigation with
                state-driven layouts.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-50">
              <a
                href="#contact"
                className="text-sm font-semibold text-orange-500 hover:text-orange-600 flex items-center gap-1"
              >
                Learn more <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 mb-6">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                SaaS UI Dashboards
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Complex dashboard frames ready to be linked to your own APIs.
                Fully styled data visualizations, sidebar architectures, and
                robust form components.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-50">
              <a
                href="#contact"
                className="text-sm font-semibold text-orange-500 hover:text-orange-600 flex items-center gap-1"
              >
                Learn more <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
