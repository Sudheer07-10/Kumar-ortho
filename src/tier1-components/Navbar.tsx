"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";
import content from "@/tier3-content/content.json";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
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

  const navLinks = content.layout.navbar.links;

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-transparent border-none pointer-events-none">
      {/* Dynamic Top Blocker Shield: Uses backdrop blur to soften scrolling text without changing navbar shape */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-24 sm:h-28 transition-all duration-350 z-0 pointer-events-none",
          isScrolled
            ? "backdrop-blur-[6px] opacity-100"
            : "opacity-0"
        )}
      />

      <div className="w-full flex justify-center relative z-10 top-0 pt-0 px-4 sm:px-6">
        {/* Island Cutout Navbar Wrapper */}
        <div
          className={cn(
            "navbar-cutout w-full max-w-[1100px] text-[#0B1F3A] transition-all duration-300 pointer-events-auto",
            isScrolled ? "py-2 sm:py-3 shadow-md" : "py-3 sm:py-4"
          )}
        >
          <div className="flex items-center justify-between px-6 sm:px-10">
            
            {/* Combined Logo Capsule */}
            <a href="#home" className="flex items-center group">
              <img
                src="/kumar-hospitals.svg"
                alt="Kumar Hospital Ortho & Multispeciality"
                className="h-16 sm:h-20 w-auto object-contain hover:scale-[1.03] transition-transform duration-300 transform scale-125 origin-left"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest text-gray-700 hover:text-emerald-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-emerald-500 after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#login"
                className="text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors"
              >
                Sign in
              </a>
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 rounded-[14px] bg-[#22c55e] hover:bg-[#16a34a] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:scale-102 active:scale-98 transition-all group"
              >
                <span>{content.layout.navbar.actions.bookAppointmentText}</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full p-2 text-gray-800 transition-colors hover:bg-gray-100 lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu - Pill Style */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-3 rounded-[32px] border border-zinc-800 bg-[#0a0a0c]/95 px-6 py-6 shadow-2xl backdrop-blur-lg pointer-events-auto">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            
            <div className="border-t border-zinc-800 pt-4 flex flex-col gap-3 mt-2">
              <a
                href={`tel:${content.layout.navbar.actions.emergencyPhone}`}
                className="flex items-center justify-center gap-2 rounded-full bg-red-655 py-3 text-xs font-bold text-white shadow-sm hover:bg-red-700"
              >
                <Phone className="h-4 w-4" />
                <span>{content.layout.navbar.mobileActions.emergencyText}</span>
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 rounded-full bg-cyan-600 py-3 text-xs font-bold text-white shadow-sm hover:bg-cyan-700"
              >
                <Calendar className="h-4 w-4" />
                <span>{content.layout.navbar.mobileActions.bookAppointmentText}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
