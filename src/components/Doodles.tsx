"use client";

import { motion } from "framer-motion";

interface DoodlesProps {
  section: "hero" | "about" | "contact";
}

export function Doodles({ section }: DoodlesProps) {
  if (section === "hero") {
    return (
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* =========================================
            LARGE STAR — TOP LEFT
        ========================================== */}
        <motion.svg
          className="absolute top-8 left-6 md:top-12 md:left-16"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
          animate={{ opacity: 0.55, rotate: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.45 }}
        >
          <path
            d="M14 2 L16.5 10.5 L25 10.5 L18 16 L20.5 24.5 L14 19 L7.5 24.5 L10 16 L3 10.5 L11.5 10.5 Z"
            fill="none"
            stroke="#00A2A8"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </motion.svg>

        {/* =========================================
            SMALL SPARKLE — TOP CENTER
        ========================================== */}
        <motion.svg
          className="absolute top-10 left-[38%]"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ delay: 0.55, duration: 0.3 }}
        >
          <path
            d="M7 0.5 L8.2 5.8 L13.5 7 L8.2 8.2 L7 13.5 L5.8 8.2 L0.5 7 L5.8 5.8 Z"
            fill="none"
            stroke="#000"
            strokeWidth="1.2"
          />
        </motion.svg>

        {/* =========================================
            SMALL STAR — TOP RIGHT
        ========================================== */}
        <motion.svg
          className="absolute top-12 right-10 md:top-16 md:right-24"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          initial={{ opacity: 0, rotate: 20, scale: 0.7 }}
          animate={{ opacity: 0.4, rotate: 0, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.35 }}
        >
          <path
            d="M10 1 L12 7 L18 7 L13 11 L15 17 L10 13 L5 17 L7 11 L2 7 L8 7 Z"
            fill="none"
            stroke="#000"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </motion.svg>

        {/* =========================================
            SIMPLE ARROW — RIGHT
        ========================================== */}
        <motion.svg
          className="absolute top-24 right-5 md:top-28 md:right-20"
          width="55"
          height="35"
          viewBox="0 0 55 35"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ delay: 0.9, duration: 0.35 }}
        >
          <motion.path
            d="M4 17 L42 17 M33 9 L44 17 L33 25"
            fill="none"
            stroke="#000"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          />
        </motion.svg>

        {/* =========================================
            SMALL TEAL SPARKLE — LEFT
        ========================================== */}
        <motion.svg
          className="absolute top-[38%] left-[10%] md:left-[17%]"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.3 }}
        >
          <path
            d="M6.5 0.5 L7.6 5.4 L12.5 6.5 L7.6 7.6 L6.5 12.5 L5.4 7.6 L0.5 6.5 L5.4 5.4 Z"
            fill="none"
            stroke="#00A2A8"
            strokeWidth="1.1"
          />
        </motion.svg>

        {/* =========================================
            SMALL CIRCLE — LEFT LOWER
        ========================================== */}
        <motion.svg
          className="absolute bottom-16 left-12 md:bottom-20 md:left-28"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.3 }}
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            fill="none"
            stroke="#ED1C24"
            strokeWidth="1.4"
          />
        </motion.svg>

        {/* =========================================
            SMALL STAR — BOTTOM CENTER
        ========================================== */}
        <motion.svg
          className="absolute bottom-[18%] left-[43%]"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          initial={{ opacity: 0, scale: 0, rotate: -20 }}
          animate={{ opacity: 0.4, scale: 1, rotate: 0 }}
          transition={{ delay: 1.5, duration: 0.35 }}
        >
          <path
            d="M9 1 L11 6.5 L17 9 L11 11 L9 17 L7 11 L1 9 L7 6.5 Z"
            fill="none"
            stroke="#00A2A8"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </motion.svg>

        {/* =========================================
            SMALL SPARKLE — RIGHT MIDDLE
        ========================================== */}
        <motion.svg
          className="absolute top-[52%] right-[12%] md:right-[20%]"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.45, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.3 }}
        >
          <path
            d="M7 0.5 L8.2 5.8 L13.5 7 L8.2 8.2 L7 13.5 L5.8 8.2 L0.5 7 L5.8 5.8 Z"
            fill="none"
            stroke="#F39C12"
            strokeWidth="1.1"
          />
        </motion.svg>

        {/* =========================================
            ZIGZAG — BOTTOM RIGHT
        ========================================== */}
        <motion.svg
          className="absolute bottom-12 right-16 md:bottom-24 md:right-36"
          width="50"
          height="20"
          viewBox="0 0 50 20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.7, duration: 0.35 }}
        >
          <motion.path
            d="M2 16 L11 5 L20 16 L29 5 L38 16 L48 7"
            fill="none"
            stroke="#000"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.7, duration: 0.7 }}
          />
        </motion.svg>

        {/* =========================================
            TINY STAR — NEAR PHOTO
        ========================================== */}
        <motion.svg
          className="absolute top-[30%] right-[28%]"
          width="11"
          height="11"
          viewBox="0 0 20 20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ delay: 1.9, duration: 0.3 }}
        >
          <path
            d="M10 1 L12 7 L18 7 L13 11 L15 17 L10 13 L5 17 L7 11 L2 7 L8 7 Z"
            fill="none"
            stroke="#ED1C24"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </motion.svg>

        {/* =========================================
            SMALL CROSS
        ========================================== */}
        <motion.svg
          className="absolute top-[24%] right-[40%]"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 0.35, rotate: 0 }}
          transition={{ delay: 1.8, duration: 0.3 }}
        >
          <line
            x1="2"
            y1="7"
            x2="12"
            y2="7"
            stroke="#F39C12"
            strokeWidth="1.5"
          />
          <line
            x1="7"
            y1="2"
            x2="7"
            y2="12"
            stroke="#F39C12"
            strokeWidth="1.5"
          />
        </motion.svg>
      </div>
    );
  }

  if (section === "about") {
    return (
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Star */}
        <motion.svg
          className="absolute top-2 right-4"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <path
            d="M12 1 L14.5 9.5 L23 12 L14.5 14.5 L12 23 L9.5 14.5 L1 12 L9.5 9.5 Z"
            fill="none"
            stroke="#00A2A8"
            strokeWidth="1.5"
          />
        </motion.svg>

        {/* Sparkle */}
        <motion.span
          className="absolute top-12 right-20 text-xl font-bold text-[#F39C12]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
        >
          +
        </motion.span>

        {/* Squiggle */}
        <motion.svg
          className="absolute bottom-0 left-4"
          width="100"
          height="14"
          viewBox="0 0 100 14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.35 }}
          viewport={{ once: true }}
        >
          <path
            d="M2 7 Q14 0 26 7 Q38 14 50 7 Q62 0 74 7 Q86 14 98 7"
            fill="none"
            stroke="#3F48CC"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </motion.svg>
      </div>
    );
  }

  if (section === "contact") {
    return (
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Arrow */}
        <motion.svg
          className="absolute top-2 right-6"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.45 }}
          viewport={{ once: true }}
        >
          <path
            d="M35 5 L10 30 M10 15 L10 32 L27 32"
            fill="none"
            stroke="#22B14C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>

        {/* Sparkle */}
        <motion.span
          className="absolute top-10 right-24 text-xl font-bold text-[#00A2A8]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
        >
          +
        </motion.span>
      </div>
    );
  }

  return null;
}