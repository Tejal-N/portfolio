export interface TimelineEntry {
  id: string;

  type:
    | "education"
    | "project"
    | "hackathon"
    | "certification"
    | "design";

  title: string;
  subtitle: string;
  date: string;
  cgpa?: string;
  description: string;
  link?: string;
}

export const timelineEntries: TimelineEntry[] = [
  /* =========================
     EDUCATION
  ========================= */

  {
    id: "degree",
    type: "education",
    title: "B.E. in Information Science & Engineering",
    subtitle:
      "Sahyadri College of Engineering & Management (Autonomous)",
    date: "2024 — 2028",
    cgpa: "8.63",
    description:
      "Studying Information Science & Engineering with a focus on software development, web technologies, UI/UX design, and practical project development.",
  },

  /* =========================
     PROJECTS / HACKATHONS
  ========================= */

  {
    id: "sociopsark-2k25",
    type: "project",
    title: "SocioSpark 2K25",
    subtitle: "Hackathon Project",
    date: "2025",
    description:
      "Participated in SocioSpark 2K25 and worked with a team to design and develop an innovative software solution.",
  },

  /* =========================
     CERTIFICATIONS
  ========================= */

  {
    id: "cert-1",
    type: "certification",
    title: "Introduction To Python",
    subtitle: "Infosys Springboard",
    date: "2026",
    description:
      "Completed a course covering Python fundamentals, including control structures, functions, collections, libraries, modules, file handling, and exception handling.",
    link: "PASTE_PYTHON_CERTIFICATE_LINK_HERE",
  },

  {
    id: "cert-2",
    type: "certification",
    title:
      "Linux: Processes & System Resource Management for DevOps",
    subtitle: "Coursera",
    date: "2026",
    description:
      "Completed a course focused on Linux processes, system resource management, and concepts relevant to DevOps environments.",
    link: "PASTE_LINUX_CERTIFICATE_LINK_HERE",
  },

  {
    id: "cert-3",
    type: "certification",
    title: "Software Engineering",
    subtitle: "Infosys Springboard",
    date: "2026",
    description:
      "Completed a certification covering fundamental software engineering concepts, development practices, and the software development lifecycle.",
    link: "PASTE_SOFTWARE_ENGINEERING_CERTIFICATE_LINK_HERE",
  },

  {
    id: "cert-4",
    type: "certification",
    title: "Programming Using Java",
    subtitle: "Infosys Springboard",
    date: "2026",
    description:
      "Completed a certification focused on Java programming fundamentals, object-oriented programming, and core programming concepts.",
    link: "PASTE_JAVA_CERTIFICATE_LINK_HERE",
  },

  {
    id: "cert-5",
    type: "certification",
    title: "Mastering IoT with Arduino",
    subtitle: "TechA",
    date: "2026",
    description:
      "Completed a certification covering Arduino-based IoT concepts, hardware components, sensor integration, programming, and building connected IoT applications.",
    link: "PASTE_IOT_CERTIFICATE_LINK_HERE",
  },

  /* =========================
     DESIGNS
  ========================= */

];