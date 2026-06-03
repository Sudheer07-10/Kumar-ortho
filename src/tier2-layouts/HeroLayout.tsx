"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[96vh] bg-white font-sans pt-0 sm:pt-4 px-0 sm:px-4 pb-16 flex flex-col items-center overflow-hidden"
    >
      {/* The Rounded "Island" Background Block */}
      <div className="relative w-full max-w-[1440px] flex-1 min-h-[90vh] rounded-[0px] sm:rounded-t-[40px] sm:rounded-b-[40px] overflow-hidden flex items-center justify-center pt-28 pb-16">

        {/* Gradient Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-teal-50/50 to-indigo-50 pointer-events-none">
          <div className="absolute inset-0 medical-grid opacity-30"></div>
          <div className="absolute top-0 left-1/4 w-[450px] h-[450px] rounded-full bg-blue-300/20 blur-3xl"></div>
          <div className="absolute -right-20 top-1/4 w-[500px] h-[500px] rounded-full bg-teal-300/15 blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 w-full relative z-10">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mt-4 sm:mt-12">

            {/* Text Content */}
            <div className="flex flex-col gap-6 items-center justify-center w-full">
              {/* Super premium Tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF3FF] border border-blue-100 text-xs font-bold text-blue-700 uppercase tracking-widest"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span>Leading Multispeciality Healthcare in Anantapur</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight text-[#0B1F3A] leading-[1.1] font-sans"
              >
                <span>Advanced care</span> <br />
                <span>Trusted Healing.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-xl text-black leading-relaxed max-w-2xl font-medium"
              >
                Expert orthopedic and multispeciality care with advanced treatment and compassionate support.
              </motion.p>

              {/* Unified Central CTA Pill (Solidroad Style) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 flex flex-col sm:flex-row items-center bg-white p-2 sm:p-2 rounded-full shadow-2xl w-full max-w-[600px] border border-white/20"
              >
                {/* Emergency Label/Input area equivalent */}
                <div className="flex-1 flex items-center px-4 py-3 sm:py-0 w-full">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse mr-3" />
                  <span className="text-gray-500 font-medium text-sm w-full text-left">
                    Emergency: 08554-245678
                  </span>
                </div>

                {/* Action Button */}
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-[#facc15] hover:bg-[#eab308] px-8 py-3.5 text-sm font-bold text-[#422006] shadow-sm transition-all hover:scale-[1.02] active:scale-98 whitespace-nowrap"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
