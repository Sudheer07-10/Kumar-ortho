"use client";

import React, { useState } from "react";
import Navbar from "@/tier1-components/Navbar";
import Footer from "@/tier1-components/Footer";
import HeroLayout from "@/tier2-layouts/HeroLayout";
import ServicesLayout from "@/tier2-layouts/ServicesLayout";
import DoctorLayout from "@/tier2-layouts/DoctorLayout";
import WhyChooseUsLayout from "@/tier2-layouts/WhyChooseUsLayout";
import FacilitiesLayout from "@/tier2-layouts/FacilitiesLayout";
import AppointmentBookingLayout from "@/tier2-layouts/AppointmentBookingLayout";
import FAQLayout from "@/tier2-layouts/FAQLayout";
import ContactLayout from "@/tier2-layouts/ContactLayout";
import AppointmentModal from "@/tier1-components/AppointmentModal";
import EmergencyFloating from "@/tier1-components/EmergencyFloating";
import Preloader from "@/tier1-components/Preloader";

interface StandardPageTemplateProps {
  content: any;
}

export default function StandardPageTemplate({ content }: StandardPageTemplateProps) {
  const [loading, setLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="flex flex-col min-h-screen relative mesh-bg">
      {/* Background Mesh Overlay */}
      <div className="fixed inset-0 bg-transparent medical-grid pointer-events-none z-0" />

      {/* Sticky Navigation bar */}
      <Navbar onOpenBooking={openBooking} data={content.layout.navbar} />

      <main className="flex-1">
        {content.layout.hero && <HeroLayout onOpenBooking={openBooking} data={content.layout.hero} />}
        {content.layout.services && <ServicesLayout onOpenBooking={openBooking} data={content.layout.services} />}
        {content.layout.doctor && <DoctorLayout onOpenBooking={openBooking} data={content.layout.doctor} />}
        {content.layout.whyChooseUs && <WhyChooseUsLayout data={content.layout.whyChooseUs} />}
        {content.layout.facilities && <FacilitiesLayout data={content.layout.facilities} />}
        {content.layout.booking && <AppointmentBookingLayout data={content.layout.booking} />}
        {content.layout.faq && <FAQLayout data={content.layout.faq} />}
        {content.layout.contact && <ContactLayout data={content.layout.contact} />}
      </main>

      <Footer data={content.layout.footer} />
      <EmergencyFloating onOpenBooking={openBooking} />

      <AppointmentModal 
        isOpen={isBookingOpen} 
        onClose={closeBooking} 
      />
    </div>
  );
}
