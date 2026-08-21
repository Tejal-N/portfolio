"use client";

import { useState, useCallback } from "react";
import { MenuBar } from "@/components/MenuBar";
import { Toolbar } from "@/components/Toolbar";
import { Canvas } from "@/components/Canvas";
import { ColorPalette } from "@/components/ColorPalette";
import { Toast } from "@/components/Toast";

export type PaintTool =
  | "select"
  | "pencil"
  | "brush"
  | "eraser"
  | "fill"
  | "text"
  | "line"
  | "rectangle"
  | "circle"
  | "picker";

export function PaintWindow() {
  const [activeTool, setActiveTool] =
    useState<PaintTool>("pencil");

  // Primary / signature color
  const [accentColor, setAccentColor] =
    useState("#2DD4BF");

  const [toastMessage, setToastMessage] =
    useState<string | null>(null);

  /*
   * =========================================================
   * TOAST
   * =========================================================
   */

  const showToast = useCallback((message: string) => {
    setToastMessage(message);

    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  }, []);

  /*
   * =========================================================
   * COLOR CHANGE
   * =========================================================
   */

  const handleColorChange = useCallback(
    (color: string) => {
      setAccentColor(color);

      document.documentElement.style.setProperty(
        "--accent-color",
        color
      );

      showToast(`Color set to ${color}`);
    },
    [showToast]
  );

  /*
   * =========================================================
   * TOOL CHANGE
   * =========================================================
   */

  const handleToolChange = useCallback(
    (tool: PaintTool) => {
      setActiveTool(tool);

      showToast(
        `${tool.charAt(0).toUpperCase() + tool.slice(1)} selected`
      );
    },
    [showToast]
  );

  /*
   * =========================================================
   * NAVIGATION
   * =========================================================
   */

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const el =
        document.getElementById(sectionId);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
    []
  );

  /*
   * =========================================================
   * RENDER
   * =========================================================
   */

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      {/* Window border wrapper */}
      <div className="flex flex-col flex-1 paint-window-border m-1 overflow-hidden">

        {/* =====================================================
            TITLE BAR
        ====================================================== */}

        <div className="paint-title-bar">
          <div className="flex items-center gap-1.5">
            <PaintIcon />

            <span className="text-xs tracking-wide">
              Portfolio - Paint
            </span>
          </div>

          <div className="flex gap-0.5">
            <WindowButton label="Minimize">
              ─
            </WindowButton>

            <WindowButton label="Maximize">
              □
            </WindowButton>

            <WindowButton
              label="Close"
              isClose
            >
              ×
            </WindowButton>
          </div>
        </div>

        {/* =====================================================
            MENU BAR
        ====================================================== */}

        <MenuBar
          onNavigate={scrollToSection}
          onSave={() =>
            showToast(
              "Portfolio saved successfully ✓"
            )
          }
          onNew={() =>
            showToast(
              "Starting fresh canvas..."
            )
          }
        />

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="flex flex-1 overflow-hidden">

          {/* Desktop toolbar */}
          <div className="hidden md:block">
            <Toolbar
              activeTool={activeTool}
              onToolChange={handleToolChange}
            />
          </div>

          {/* Canvas */}
          <Canvas
            activeTool={activeTool}
            accentColor={accentColor}
          />
        </div>

        {/* =====================================================
            MOBILE TOOLBAR
        ====================================================== */}

        <div className="block md:hidden">
          <Toolbar
            activeTool={activeTool}
            onToolChange={handleToolChange}
            horizontal
          />
        </div>

        {/* =====================================================
            COLOR PALETTE + STATUS BAR
        ====================================================== */}

        <ColorPalette
          accentColor={accentColor}
          onColorChange={handleColorChange}
          activeTool={activeTool}
        />
      </div>

      {/* =======================================================
          TOAST
      ======================================================== */}

      {toastMessage && (
        <Toast message={toastMessage} />
      )}
    </div>
  );
}

/*
 * =============================================================
 * PAINT ICON
 * =============================================================
 */

function PaintIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="12"
        height="12"
        fill="#FFFFFF"
        stroke="#000"
        strokeWidth="1"
      />

      {/* Signature Teal */}
      <rect
        x="4"
        y="8"
        width="3"
        height="3"
        fill="#2DD4BF"
      />

      {/* Secondary Cyan */}
      <rect
        x="7"
        y="6"
        width="3"
        height="3"
        fill="#06B6D4"
      />

      {/* Yellow */}
      <rect
        x="5"
        y="4"
        width="3"
        height="3"
        fill="#FFF200"
      />
    </svg>
  );
}

/*
 * =============================================================
 * WINDOW BUTTON
 * =============================================================
 */

function WindowButton({
  children,
  label,
  isClose = false,
}: {
  children: React.ReactNode;
  label: string;
  isClose?: boolean;
}) {
  return (
    <button
      className={`paint-bevel w-5 h-4 flex items-center justify-center text-xs leading-none font-bold ${
        isClose
          ? "hover:bg-red-500 hover:text-white"
          : ""
      }`}
      aria-label={label}
      tabIndex={-1}
    >
      {children}
    </button>
  );
}