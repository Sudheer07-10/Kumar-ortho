"use client";

import { motion } from "framer-motion";

interface DoctorProps {
  onOpenBooking: () => void;
  data: any;
}

export default function Doctor({ onOpenBooking, data }: DoctorProps) {
  const doctors = data.doctors;

  return (
    <section
      id="doctor"
      className="bg-transparent text-black px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col">

        {/* Section Header (Left Aligned like reference) */}
        <div className="mb-16 flex flex-col px-4 text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">
            {data.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif text-[#111111] dark:text-white font-medium tracking-tight leading-[1.1] max-w-3xl mb-4">
            {data.headline}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-zinc-400">
            {data.subtext}
          </p>
        </div>

        {/* Static Text-Only Grid */}
        <div className="w-full px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {doctors.map((doc: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col p-8 bg-[#F8FAFC] dark:bg-zinc-800/50 rounded-[32px] border border-gray-300 shadow-sm dark:border-zinc-700/50 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 justify-between h-full"
              >
                {/* Doctor Image */}
                {doc.image && (
                  <div className="w-full aspect-[4/5] bg-gray-100 dark:bg-zinc-800 rounded-2xl mb-6 overflow-hidden flex items-center justify-center border border-gray-200 dark:border-zinc-700 relative">
                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                  </div>
                )}

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
                  className="w-full py-3 rounded-full border border-gray-900 dark:border-zinc-700 text-[13px] font-bold text-gray-900 dark:text-white hover:bg-[#B24E39] hover:border-[#B24E39] hover:text-white dark:hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  {data.ctaButton}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
