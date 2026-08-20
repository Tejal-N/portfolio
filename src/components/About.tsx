"use client";

import { motion } from "framer-motion";
import { Doodles } from "@/components/Doodles";

interface AboutProps {
  accentColor: string;
}

export function About({ accentColor }: AboutProps) {
  const signatureColor = "#2DD4BF";

  return (
    <section id="about" className="py-16 md:py-24">
      {/* Section label */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-pixel)] tracking-wider uppercase">
          About Me
        </h2>

        <svg
          width="120"
          height="6"
          viewBox="0 0 120 6"
          className="mt-1"
          aria-hidden="true"
        >
          <line
            x1="0"
            y1="3"
            x2="120"
            y2="3"
            stroke={accentColor}
            strokeWidth="2"
          />
          <line
            x1="0"
            y1="3"
            x2="120"
            y2="3"
            stroke="#000"
            strokeWidth="0.5"
            strokeDasharray="4 3"
          />
        </svg>
      </motion.div>

      {/* About canvas */}
      <motion.div
        className="relative max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <Doodles section="about" />

        {/* Main text box */}
        <div className="relative">
          {/* Hand-drawn border */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 700 300"
            aria-hidden="true"
          >
            <path
              d="M 4,5 L 695,3 L 698,295 L 5,298 Z"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>

          {/* Resize handles */}
          <div
            className="absolute -top-1 -left-1 w-2.5 h-2.5 border border-black bg-white"
            aria-hidden="true"
          />
          <div
            className="absolute -top-1 -right-1 w-2.5 h-2.5 border border-black bg-white"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border border-black bg-white"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border border-black bg-white"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Intro */}
            <p className="text-sm md:text-base leading-relaxed text-[#333] mb-5">
              I&apos;m Tejal Naresh, an Information Science &amp; Engineering
              student who enjoys{" "}
              <strong style={{ color: signatureColor }}>
                designing interfaces
              </strong>{" "}
              and exploring how people interact with them.
            </p>

            {/* UI / Frontend */}
            <p className="text-sm md:text-base leading-relaxed text-[#333] mb-5">
              I&apos;m especially drawn to{" "}
              <strong style={{ color: signatureColor }}>
                UI design
              </strong>{" "}
              and{" "}
              <strong style={{ color: signatureColor }}>
                frontend development
              </strong>
              . I like figuring out how something should look, how it should
              feel, and then bringing it to life with React, Next.js, and
              Tailwind CSS.
            </p>

            {/* Design process */}
            <p className="text-sm md:text-base leading-relaxed text-[#333]">
              Most of my projects start with a visual idea and turn into something I
              can build, experiment with, and improve. I enjoy working through
              wireframes and prototypes to figure out how an interface should look,
              feel, and work before bringing it to life. I&apos;m still learning, but
              that&apos;s honestly one of my favourite parts of building things.
              <span
                className="inline-block w-0.5 h-4 ml-1 bg-black align-middle"
                style={{
                  animation: "cursor-blink 1s step-end infinite",
                }}
                aria-hidden="true"
              />
            </p>
          </div>
        </div>

        {/* Sticky note */}
        <motion.div
          className="absolute -bottom-8 -right-4 md:-right-10 rotate-3"
          initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >
          <div
            className="px-4 py-3 text-xs font-[family-name:var(--font-pixel)] shadow-md border border-black/10"
            style={{ background: signatureColor }}
          >
            Good interfaces &gt; everything :)
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}