"use client";

import { motion } from "framer-motion";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

interface ProjectsProps {
  accentColor: string;
}

export function Projects({ accentColor }: ProjectsProps) {
  return (
    <section id="projects" className="py-16 md:py-24">
      {/* Section label */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-pixel)] tracking-wider uppercase">
          Projects
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

      {/* Projects - one after another */}
      <div className="max-w-3xl mx-auto space-y-5">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-50px",
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
          >
            <ProjectCard
              project={project}
              accentColor={accentColor}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}