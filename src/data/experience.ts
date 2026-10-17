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
  percentage?: string;
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

  {
    id: "12th",
    type: "education",
    title: "12th Standard",
    subtitle: "BOSCOSS Pre-University College, Mangalore",
    date: "2022 — 2024",
    percentage: "91.5%",
    description:
      "Completed 11th and 12th with a focus on Physics, Chemistry, Mathematics, and Statistics.",
  },

  {
    id: "10th",
    type: "education",
    title: "10th Standard",
    subtitle: "St. Theresa's ICSE School, Mangalore",
    date: "2010 — 2022",
    percentage: "86.4%",
    description:
      "Completed 12 years of schooling under the ICSE curriculum with a strong academic foundation and holistic learning experience.",
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
    link: "/certificates/TEJAL_IntroductiontoPython.pdf",
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
    link: "/certificates/TEJAL_OSLinux.pdf",
  },

  {
    id: "cert-3",
    type: "certification",
    title: "Software Engineering",
    subtitle: "Infosys Springboard",
    date: "2026",
    description:
      "Completed a certification covering fundamental software engineering concepts, development practices, and the software development lifecycle.",
    link: "/certificates/TEJAL_SoftwareEngineering.pdf",
  },

  {
    id: "cert-4",
    type: "certification",
    title: "Programming Using Java",
    subtitle: "Infosys Springboard",
    date: "2026",
    description:
      "Completed a certification focused on Java programming fundamentals, object-oriented programming, and core programming concepts.",
    link: "/certificates/TEJAL_ProgrammingUsingJAVA.pdf",
  },

  {
    id: "cert-5",
    type: "certification",
    title: "Mastering IoT with Arduino",
    subtitle: "TechA",
    date: "2026",
    description:
      "Completed a certification covering Arduino-based IoT concepts, hardware components, sensor integration, programming, and building connected IoT applications.",
    link: "/certificates/TEJAL_MasteringIoTwithArduino.pdf",
  },

];