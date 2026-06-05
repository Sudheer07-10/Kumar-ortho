"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  data: any;
}

export default function Hero({ onOpenBooking, data }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen w-full flex flex-col overflow-hidden bg-white px-3 sm:px-6 pt-3 pb-3"
    >
      {/* Background Image Container */}
      <div className="absolute inset-x-3 inset-y-3 sm:inset-x-6 sm:inset-y-3 lg:bottom-6 z-0 rounded-[32px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero_bg.png')" }}
        >
          {/* Soft overlay to make white text pop */}
          <div className="absolute inset-0 bg-black/20 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-[#0B1F3A]/60 mix-blend-multiply"></div>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-32 sm:pt-40 lg:pt-48 px-4 w-full h-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-[64px] font-medium tracking-tight text-white leading-[1.15] max-w-5xl"
        >
          {data.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl font-light"
        >
          {data.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <button
            onClick={onOpenBooking}
            className="flex items-center justify-center gap-3 rounded-full bg-white hover:bg-gray-50 px-8 py-3.5 text-[15px] font-bold text-[#0B1F3A] shadow-2xl hover:scale-[1.02] active:scale-98 transition-all group"
          >
            <span>{data.cta}</span>
            <div className="bg-[#0B1F3A] text-white p-1.5 rounded-full group-hover:translate-x-1 transition-transform">
              <ArrowRight className="h-4 w-4" />
            </div>
          </button>
        </motion.div>
      </div>

      {/* FLOATING ELEMENTS */}
      
      {/* Bottom Right Floating Controls */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hidden sm:flex absolute bottom-10 right-10 flex-col items-end gap-4"
      >

        {/* Emergency/Action Pill */}
        <div className="flex items-center gap-4 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-2xl border border-white/50 cursor-pointer hover:scale-105 transition-transform">
          <span className="text-[13px] font-bold text-[#0B1F3A]">{data.emergency}</span>
          <div className="bg-[#0B1F3A] text-white p-1.5 rounded-full">
            <Phone className="h-3.5 w-3.5" />
          </div>
        </div>
      </motion.div>

    </section>
  );
}
