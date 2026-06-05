"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";

interface NavbarProps {
  onOpenBooking: () => void;
  data: any;
}

export default function Navbar({ onOpenBooking, data }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Framer motion scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = data.links;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] flex justify-between items-start px-4 sm:px-10 pt-0 transition-all duration-500 pointer-events-none",
        isScrolled ? "glass-nav py-3" : "bg-transparent py-0"
      )}
    >
      
      {/* Top White Border Bar */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-3 bg-white pointer-events-auto z-0 transition-opacity",
        isScrolled ? "opacity-0" : "opacity-100"
      )}></div>

      {/* Left Navigation Items */}
      <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 mt-6 relative z-10 pointer-events-auto max-w-[40vw] flex-wrap justify-start">
        {navLinks?.map((link: any) => (
          <a
            key={link.name}
            href={link.href}
            className={cn(
              "px-3 py-1.5 xl:px-4 xl:py-2 rounded-full border text-xs xl:text-sm font-semibold transition-colors backdrop-blur-sm shadow-sm whitespace-nowrap",
              isScrolled 
                ? "border-black/10 text-gray-800 hover:bg-black/5" 
                : "border-white/40 text-white hover:bg-white/10"
            )}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Center Logo Cutout */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20">
        <div className="navbar-cutout px-6 sm:px-10 pt-2 pb-4 pointer-events-auto flex justify-center items-center shadow-sm">
          <a href="#home" className="flex items-center group">
            <img
              src="/kumar-hospitals.svg"
              alt="Kumar's Ortho Clinic"
              className="h-10 sm:h-12 w-auto object-contain hover:scale-[1.03] transition-transform duration-300"
            />
          </a>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3 mt-8 relative z-10 pointer-events-auto">
        
        {/* Search Placeholder */}
        <div className={cn(
          "hidden lg:flex items-center backdrop-blur-md rounded-full px-4 py-2 shadow-sm transition-colors border",
          isScrolled ? "bg-black/5 border-black/10" : "bg-white/20 border-white/40"
        )}>
          <span className={cn(
            "text-sm font-medium mr-4 transition-colors",
            isScrolled ? "text-gray-800" : "text-white/90"
          )}>Search here...</span>
          <div className={cn(
            "rounded-full p-1 shadow-sm transition-colors",
            isScrolled ? "bg-black text-white" : "bg-white text-black"
          )}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
        </div>

        {/* Book Now Button */}
        <button
          onClick={onOpenBooking}
          className={cn(
            "flex items-center gap-3 rounded-full px-6 py-2.5 text-sm font-bold shadow-xl hover:scale-105 active:scale-95 transition-all group",
            isScrolled ? "bg-black text-white hover:bg-black/80" : "bg-black text-white hover:bg-black/80"
          )}
        >
          <span>Book Now</span>
          <div className={cn(
            "p-1 rounded-full group-hover:rotate-45 transition-transform",
            isScrolled ? "bg-white text-black" : "bg-white text-black"
          )}>
            <ArrowRight className="h-4 w-4" />
          </div>
        </button>

        {/* Mobile / Hamburger Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "rounded-full p-3 shadow-xl transition-all hover:scale-105",
            isScrolled ? "bg-black text-white hover:bg-black/80" : "bg-black text-white hover:bg-black/80"
          )}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-gray-200 flex flex-col p-4 lg:hidden pointer-events-auto z-50">
          <nav className="flex flex-col">
            {navLinks?.map((link: any) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 border-b border-gray-100 text-sm font-bold uppercase tracking-wider text-[#0B1F3A] hover:text-[#B24E39] text-center"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
