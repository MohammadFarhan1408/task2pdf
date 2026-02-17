import React, { useState } from "react";
import ProposalStepper from "./proposal/navigation/Stepper";
import ReportStepper from "./report/navigation/Stepper";
import DeliveryStepper from "./delivery/navigation/Stepper";
import logo from "../assets/images/STEMbotix-Logo.png";

const App = () => {
  const [mode, setMode] = useState(null); // "proposal" | "report" | null

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 flex justify-center">
      <div className="w-full max-w-5xl">
        {/* HEADER SECTION */}
        <div className="flex justify-between items-center mb-10">
          <div className="">
            <div className="flex items-center justify-center">
              <img
                src={logo}
                alt="DocGen Logo"
                className="w-40 md:h-15 md:w-auto mr-5"
              />
              <h1 className="text-xl md:text-3xl mt-2 font-extrabold  text-blue-600 tracking-tight">
                PDF Generator
              </h1>
            </div>
            <p className="text-slate-500 text-sm mt-2">
              Create Proposals, Reports, and Certificates with ease.
            </p>
          </div>

          {mode && (
            <button
              onClick={() => setMode(null)}
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-red-500 flex items-center transition-colors"
            >
              ← Switch Document Type
            </button>
          )}
        </div>

        {/* MODE SELECT UI */}
        {!mode ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* PROPOSAL OPTION */}
            <div
              onClick={() => setMode("proposal")}
              className="group cursor-pointer bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-200">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 3H14L19 8V21H7V3Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 3V8H19"
                      stroke="white"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 12H15"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M9 16H13"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                  Project Proposal
                </h2>
                {/* <p className="text-slate-500 leading-relaxed">
                  Draft comprehensive cover letters, technical details, and
                  financial estimates for new STEM Lab installations.
                </p> */}

                <div className="mt-8 flex items-center text-blue-600 font-bold text-sm">
                  Start Building{" "}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>

            {/* REPORT OPTION */}
            <div
              onClick={() => setMode("report")}
              className="group cursor-pointer bg-white border border-slate-200 rounded-2xl p-8 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-emerald-200">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 20H20"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <rect x="6" y="10" width="2.5" height="7" fill="white" />
                    <rect x="11" y="7" width="2.5" height="10" fill="white" />
                    <rect x="16" y="12" width="2.5" height="5" fill="white" />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                  Impact Report
                </h2>
                {/* <p className="text-slate-500 leading-relaxed">
                  Generate post-implementation summaries, assessment results,
                  and impact analysis for completed projects.
                </p> */}

                <div className="mt-8 flex items-center text-emerald-600 font-bold text-sm">
                  Generate Report{" "}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>

            {/* Delivery OPTION */}
            <div
              onClick={() => setMode("delivery")}
              className="group cursor-pointer bg-white border border-slate-200 rounded-2xl p-8 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-red-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-red-200">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="5"
                      y="3"
                      width="14"
                      height="18"
                      rx="2"
                      stroke="white"
                      stroke-width="2"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="white"
                      stroke-width="1"
                    />

                    <path
                      d="M10 12L11.4 13.4L14 10.8"
                      stroke="white"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                  Delivery Certificate
                </h2>
                {/* <p className="text-slate-500 leading-relaxed">
                  Generate post-implementation summaries, assessment results,
                  and impact analysis for completed projects.
                </p> */}

                <div className="mt-8 flex items-center text-red-600 font-bold text-sm">
                  Generate Certificate{" "}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in duration-700">
            {mode === "proposal" && <ProposalStepper />}
            {mode === "report" && <ReportStepper />}
            {mode === "delivery" && <DeliveryStepper />}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
