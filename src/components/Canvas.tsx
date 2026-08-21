"use client";

import type { PaintTool } from "@/components/PaintWindow";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

interface CanvasProps {
  activeTool: PaintTool;
  accentColor: string;
}

export function Canvas({ activeTool, accentColor }: CanvasProps) {
  const cursorClass =
    activeTool === "pencil"
      ? "cursor-crosshair"
      : activeTool === "eraser"
        ? "cursor-cell"
        : activeTool === "text"
          ? "cursor-text"
          : activeTool === "picker"
            ? "cursor-crosshair"
            : activeTool === "fill"
              ? "cursor-pointer"
              : "";

  return (
    <main
      className={`flex-1 paint-inset overflow-y-auto overflow-x-hidden bg-white ${cursorClass}`}
      role="main"
      aria-label="Portfolio canvas"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8">

        {/* Home */}
        <Hero accentColor={accentColor} />

        {/* About Me */}
        <About accentColor={accentColor} />


        {/* Skills */}
        <Skills accentColor={accentColor} />

        {/* Experience */}
        <Experience accentColor={accentColor} />

        {/* Contact */}
        <Contact accentColor={accentColor} />

      </div>
    </main>
  );
}