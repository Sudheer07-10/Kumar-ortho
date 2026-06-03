"use client";

import { motion } from "framer-motion";
import { Bone, Stethoscope, Microscope, Hospital, Ambulance, Heart } from "lucide-react";

export default function Facilities() {
  const items = [
    {
      title: "Orthopedic Excellence",
      desc: "Advanced care for fractures, joint disorders, trauma, and spine-related conditions.",
      icon: <Bone className="h-7 w-7" />,
    },
    {
      title: "Experienced Specialists",
      desc: "Dedicated consultants across orthopedics, medicine, surgery, urology, and women's health.",
      icon: <Stethoscope className="h-7 w-7" />,
    },
    {
      title: "Accurate Diagnostics",
      desc: "Laboratory and imaging services supporting timely diagnosis and treatment.",
      icon: <Microscope className="h-7 w-7" />,
    },
    {
      title: "Modern Medical Infrastructure",
      desc: "Well-equipped facilities designed to support safe and efficient patient care.",
      icon: <Hospital className="h-7 w-7" />,
    },
    {
      title: "Emergency Support",
      desc: "Prompt medical attention and stabilization for urgent healthcare needs.",
      icon: <Ambulance className="h-7 w-7" />,
    },
    {
      title: "Compassionate Patient Care",
      desc: "Personalized treatment plans focused on comfort, recovery, and long-term wellness.",
      icon: <Heart className="h-7 w-7" />,
    },
  ];

  return (
    <section
      id="facilities"
      className="bg-white text-black opacity-100 brightness-100 px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col">

        {/* Section Header */}
        <div className="mb-16 flex flex-col px-4 text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">
            INFRASTRUCTURE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif text-[#111111] dark:text-white font-medium tracking-tight leading-[1.1] max-w-3xl mb-4">
            Advanced facilities designed around patient care
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-zinc-400 max-w-2xl">
            Review the clinical setups engineered to ensure sterile compliance, diagnostics speed, and complete patient comfort.
          </p>
        </div>

        {/* Custom Context Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-[16px] bg-white dark:bg-zinc-900 p-8 border border-gray-200 dark:border-zinc-800 hover:border-transparent dark:hover:border-zinc-700 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[220px] cursor-pointer"
            >
              {/* Card top half */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 text-[#2563EB] group-hover:text-[#B24E39] group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-300 ease-out inline-block">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-bold text-[#111111] dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-gray-500 dark:text-zinc-400 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
