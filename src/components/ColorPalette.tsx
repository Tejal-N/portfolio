"use client";

import type { PaintTool } from "@/components/PaintWindow";

const PALETTE_COLORS = [
  "#000000",
  "#808080",
  "#880015",
  "#ED1C24",
  "#FF7F27",
  "#FFF200",
  "#22B14C",
  "#2DD4BF",
  "#3F48CC",
  "#A349A4",
  "#FFFFFF",
  "#C3C3C3",
  "#B97A57",
  "#FFAEC9",
  "#FFC90E",
  "#EFE4B0",
  "#B5E61D",
  "#99D9EA",
  "#7092BE",
  "#C8BFE7",
];

interface ColorPaletteProps {
  accentColor: string;
  onColorChange: (color: string) => void;
  activeTool: PaintTool;
}

export function ColorPalette({
  accentColor,
  onColorChange,
  activeTool,
}: ColorPaletteProps) {
  return (
    <div
      className="
        paint-bevel
        flex
        items-center
        gap-4
        px-3
        py-2
        min-h-[52px]
      "
      role="toolbar"
      aria-label="Color palette"
    >
      {/* Foreground / Background color indicator */}
      <div
        className="relative w-10 h-10 flex-shrink-0"
        aria-label="Active colors"
      >
        {/* Background color */}
        <div
          className="
            absolute
            bottom-0
            right-0
            w-7
            h-7
            border-2
            border-[#808080]
          "
          style={{ background: "#FFFFFF" }}
          title="Background color"
        />

        {/* Foreground color */}
        <div
          className="
            absolute
            top-0
            left-0
            w-7
            h-7
            border-2
            border-[#808080]
            z-10
          "
          style={{ background: accentColor }}
          title="Foreground color"
        />
      </div>

      {/* Divider */}
      <div className="w-px h-9 bg-[#808080]" />

      {/* Color swatches */}
      <div
        className="
          grid
          grid-rows-2
          grid-flow-col
          gap-1.5
        "
        role="radiogroup"
        aria-label="Color swatches"
      >
        {PALETTE_COLORS.map((color) => {
          const isSelected = accentColor === color;

          return (
            <button
              key={color}
              type="button"
              role="radio"
              aria-checked={isSelected}
              aria-label={`Select color ${color}`}
              title={color}
              onClick={() => onColorChange(color)}
              className={`
                relative
                w-6
                h-6
                cursor-pointer
                border
                transition-[transform,box-shadow,border-color]
                duration-200
                ease-out

                ${
                  isSelected
                    ? `
                      border-[#404040]
                      shadow-[0_0_0_2px_#FFFFFF,0_0_0_3px_#808080]
                    `
                    : `
                      border-[#808080]
                      hover:-translate-y-[1px]
                      hover:shadow-[1px_2px_0_rgba(0,0,0,0.22)]
                    `
                }

                active:translate-y-0
                active:shadow-none
              `}
              style={{
                backgroundColor: color,
              }}
            />
          );
        })}
      </div>

      {/* Status text */}
      <div
        className="
          ml-auto
          flex
          items-center
          gap-5
          text-sm
          font-[family-name:var(--font-pixel)]
          text-[#000]
          select-none
        "
      >
        <span className="hidden sm:inline opacity-60">
          Tool:{" "}
          {activeTool.charAt(0).toUpperCase() +
            activeTool.slice(1)}
        </span>

        <span className="hidden md:inline opacity-40">
          Canvas: 1024 × 768
        </span>
      </div>
    </div>
  );
}