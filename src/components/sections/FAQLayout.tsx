"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const faqs = [
    {
      q: "How do I book an appointment with Dr. Kumar?",
      a: "You can request an appointment by clicking any 'Book Appointment' button on this website and filling out the short form, or by calling our desk directly at 08554-245678 or +91 94402 75556. Once submitted, our coordinator will call you to confirm your exact time slot.",
    },
    {
      q: "What are the hospital consulting hours?",
      a: "Our Outpatient Department (OPD) is open Monday through Saturday from 9:00 AM to 8:00 PM. Emergency, trauma triaging, and inpatient critical care operations are fully active 24 hours a day, 7 days a week, including Sundays and public holidays.",
    },
    {
      q: "Does the hospital handle emergency accident cases and fracture surgeries?",
      a: "Yes, we are a specialized trauma care center. We have an active trauma surgical team led by Dr. Kumar. Our operating theaters, in-house X-ray facility, diagnostics, and sterile wards are equipped for immediate admission and fracture fixing operations 24/7.",
    },
    {
      q: "Do you offer cashless treatments or accept health insurance?",
      a: "Yes. We partner with major health insurance companies and Third-Party Administrators (TPAs) to provide cashless treatment for qualifying surgical procedures. Please visit our front office with your health card and ID for pre-authorization details.",
    },
    {
      q: "Is there in-house physical therapy available for post-surgical recovery?",
      a: "Absolutely. We have a dedicated Physiotherapy and Rehabilitation department inside the hospital. Our physical therapists design customized mobility recovery and pain-management programs specifically for patients recovering from joint replacements, fracture repairs, and ligament reconstructions.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="bg-white text-black opacity-100 brightness-100 px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

          {/* Left Column: Header and Description */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl lg:text-[44px] font-sans text-gray-900 dark:text-white font-medium tracking-tight leading-[1.15] mb-6">
              <span>Frequently</span><br className="hidden lg:block" /> <span>Asked Questions</span>
            </h2>
            <p className="text-[15px] text-gray-500 dark:text-zinc-400 leading-relaxed max-w-md">
              Common questions about how Kumar's Ortho Clinic works, what&apos;s included, and how to get started. If you don&apos;t find your answer here, reach out at <a href="mailto:contact@kumarhospital.com" className="underline hover:text-gray-900 dark:hover:text-gray-300 transition-colors">contact@kumarhospital.com</a> and we&apos;ll get back to you quickly.
            </p>
          </div>

          {/* Right Column: Minimalist Accordion */}
          <div className="lg:col-span-7 border-t border-gray-200 dark:border-zinc-800">
            <div className="flex flex-col">
              {faqs.map((faq, idx) => {
                const isOpen = activeIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border-b border-gray-200 dark:border-zinc-800"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full flex items-center justify-between py-6 text-left group"
                    >
                      <span className="text-[14px] font-semibold text-gray-900 dark:text-zinc-200 group-hover:text-blue-600 transition-colors pr-8">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-gray-400 dark:text-zinc-500 transition-transform duration-300 flex-shrink-0",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 text-[14px] text-gray-500 dark:text-zinc-400 leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
