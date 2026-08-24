"use client";

import { motion } from "framer-motion";
import { Folder, ExternalLink } from "lucide-react";

import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  accentColor: string;
}

export function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        w-full
        bg-[#ECE9D8]
        border-2
        border-t-white
        border-l-white
        border-r-[#808080]
        border-b-[#808080]
        p-3
        text-black
        cursor-none
        transition-all
        duration-150
      "
    >
      {/* FILE HEADER */}
      <div
        className="
          flex
          items-center
          gap-2
          mb-3
          pb-2
          border-b
          border-[#808080]
        "
      >
        <Folder
          size={22}
          strokeWidth={1.2}
          fill="#F7C948"
          color="#A87500"
          className="
            shrink-0
            transition-transform
            duration-150
            group-hover:scale-105
          "
        />

        <span className="text-sm md:text-base font-bold">
          {project.title}
        </span>
      </div>

      {/* DETAILS */}
      <div className="text-xs md:text-sm space-y-3">

        {/* DESCRIPTION */}
        <div className="flex items-start">
          <span className="w-24 shrink-0 text-[#555]">
            Description:
          </span>

          <span className="leading-relaxed text-[#222]">
            {project.description}
          </span>
        </div>

        {/* TECH STACK */}
        <div className="flex items-start">
          <span className="w-24 shrink-0 text-[#555]">
            Tech Stack:
          </span>

          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, idx) => (
              <motion.div
                key={tech}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: idx * 0.03,
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
                    inline-flex
                    items-center
                    px-2
                    py-0.5
                    bg-white
                    border
                    border-[#A0A0A0]
                    text-[10px]
                    md:text-[11px]
                    font-medium
                    text-[#333]
                    cursor-none
                    transition-colors
                    duration-150
                    hover:border-[#0A246A]
                    hover:bg-[#F4F6FC]
                  "
                  title={tech}
                >
                  <span className="whitespace-nowrap">
                    {tech}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DATE */}
        <div className="flex">
          <span className="w-24 shrink-0 text-[#555]">
            Date:
          </span>

          <span className="text-[#333]">
            {project.date}
          </span>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-[#C0C0C0] pt-3" />

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap gap-2">

          {/* GITHUB */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                px-3
                py-1.5
                bg-[#C0C0C0]
                border-2
                border-t-white
                border-l-white
                border-r-[#404040]
                border-b-[#404040]
                text-xs
                font-bold
                text-black
                cursor-none
                transition-all
                duration-100
                hover:bg-[#D6D6D6]
                active:border-t-[#404040]
                active:border-l-[#404040]
                active:border-r-white
                active:border-b-white
                active:translate-x-[1px]
                active:translate-y-[1px]
              "
            >
              GitHub
            </a>
          )}

          {/* LIVE SITE / LIVE DEMO */}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-1.5
                px-3
                py-1.5
                bg-[#0A246A]
                border-2
                border-t-[#5B7CC5]
                border-l-[#5B7CC5]
                border-r-[#06163F]
                border-b-[#06163F]
                text-xs
                font-bold
                text-white
                cursor-none
                transition-all
                duration-100
                hover:bg-[#163A91]
                active:border-t-[#06163F]
                active:border-l-[#06163F]
                active:border-r-[#5B7CC5]
                active:border-b-[#5B7CC5]
                active:translate-x-[1px]
                active:translate-y-[1px]
              "
            >
              <span>
                {project.liveLabel ?? "Live Demo"}
              </span>

              <ExternalLink
                size={12}
                className="
                  transition-transform
                  duration-150
                "
              />
            </a>
          )}

        </div>
      </div>
    </div>
  );
}