"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface FeatureShowcaseProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  image: string;
  flip?: boolean;
  tilt?:
    | "flat"
    | "soft"
    | "medium"
    | "dramatic"
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "left-dramatic"
    | "right-dramatic"
    | "top-dramatic"
    | "bottom-dramatic";
}

export default function FeatureShowcase({
  title,
  description,
  buttonText,
  buttonLink = "#",
  image,
  flip = false,
  tilt = "medium",
}: FeatureShowcaseProps) {
  /** Tilt presets */
  const tiltPresets = {
    flat: {
      initial: { rotateY: 0, rotateX: 0 },
      hover: { rotateY: 0, rotateX: 0, translateZ: 0 },
    },

    soft: {
      initial: { rotateY: -6, rotateX: 2 },
      hover: { rotateY: -3, rotateX: 1, translateZ: 15 },
    },

    medium: {
      initial: { rotateY: -14, rotateX: 5 },
      hover: { rotateY: -8, rotateX: 2, translateZ: 30 },
    },

    dramatic: {
      initial: { rotateY: -22, rotateX: 8 },
      hover: { rotateY: -14, rotateX: 6, translateZ: 45 },
    },

    left: {
      initial: { rotateY: -18, rotateX: 0 },
      hover: { rotateY: -8, rotateX: 0, translateZ: 40 },
    },

    right: {
      initial: { rotateY: 18, rotateX: 0 },
      hover: { rotateY: 8, rotateX: 0, translateZ: 40 },
    },

    top: {
      initial: { rotateY: 0, rotateX: -15 },
      hover: { rotateY: 0, rotateX: -8, translateZ: 45 },
    },

    bottom: {
      initial: { rotateY: 0, rotateX: 16 },
      hover: { rotateY: 0, rotateX: 8, translateZ: 45 },
    },

    "left-dramatic": {
      initial: { rotateY: -28, rotateX: 4 },
      hover: { rotateY: -16, rotateX: 2, translateZ: 65 },
    },

    "right-dramatic": {
      initial: { rotateY: 28, rotateX: 4 },
      hover: { rotateY: 16, rotateX: 2, translateZ: 65 },
    },

    "top-dramatic": {
      initial: { rotateY: 0, rotateX: -26 },
      hover: { rotateY: 0, rotateX: -18, translateZ: 65 },
    },

    "bottom-dramatic": {
      initial: { rotateY: 0, rotateX: 26 },
      hover: { rotateY: 0, rotateX: 16, translateZ: 65 },
    },
  };

  const config = tiltPresets[tilt];
  const hasTilt = tilt !== "flat";

  return (
    <section className="relative w-full py-28 bg-[#FFFDF5] overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-[#FFFDF5] via-[#F8F6EB] to-[#FFFDF5] pointer-events-none" />

      <div
        className={`relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 px-6 ${
          flip ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: flip ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 relative flex justify-center items-center"
        >
          <div
            className="relative w-[280px] sm:w-[320px] lg:w-[360px] aspect-[447/900] flex justify-center items-center"
            style={{
              perspective: hasTilt ? "1200px" : "none",
            }}
          >
            <motion.div
              initial={config.initial}
              whileHover={config.hover}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="w-full h-full rounded-[2rem] overflow-hidden"
              style={{
                transformStyle: hasTilt ? "preserve-3d" : undefined,
              }}
            >
              <Image
                src={image}
                alt={title}
                fill
                draggable={false}
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* glow */}
          {hasTilt && (
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.18),transparent_70%)] blur-[60px]" />
          )}
        </motion.div>

        {/* TEXT SIDE */}
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

          {buttonText && (
            <a
              href={buttonLink}
              className="relative inline-flex items-center justify-center px-10 py-3.5 rounded-full font-medium text-[#1E1E1E] bg-gradient-to-r from-[#F9E8A1] to-[#E3D28E] transition-all duration-300 shadow-[0_4px_20px_rgba(201,162,39,0.25)] hover:shadow-[0_6px_25px_rgba(201,162,39,0.35)] hover:scale-[1.03] group overflow-hidden"
            >
              <span className="relative z-10">{buttonText}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9A227]/30 to-[#E3D28E]/30 opacity-0 group-hover:opacity-100 blur-xl" />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
