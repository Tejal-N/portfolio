"use client";

import { useEffect, useState } from "react";
import { timelineEntries } from "@/data/experience";
import { Folder, X, Minus, Square } from "lucide-react";

interface ExperienceProps {
  accentColor: string;
}

type FolderType =
  | "education"
  | "projects"
  | "certifications"
  | "designs";

interface FolderConfig {
  id: FolderType;
  name: string;
  type: string;
  color: string;
}

const folders: FolderConfig[] = [
  {
    id: "education",
    name: "Education",
    type: "education",
    color: "#3F48CC",
  },
  {
    id: "projects",
    name: "Projects",
    type: "project",
    color: "#00A2A8",
  },
  {
    id: "certifications",
    name: "Certifications",
    type: "certification",
    color: "#A349A4",
  },
  {
    id: "designs",
    name: "Designs",
    type: "design",
    color: "#FF7F27",
  },
];

export function Experience({ accentColor }: ExperienceProps) {
  const [openFolder, setOpenFolder] =
    useState<FolderType | null>(null);

  const [selectedFolder, setSelectedFolder] =
    useState<FolderType | null>(null);

  const [currentTime, setCurrentTime] = useState("");

  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  const [showCustomCursor, setShowCustomCursor] =
    useState(false);

  /*
   * Clock
   */

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  /*
   * Current folder
   */

  const currentFolder = folders.find(
    (folder) => folder.id === openFolder
  );

  const currentEntries = currentFolder
    ? timelineEntries.filter(
        (entry) => entry.type === currentFolder.type
      )
    : [];

  /*
   * Open folder
   */

  const openFolderWindow = (folder: FolderType) => {
    setSelectedFolder(folder);
    setOpenFolder(folder);
  };

  /*
   * Close folder
   */

  const closeWindow = () => {
    setOpenFolder(null);
  };

  /*
   * Custom cursor
   *
   * The position is calculated relative to the
   * entire Windows desktop container.
   */

  const handleDesktopMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="experience" className="py-16 md:py-24">
      {/* =========================================
          SECTION TITLE
      ========================================== */}

      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-pixel)] tracking-wider uppercase">
          Projects &amp; Experience
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
      </div>

      {/* =========================================
          WINDOWS DESKTOP
      ========================================== */}

      <div
        className="
          relative
          w-full
          min-h-[600px]
          md:min-h-[650px]
          overflow-hidden
          border-[4px]
          border-[#1A1A1A]
          shadow-[4px_4px_0_#000000]
          bg-cover
          bg-center
          bg-no-repeat
          cursor-none
        "
        style={{
          backgroundImage: "url('/windows.jpg')",
        }}
        onMouseEnter={() => setShowCustomCursor(true)}
        onMouseLeave={() => setShowCustomCursor(false)}
        onMouseMove={handleDesktopMouseMove}
      >
        {/* =========================================
            CUSTOM SVG CURSOR
        ========================================== */}

        {showCustomCursor && (
          <img
            src="/cursor.svg"
            alt=""
            draggable={false}
            className="
              absolute
              pointer-events-none
              z-[9999]
              w-8
              h-8
              object-contain
            "
            style={{
              left: cursorPosition.x,
              top: cursorPosition.y,
            }}
          />
        )}

        {/* =========================================
            DESKTOP OVERLAY
        ========================================== */}

        <div
          className="
            absolute
            inset-0
            pointer-events-none
            bg-black/5
          "
        />

        {/* =========================================
            DESKTOP ICONS
        ========================================== */}

        <div
          className="
            relative
            z-10
            grid
            grid-cols-2
            sm:grid-cols-4
            md:flex
            md:flex-col
            gap-6
            md:gap-8
            p-5
            md:p-6
            w-fit
          "
        >
          {folders.map((folder) => {
            const isSelected =
              selectedFolder === folder.id;

            return (
              <button
                key={folder.id}
                type="button"
                onClick={() =>
                  openFolderWindow(folder.id)
                }
                className={`
                  group
                  w-24
                  md:w-28
                  flex
                  flex-col
                  items-center
                  gap-2
                  p-1
                  cursor-none
                  select-none
                  ${
                    isSelected
                      ? "bg-[#0A246A]/60 outline outline-1 outline-dotted outline-white"
                      : "hover:bg-[#0A246A]/40"
                  }
                `}
              >
                {/* Folder Icon */}

                <div className="relative flex items-center justify-center">
                  <Folder
                    size={52}
                    strokeWidth={1.2}
                    fill="#F7C948"
                    color="#A87500"
                    className="
                      transition-transform
                      duration-100
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Folder Label */}

                <span
                  className="
                    text-sm
                    md:text-base
                    text-white
                    font-[family-name:var(--font-pixel)]
                    leading-tight
                    text-center
                    px-1
                  "
                >
                  {folder.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* =========================================
            OPEN FOLDER WINDOW
        ========================================== */}

        {openFolder && currentFolder && (
          <div
            className="
              absolute
              z-30
              left-4
              right-4
              top-24
              bottom-20
              md:left-[190px]
              md:right-10
              md:top-10
              md:bottom-16
              flex
              flex-col
              bg-[#C0C0C0]
              border-[4px]
              border-t-[#FFFFFF]
              border-l-[#FFFFFF]
              border-r-[#404040]
              border-b-[#404040]
              shadow-[5px_5px_0_rgba(0,0,0,0.55)]
              cursor-none
            "
          >
            {/* =====================================
                TITLE BAR
            ====================================== */}

            <div
              className="
                flex
                items-center
                justify-between
                px-1
                py-1
                text-white
                text-xs
                md:text-sm
                font-bold
                flex-shrink-0
              "
              style={{
                background: "#0A246A",
              }}
            >
              <div className="flex items-center gap-2">
                <Folder
                  size={15}
                  fill="#F7C948"
                  color="#A87500"
                />

                <span>{currentFolder.name}</span>
              </div>

              <div className="flex gap-1">
                {/* Minimize */}

                <button
                  type="button"
                  className="
                    w-5
                    h-4
                    bg-[#C0C0C0]
                    text-black
                    border
                    border-t-white
                    border-l-white
                    border-r-[#404040]
                    border-b-[#404040]
                    flex
                    items-center
                    justify-center
                    text-[10px]
                    font-bold
                    active:border-t-[#404040]
                    active:border-l-[#404040]
                    cursor-none
                  "
                  aria-label="Minimize"
                >
                  <Minus size={10} />
                </button>

                {/* Maximize */}

                <button
                  type="button"
                  className="
                    w-5
                    h-4
                    bg-[#C0C0C0]
                    text-black
                    border
                    border-t-white
                    border-l-white
                    border-r-[#404040]
                    border-b-[#404040]
                    flex
                    items-center
                    justify-center
                    text-[9px]
                    font-bold
                    cursor-none
                  "
                  aria-label="Maximize"
                >
                  <Square size={9} />
                </button>

                {/* Close */}

                <button
                  type="button"
                  onClick={closeWindow}
                  className="
                    w-5
                    h-4
                    bg-[#C0C0C0]
                    text-black
                    border
                    border-t-white
                    border-l-white
                    border-r-[#404040]
                    border-b-[#404040]
                    flex
                    items-center
                    justify-center
                    text-[10px]
                    font-bold
                    hover:bg-[#D6D6D6]
                    active:border-t-[#404040]
                    active:border-l-[#404040]
                    cursor-none
                  "
                  aria-label="Close"
                >
                  <X size={11} />
                </button>
              </div>
            </div>

            {/* =====================================
                MENU BAR
            ====================================== */}

            <div
              className="
                flex
                items-center
                gap-5
                px-2
                py-1
                bg-[#ECE9D8]
                border-b
                border-[#808080]
                text-xs
                text-black
                flex-shrink-0
              "
            >
              <span>File</span>
              <span>Edit</span>
              <span>View</span>
              <span>Help</span>
            </div>

            {/* =====================================
                ADDRESS BAR
            ====================================== */}

            <div
              className="
                flex
                items-center
                gap-2
                p-1
                bg-[#ECE9D8]
                border-b
                border-[#808080]
                flex-shrink-0
              "
            >
              <span className="text-[10px] text-[#555]">
                Address
              </span>

              <div
                className="
                  flex-1
                  h-5
                  bg-white
                  border
                  border-[#808080]
                  px-2
                  flex
                  items-center
                  text-[10px]
                  text-[#333]
                  overflow-hidden
                  whitespace-nowrap
                "
              >
                C:\TEJAL\PORTFOLIO\
                {currentFolder.name.toUpperCase()}
              </div>

              <button
                type="button"
                className="
                  w-6
                  h-5
                  bg-[#C0C0C0]
                  border
                  border-t-white
                  border-l-white
                  border-r-[#404040]
                  border-b-[#404040]
                  flex
                  items-center
                  justify-center
                  text-black
                  cursor-none
                "
              >
                ↻
              </button>
            </div>

            {/* =====================================
                FOLDER DETAILS
            ====================================== */}

            <div
              className="
                flex-1
                min-h-0
                m-1
                bg-white
                border-2
                border-t-[#808080]
                border-l-[#808080]
                border-r-white
                border-b-white
                overflow-y-auto
                p-4
              "
            >
              {currentEntries.length > 0 ? (
                <div className="space-y-3">
                  {currentEntries.map((entry) => (
                    <div
                      key={entry.id}
                      className="
                        bg-[#ECE9D8]
                        border-2
                        border-t-white
                        border-l-white
                        border-r-[#808080]
                        border-b-[#808080]
                        p-3
                        text-black
                        cursor-none
                      "
                    >
                      {/* File Header */}

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
                          size={20}
                          fill="#F7C948"
                          color="#A87500"
                        />

                        <span className="text-sm font-bold">
                          {entry.title}
                        </span>
                      </div>

                      {/* Details */}

                      <div className="text-xs md:text-sm space-y-2">
                        <div className="flex">
                          <span className="w-24 text-[#555]">
                            Type:
                          </span>

                          <span className="font-bold">
                            {entry.subtitle}
                          </span>
                        </div>

                        <div className="flex">
                          <span className="w-24 text-[#555]">
                            Date:
                          </span>

                          <span>{entry.date}</span>
                        </div>

                        {/* CGPA */}

                        {"cgpa" in entry &&
                          entry.cgpa && (
                            <div className="flex">
                              <span className="w-24 text-[#555]">
                                CGPA:
                              </span>

                              <span className="font-bold">
                                {entry.cgpa}
                              </span>
                            </div>
                          )}

                        <div
                          className="
                            mt-3
                            pt-2
                            border-t
                            border-[#C0C0C0]
                            text-[#333]
                            leading-relaxed
                          "
                        >
                          {entry.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className="
                    min-h-full
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    text-black
                  "
                >
                  <Folder
                    size={48}
                    fill="#F7C948"
                    color="#A87500"
                    className="mb-3"
                  />

                  <p className="text-sm font-bold">
                    This folder is empty.
                  </p>

                  <p className="text-xs text-[#666] mt-1">
                    More things coming soon...
                  </p>
                </div>
              )}
            </div>

            {/* =====================================
                STATUS BAR
            ====================================== */}

            <div
              className="
                h-6
                bg-[#ECE9D8]
                border-t
                border-[#808080]
                flex
                items-center
                justify-between
                px-2
                text-[10px]
                text-[#555]
                flex-shrink-0
              "
            >
              <span>
                {currentEntries.length} item
                {currentEntries.length !== 1 ? "s" : ""}
              </span>

              <span>Ready</span>
            </div>
          </div>
        )}

        {/* =========================================
            TASKBAR
        ========================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-40
            h-10
            bg-[#C0C0C0]
            border-t-2
            border-t-white
            flex
            items-center
            gap-1
            px-1
          "
        >
          {/* Start */}

          <button
            type="button"
            className="
              h-7
              px-3
              bg-[#C0C0C0]
              border-2
              border-t-white
              border-l-white
              border-r-[#404040]
              border-b-[#404040]
              text-xs
              font-bold
              flex
              items-center
              gap-1
              text-black
              active:border-t-[#404040]
              active:border-l-[#404040]
              cursor-none
            "
          >
            <span className="font-bold italic">
              Start
            </span>
          </button>

          {/* Active Window */}

          {openFolder && currentFolder && (
            <button
              type="button"
              onClick={closeWindow}
              className="
                h-7
                max-w-[180px]
                px-3
                bg-[#B0B0B0]
                border-2
                border-t-[#404040]
                border-l-[#404040]
                border-r-white
                border-b-white
                text-[10px]
                md:text-xs
                text-black
                flex
                items-center
                gap-2
                cursor-none
              "
            >
              <Folder
                size={13}
                fill="#F7C948"
                color="#A87500"
              />

              <span className="truncate">
                {currentFolder.name}
              </span>
            </button>
          )}

          {/* Spacer */}

          <div className="flex-1" />

          {/* Clock */}

          <div
            className="
              h-7
              px-3
              flex
              items-center
              border-2
              border-t-[#808080]
              border-l-[#808080]
              border-r-white
              border-b-white
              text-[10px]
              md:text-xs
              text-black
              cursor-none
            "
          >
            {currentTime}
          </div>
        </div>
      </div>
    </section>
  );
}