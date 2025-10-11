"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface FeatureShowcaseProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  images?: string[];
  flip?: boolean;
}

export default function FeatureShowcase({
  title,
  description,
  buttonText = "Learn More",
  buttonLink = "#",
  images,
  flip = false,
}: FeatureShowcaseProps) {
  const safeImages = images && images.length > 0 ? images : ["/default.png"];

  return (
    <section className="relative w-full py-28 bg-gradient-to-b from-[#FFFDF5] via-[#FAF8EF] to-[#F8F6EB] overflow-hidden">
      <div
        className={`max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 px-6 ${
          flip ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* --- IMAGE SIDE (unchanged) --- */}
        <motion.div
          initial={{ opacity: 0, x: flip ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 relative flex justify-center items-center"
        >
          <div className="relative w-[280px] sm:w-[320px] lg:w-[360px] aspect-[9/19] overflow-hidden flex justify-center items-center">
            {safeImages.length === 1 && (
              <Image
                src={safeImages[0]}
                alt={title}
                fill
                draggable={false}
                className="object-contain"
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
              />
            )}

            {safeImages.length === 2 && (
              <div className="relative w-full max-w-[520px]">
                <Image
                  src={safeImages[0]}
                  alt={title}
                  width={280}
                  height={580}
                  draggable={false}
                  className="absolute -left-10 top-10 rounded-[2rem] shadow-2xl object-cover border border-[#E9E2C7] z-0"
                />
                <Image
                  src={safeImages[1]}
                  alt={title}
                  width={280}
                  height={580}
                  draggable={false}
                  className="absolute left-20 top-0 rounded-[2rem] shadow-2xl object-cover border border-[#E9E2C7] z-10"
                />
              </div>
            )}
          </div>

          {/* soft gold glow */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.25),transparent_80%)] blur-[160px]" />
        </motion.div>

        {/* --- TEXT SIDE (redesigned) --- */}
        <motion.div
          initial={{ opacity: 0, x: flip ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6 tracking-tight leading-tight text-[#1E1E1E]">
            {title}
          </h2>

          <p className="text-[#4B4B4B] text-lg sm:text-xl leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
            {description}
          </p>

          {/* --- Aesthetic button --- */}
          <a
            href={buttonLink}
            className="relative inline-flex items-center justify-center px-10 py-3.5 rounded-full font-medium text-[#1E1E1E] bg-gradient-to-r from-[#F9E8A1] to-[#E3D28E] transition-all duration-300 
            shadow-[0_4px_20px_rgba(201,162,39,0.25)] hover:shadow-[0_6px_25px_rgba(201,162,39,0.35)]
            hover:scale-[1.03] group overflow-hidden"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#000000]">
              {buttonText}
            </span>

            {/* soft glow layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C9A227]/30 to-[#E3D28E]/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
