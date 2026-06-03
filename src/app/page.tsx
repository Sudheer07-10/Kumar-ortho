"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import AppointmentModal from "@/components/ui/AppointmentModal";
import EmergencyFloating from "@/components/ui/EmergencyFloating";
import Preloader from "@/components/ui/Preloader";

// Selected Sections
import Hero from "@/components/sections/HeroLayout";
import Services from "@/components/sections/ServicesLayout";
import Doctor from "@/components/sections/DoctorLayout";
import WhyChooseUs from "@/components/sections/WhyChooseUsLayout";
import Facilities from "@/components/sections/FacilitiesLayout";
import AppointmentBooking from "@/components/sections/AppointmentBookingLayout";
import FAQ from "@/components/sections/FAQLayout";
import Contact from "@/components/sections/ContactLayout";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background Mesh Overlay - Inspired by Medcy */}
      <div className="fixed inset-0 bg-[#f8fafc]/40 dark:bg-zinc-950/20 medical-grid pointer-events-none z-0" />

      {/* Sticky Navigation bar */}
      <Navbar onOpenBooking={openBooking} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={openBooking} />

        {/* 2. Specialties & Departments */}
        <Services onOpenBooking={openBooking} />

        {/* 3. Specialists Showcase */}
        <Doctor onOpenBooking={openBooking} />

        {/* 4. Why Choose Us (Stats & Pillars) */}
        <WhyChooseUs />

        {/* 5. Infrastructure (Facilities) */}
        <Facilities />

        {/* 7. Stepped In-Page Booking & WhatsApp options */}
        <AppointmentBooking />

        {/* 8. FAQs Help Accordions */}
        <FAQ />

        {/* 9. Directions & Location Maps */}
        <Contact />
      </main>

      {/* Structured Footer */}
      <Footer />

      {/* Global Interactive Widgets */}
      <EmergencyFloating onOpenBooking={openBooking} />
      <AppointmentModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
