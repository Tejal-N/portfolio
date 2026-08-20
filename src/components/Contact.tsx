"use client";

import { motion } from "framer-motion";
import { Doodles } from "@/components/Doodles";
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
} from "@/components/BrandIcons";

interface ContactProps {
  accentColor: string;
}

export function Contact({ accentColor }: ContactProps) {
  return (
    <section id="contact" className="py-16 md:py-24">
      {/* Section label */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-pixel)] tracking-wider uppercase">
          Contact
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

      {/* Contact popup */}
      <motion.div
        className="relative max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        {/* Doodles stay behind the popup */}
        <Doodles section="contact" />

        {/* Paint window */}
        <div className="paint-window-border bg-[#C0C0C0] relative z-10">
          {/* Window title bar */}
          <div className="bg-[#0A246A] text-white h-6 px-2 flex items-center justify-between">
            <span className="text-xs font-bold">
              Contact - Paint
            </span>

            <div className="flex items-center gap-1">
              <span className="flex items-center justify-center w-4 h-4 bg-[#C0C0C0] text-black text-[10px] border border-white">
                _
              </span>

              <span className="flex items-center justify-center w-4 h-4 bg-[#C0C0C0] text-black text-[10px] border border-white">
                □
              </span>

              <span className="flex items-center justify-center w-4 h-4 bg-[#C0C0C0] text-black text-[10px] border border-white">
                ×
              </span>
            </div>
          </div>

          {/* Window content */}
          <div className="p-4 md:p-6">
            <div className="paint-inset bg-white p-6 md:p-8 text-center">
              {/* Heading */}
              <motion.h3
                className="
                  text-2xl
                  md:text-3xl
                  font-[family-name:var(--font-pixel)]
                  tracking-wider
                  mb-1
                "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                LET&apos;S MAKE
              </motion.h3>

              <motion.h3
                className="
                  text-2xl
                  md:text-3xl
                  font-[family-name:var(--font-pixel)]
                  tracking-wider
                  mb-6
                "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                SOMETHING{" "}
                <span style={{ color: accentColor }}>COOL</span>.
              </motion.h3>

              {/* Description */}
              <motion.p
                className="
                  text-sm
                  text-[#555]
                  mb-8
                  max-w-xs
                  mx-auto
                  leading-relaxed
                "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Have an idea, a project, or just want to say hi?
                I&apos;d love to hear from you.
              </motion.p>

              {/* Send message button */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                }}
              >
                <a
                  href="mailto:stejalnaresh@gmail.com"
                  className="
                    inline-block
                    paint-bevel
                    px-6
                    py-2.5
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
                  [ SEND A MESSAGE ]
                </a>
              </motion.div>
            </div>
          </div>

          {/* Status bar + sticky note */}
          <div className="relative px-2 pb-2">
            <div
              className="
                paint-inset
                px-2
                py-1
                text-[11px]
                text-[#555]
                bg-[#C0C0C0]
              "
            >
              Ready
            </div>

            {/* Sticky note */}
            <motion.div
              className="
                absolute
                bottom-0
                right-4
                z-30
                rotate-[-4deg]
              "
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: -10,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: -4,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25,
                duration: 0.4,
              }}
            >
              <div
                className="
                  px-4
                  py-3
                  text-xs
                  font-[family-name:var(--font-pixel)]
                  shadow-[3px_4px_0_rgba(0,0,0,0.15)]
                  border
                  border-black/10
                  whitespace-nowrap
                "
                style={{ background: accentColor }}
              >
                No lorem ipsum, promise. :)
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social links */}
        <motion.div
          className="
            flex
            justify-center
            gap-4
            mt-8
            relative
            z-10
          "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <SocialLink
            href="mailto:stejalnaresh@gmail.com"
            icon={MailIcon}
            label="Email"
          />

          <SocialLink
            href="https://github.com/Tejal-N"
            icon={GithubIcon}
            label="GitHub"
          />

          <SocialLink
            href="https://linkedin.com/in/s-tejal-naresh"
            icon={LinkedinIcon}
            label="LinkedIn"
          />
        </motion.div>

        {/* Footer */}
        <motion.p
          className="
            mt-12
            text-lg
            font-[family-name:var(--font-pixel)]
            text-[#808080]
            text-center
          "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          Designed &amp; Developed by Tejal Naresh
          <br />
          All rights reserved © {new Date().getFullYear()}
        </motion.p>
      </motion.div>
    </section>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={
        href.startsWith("mailto:")
          ? undefined
          : "noopener noreferrer"
      }
      className="
        paint-bevel
        p-2
        flex
        items-center
        justify-center
        transition-all
        duration-200
        hover:scale-105
        hover:bg-[#D6D6D6]
        active:scale-95
      "
      aria-label={label}
      title={label}
    >
      <Icon
        width={18}
        height={18}
        aria-hidden="true"
      />
    </a>
  );
}