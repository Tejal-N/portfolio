"use client";

import { useEffect, useState } from "react";
import { Doodles } from "@/components/Doodles";
import { motion } from "framer-motion";

interface HeroProps {
  accentColor: string;
}

export function Hero({ accentColor }: HeroProps) {
  const name = "HI, I'M TEJAL";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      index += 1;
      setTypedText(name.slice(0, index));

      if (index >= name.length) {
        clearInterval(timer);
      }
    }, 65);

    return () => clearInterval(timer);
  }, []);

  const handleViewWork = () => {
  document.getElementById("experience")?.scrollIntoView({
    behavior: "smooth",
  });
};

  return (
    <section
      id="hero"
      className="relative min-h-[70vh] flex items-center justify-center px-6 py-16 md:px-12 md:py-24"
    >
      {/* Doodles */}
      <Doodles section="hero" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

          {/* LEFT — INTRODUCTION */}
          <div className="flex-1 text-center md:text-left">

            {/* Name */}
            <div className="relative inline-block mb-6">
              <div className="relative px-6 py-4 md:px-8 md:py-5">

                {/* Hand-drawn name border */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="none"
                  viewBox="0 0 400 100"
                  aria-hidden="true"
                >
                  <path
                    d="M 4,4 L 396,6 L 394,96 L 6,94 Z"
                    fill="none"
                    stroke={accentColor}
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Typed name + blinking cursor */}
                <h1
                  className="relative text-5xl md:text-6xl lg:text-7xl font-normal font-[family-name:var(--font-pixel)] tracking-wider whitespace-nowrap"
                  style={{ color: accentColor }}
                >
                  {typedText}

                  <span
                    className="hero-cursor"
                    style={{ backgroundColor: accentColor }}
                    aria-hidden="true"
                  />
                </h1>
              </div>
            </div>

            {/* Role + details */}
            <div className="mt-4 space-y-3">

              <p className="text-base md:text-lg font-semibold tracking-wide uppercase text-[#333]">
                UI/UX Designer &amp; Frontend Developer
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm text-[#666]">

                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ background: accentColor }}
                />

                <span>
                  Information Science &amp; Engineering Student
                </span>

                <span className="text-[#ccc]">
                  |
                </span>

                <span>
                  Open to Opportunities
                </span>
              </div>

              {/* Underline */}
              <svg
                width="300"
                height="8"
                viewBox="0 0 300 8"
                className="mx-auto md:mx-0 mt-4"
                aria-hidden="true"
              >
                <path
                  d="M 0,4 Q 75,0 150,4 Q 225,8 300,4"
                  fill="none"
                  stroke={accentColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* CTA */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.3 }}
            >
              <button
                type="button"
                onClick={handleViewWork}
                className="
                  inline-block
                  paint-bevel
                  px-6 py-2.5
                  text-sm
                  font-[family-name:var(--font-pixel)]
                  tracking-wider
                  uppercase
                  transition-all
                  duration-200
                  hover:scale-105
                  hover:text-[#333]
                  hover:border-[#555]
                  hover:bg-[#D6D6D6]
                  active:scale-95
                "
              >
                [ VIEW MY WORK ]
              </button>
            </motion.div>
          </div>

          {/* RIGHT — POLAROID PHOTO */}
          <div className="flex-shrink-0">

            <div
              className="relative"
              style={{
                transform: "rotate(3deg)",
              }}
            >
              {/* Polaroid */}
              <div
                className="
                  relative
                  w-[230px]
                  md:w-[260px]
                  bg-white
                  p-3
                  pb-14
                  shadow-[3px_4px_0px_rgba(0,0,0,0.18)]
                  transition-transform
                  duration-300
                  ease-out
                  hover:scale-105
                  hover:-rotate-2
                "
              >
                {/* Photo */}
                <div className="w-full aspect-[4/5] bg-[#E8E8E8] overflow-hidden">
                  <img
                    src="/tejal.jpeg"
                    alt="Tejal"
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-300
                      ease-out
                      hover:scale-105
                    "
                  />
                </div>

                {/* Sticky note */}
                <motion.div
                  className="absolute -bottom-8 -left-10 z-20 rotate-[-6deg]"
                  initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <div
                    className="
                      px-4 py-3
                      text-xs
                      font-[family-name:var(--font-pixel)]
                      shadow-md
                      border border-black/10
                      whitespace-nowrap
                    "
                    style={{ background: "#2DD4BF" }}
                  >
                    I came. I saw. I added 8px spacing.
                  </div>
                </motion.div>

                {/* Tape */}
                <div
                  className="absolute -top-4 left-1/2 w-20 h-8 opacity-75"
                  style={{
                    background: "#EFE4B0",
                    transform: "translateX(-50%) rotate(-4deg)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selection rectangle */}
      <div
        className="absolute inset-4 md:inset-8 pointer-events-none opacity-[0.15]"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <rect
            x="1"
            y="1"
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            fill="none"
            stroke="#000"
            strokeWidth="1"
            strokeDasharray="6 4"
            style={{
              animation: "marching-ants 0.5s linear infinite",
            }}
          />
        </svg>
      </div>
    </section>
  );
}