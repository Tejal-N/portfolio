"use client";

import type { PaintTool } from "@/components/PaintWindow";
import {
  MousePointer2,
  Pencil,
  Paintbrush,
  Eraser,
  PaintBucket,
  Type,
  Minus,
  Square,
  Circle,
  Pipette,
} from "lucide-react";

interface ToolbarProps {
  activeTool: PaintTool;
  onToolChange: (tool: PaintTool) => void;
  horizontal?: boolean;
}

const tools: { id: PaintTool; icon: React.ElementType; label: string }[] = [
  { id: "select", icon: MousePointer2, label: "Select" },
  { id: "pencil", icon: Pencil, label: "Pencil" },
  { id: "brush", icon: Paintbrush, label: "Brush" },
  { id: "eraser", icon: Eraser, label: "Eraser" },
  { id: "fill", icon: PaintBucket, label: "Fill with Color" },
  { id: "text", icon: Type, label: "Text" },
  { id: "line", icon: Minus, label: "Line" },
  { id: "rectangle", icon: Square, label: "Rectangle" },
  { id: "circle", icon: Circle, label: "Circle" },
  { id: "picker", icon: Pipette, label: "Pick Color" },
];

export function Toolbar({ activeTool, onToolChange, horizontal }: ToolbarProps) {
  if (horizontal) {
    return (
      <div
        className="paint-toolbar flex items-center gap-0.5 px-2 py-1 border-t border-t-[#808080] border-r-0 overflow-x-auto"
        role="toolbar"
        aria-label="Drawing tools"
      >
        {tools.map((tool) => (
          <ToolButton
            key={tool.id}
            tool={tool}
            isActive={activeTool === tool.id}
            onClick={() => onToolChange(tool.id)}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className="paint-toolbar flex flex-col items-center gap-0.5 p-1 w-[54px] min-w-[54px]"
      role="toolbar"
      aria-label="Drawing tools"
    >
      <div className="paint-inset p-1 flex flex-col gap-0.5">
        {tools.map((tool) => (
          <ToolButton
            key={tool.id}
            tool={tool}
            isActive={activeTool === tool.id}
            onClick={() => onToolChange(tool.id)}
          />
        ))}
      </div>
    </div>
  );
}

function ToolButton({
  tool,
  isActive,
  onClick,
}: {
  tool: (typeof tools)[number];
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = tool.icon;
  return (
    <button
      className={`paint-tool-btn ${isActive ? "active" : ""}`}
      onClick={onClick}
      aria-label={tool.label}
      aria-pressed={isActive}
      title={tool.label}
    >
      <Icon size={16} strokeWidth={1.5} />
    </button>
  );
}
