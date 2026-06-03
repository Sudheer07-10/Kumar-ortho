"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Experienced Specialists",
      desc: "Consultations and procedures directed by veteran practitioners holding national certifications and extensive clinical tenures.",
    },
    {
      title: "Advanced Medical Technology",
      desc: "Equipped with sterile laminar airflow operation theatres, C-arm imaging, and modern diagnostic systems.",
    },
    {
      title: "24/7 Emergency Care",
      desc: "Immediate admission, triaging, and critical care units active round-the-clock to manage critical accidents and trauma cases.",
    },
    {
      title: "Patient-Centered Treatment",
      desc: "Empathetic communication and clinical pathways structured dynamically around individual patient recovery and comfort.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="bg-white text-black opacity-100 brightness-100 px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col">

        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-serif text-[#111111] dark:text-white font-medium tracking-tight leading-[1.1]">
            Why Kumar's Ortho Clinic
          </h2>
        </div>

        {/* Vertical List */}
        <div className="w-full border-t border-gray-200 dark:border-zinc-800">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col sm:flex-row py-12 border-b border-gray-200 dark:border-zinc-800"
            >
              {/* Number Column */}
              <div className="w-full sm:w-32 flex-shrink-0 mb-4 sm:mb-0">
                <span className="text-[11px] font-bold text-gray-400 dark:text-zinc-500 tracking-wider">
                  0{idx + 1}
                </span>
              </div>

              {/* Content Column */}
              <div className="flex-1 max-w-2xl">
                <h3 className="text-2xl sm:text-3xl font-serif text-[#111111] dark:text-white mb-4">
                  {reason.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-gray-500 dark:text-zinc-400">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
