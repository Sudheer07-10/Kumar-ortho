"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Bone,
  Activity,
  Stethoscope,
  Scissors,
  UserCheck,
  Eye,
} from "lucide-react";

interface ServicesProps {
  onOpenBooking: () => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  const specialties = [
    {
      title: "Orthopedics & Spine",
      icon: (
        <Bone className="h-10 w-10 text-[#0B1F3A] mb-4 stroke-[1.5] group-hover:scale-125 group-hover:-translate-y-2 group-hover:text-[#B24E39] transition-all duration-300" />
      ),
    },
    {
      title: "Cardiology",
      icon: (
        <Heart className="h-10 w-10 text-[#0B1F3A] mb-4 stroke-[1.5] group-hover:scale-125 group-hover:-translate-y-2 group-hover:text-[#B24E39] transition-all duration-300" />
      ),
    },
    {
      title: "Urology",
      icon: (
        <Activity className="h-10 w-10 text-[#0B1F3A] mb-4 stroke-[1.5] group-hover:scale-125 group-hover:-translate-y-2 group-hover:text-[#B24E39] transition-all duration-300" />
      ),
    },
    {
      title: "General Medicine",
      icon: (
        <Stethoscope className="h-10 w-10 text-[#0B1F3A] mb-4 stroke-[1.5] group-hover:scale-125 group-hover:-translate-y-2 group-hover:text-[#B24E39] transition-all duration-300" />
      ),
    },
    {
      title: "General Surgery",
      icon: (
        <Scissors className="h-10 w-10 text-[#0B1F3A] mb-4 stroke-[1.5] group-hover:scale-125 group-hover:-translate-y-2 group-hover:text-[#B24E39] transition-all duration-300" />
      ),
    },
    {
      title: "Pediatrics",
      icon: (
        <UserCheck className="h-10 w-10 text-[#0B1F3A] mb-4 stroke-[1.5] group-hover:scale-125 group-hover:-translate-y-2 group-hover:text-[#B24E39] transition-all duration-300" />
      ),
    },
    {
      title: "Women's Health",
      icon: (
        <Activity className="h-10 w-10 text-[#0B1F3A] mb-4 stroke-[1.5] group-hover:scale-125 group-hover:-translate-y-2 group-hover:text-[#B24E39] transition-all duration-300" />
      ),
    },
    {
      title: "Diagnostics & Imaging",
      icon: (
        <Eye className="h-10 w-10 text-[#0B1F3A] mb-4 stroke-[1.5] group-hover:scale-125 group-hover:-translate-y-2 group-hover:text-[#B24E39] transition-all duration-300" />
      ),
    },
  ];

  return (
    <section
      id="services"
      className="bg-white text-black opacity-100 brightness-100 px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center overflow-hidden"

    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">

        {/* Section Header */}
        <div className="text-center mb-20 flex flex-col items-center px-4">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#6B7280] mb-6">
            CENTERS OF EXCELLENCE.
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-serif text-[#111111] tracking-tight leading-[1.05] max-w-5xl text-center">
            We provide high-quality medical services across key healthcare
            disciplines with uncompromised therapeutic safety.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="w-full border-t border-[#D1D5DB]">
          <div className="grid grid-cols-2 md:grid-cols-4 border-l border-r border-b border-[#D1D5DB] divide-x divide-y divide-[#D1D5DB]">

            {specialties.map((spec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.05,
                }}
                className="group relative flex flex-col items-center justify-center p-8 sm:p-12 lg:p-14 bg-white hover:bg-white hover:z-10 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {spec.icon}

                <h3 className="text-[13px] sm:text-sm font-semibold text-[#0B1F3A] text-center tracking-tight group-hover:text-[#2563EB] transition-colors">
                  {spec.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 w-full bg-[#B24E39] rounded-[28px] sm:rounded-[36px] p-12 sm:p-16 lg:p-24 flex flex-col items-center justify-center text-center shadow-xl">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white max-w-4xl leading-[1.1] mb-10 tracking-tight">
            Trusted healthcare services focused on patient safety and quality care.
          </h3>

          <button
            onClick={onOpenBooking}
            className="bg-white text-[#B24E39] hover:bg-[#F5F5F5] font-semibold text-sm px-7 py-3 rounded-xl transition-all duration-300 shadow-sm"
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
}