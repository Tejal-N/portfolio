"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

interface SkillsProps {
  accentColor: string;
}

export function Skills({ accentColor }: SkillsProps) {
  const paintBlue = "#0A246A";

  return (
    <section id="skills" className="py-16 md:py-24">
      {/* Section label */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-pixel)] tracking-wider uppercase">
          Skills
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

      {/* Skills popup window */}
      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="border-2 border-[#808080] bg-[#C0C0C0]"
          style={{
            boxShadow:
              "inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #404040",
          }}
        >
          {/* Popup title bar */}
          <div
            className="flex items-center justify-between px-1 py-0.5 text-white font-bold text-xs"
            style={{ background: paintBlue }}
          >
            <span>My Skills</span>

            <div className="flex gap-0.5">
              <button
                type="button"
                className="w-4 h-3.5 flex items-center justify-center bg-[#C0C0C0] text-black text-[9px] font-bold border border-white hover:bg-[#D4D0C8] active:border-[#808080] transition-colors"
                aria-label="Minimize"
              >
                _
              </button>

              <button
                type="button"
                className="w-4 h-3.5 flex items-center justify-center bg-[#C0C0C0] text-black text-[9px] font-bold border border-white hover:bg-[#D4D0C8] active:border-[#808080] transition-colors"
                aria-label="Maximize"
              >
                □
              </button>

              <button
                type="button"
                className="w-4 h-3.5 flex items-center justify-center bg-[#C0C0C0] text-black text-[9px] font-bold border border-white hover:bg-[#D4D0C8] active:border-[#808080] transition-colors"
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>

          {/* Popup content */}
          <div className="paint-inset bg-[#ECE9D8] p-4 md:p-6 m-1">
            {skillCategories.map((category, catIdx) => (
              <div
                key={category.name}
                className={catIdx > 0 ? "mt-5" : ""}
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-[family-name:var(--font-pixel)] text-sm tracking-wider text-[#333]">
                    {category.name}
                  </span>

                  <div className="flex-1 h-px bg-[#808080]" />
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: catIdx * 0.1 + idx * 0.03,
                        duration: 0.3,
                      }}
                      whileHover={{
                        y: -2,
                        scale: 1.03,
                        transition: {
                          duration: 0.08,
                          ease: "linear",
                        },
                      }}
                      whileTap={{
                        scale: 0.98,
                        y: 0,
                      }}
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-1.5
                          px-3
                          py-1.5
                          border
                          border-[#808080]
                          bg-white
                          hover:border-[#0A246A]
                          hover:bg-[#F4F6FC]
                          transition-colors
                          duration-150
                          cursor-default
                        "
                        title={skill.name}
                      >
                        <div
                          className="
                            w-3
                            h-3
                            border
                            border-[#404040]
                            flex-shrink-0
                          "
                          style={{
                            background: skill.color,
                          }}
                        />

                        <span className="text-xs md:text-sm font-[family-name:var(--font-pixel)] whitespace-nowrap">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}