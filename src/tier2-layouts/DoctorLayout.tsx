"use client";

import { motion } from "framer-motion";

interface DoctorProps {
  onOpenBooking: () => void;
}

export default function Doctor({ onOpenBooking }: DoctorProps) {
  const doctors = [
    {
      name: "Dr. Y. M. V. Kumar",
      designation: "Orthopedic & Spine Surgeon",
      qualifications: "MBBS, MS (Ortho) | Fellow in Spine Surgery",
    },
    {
      name: "Dr. V. Karthik Reddy",
      designation: "Consultant Physician",
      qualifications: "MBBS, DNB General Medicine",
    },
    {
      name: "Dr. A. Mithun Rakesh",
      designation: "Consultant Physician",
      qualifications: "MBBS, DNB General Medicine",
    },
    {
      name: "Dr. K. Karun Kumar Reddy",
      designation: "General Surgeon",
      qualifications: "MS General Surgery, FIAGES",
    },
    {
      name: "Dr. Rajashekar Battula",
      designation: "Consultant Urologist",
      qualifications: "MS, MCh (Urology), FMAS",
    },
    {
      name: "Dr. C. Aruna Jyothi",
      designation: "Obstetrics & Gynecology Specialist",
      qualifications: "MBBS, MS (OBG)",
    },
  ];

  return (
    <section
      id="doctor"
      className="bg-white text-black opacity-100 brightness-100 px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col">

        {/* Section Header (Left Aligned like reference) */}
        <div className="mb-16 flex flex-col px-4 text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">
            TEAM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif text-[#111111] dark:text-white font-medium tracking-tight leading-[1.1] max-w-3xl mb-4">
            Our medical leadership
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-zinc-400">
            Meet our team of senior doctors shaping the future of healthcare.
          </p>
        </div>

        {/* Static Text-Only Grid */}
        <div className="w-full px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {doctors.map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col"
              >
                {/* Doctor Text Info */}
                <div className="mb-6">
                  <h3 className="text-[17px] font-bold text-gray-900 dark:text-white mb-1">
                    {doc.name}
                  </h3>
                  <p className="text-[13px] font-medium text-gray-700 dark:text-zinc-300">
                    {doc.designation}
                  </p>
                  <p className="text-[12px] text-gray-500 dark:text-zinc-500 mt-1">
                    {doc.qualifications}
                  </p>
                </div>

                {/* Hollow Pill Button */}
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 rounded-full border border-gray-900 dark:border-zinc-700 text-[13px] font-bold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors"
                >
                  Book Consult
                </button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
