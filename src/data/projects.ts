export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  date: string;
  prototype?: string;
  liveDemo?: string;
  liveLabel?: "Live Site" | "Live Demo";
  github?: string;
  rotation?: number;
}

export const projects: Project[] = [
  {
    id: "team-challengers-2026",
    title: "Team Challengers Website 2026",
    description:
      "Designed intuitive UI/UX for a responsive, user-friendly experience and collaborated with developers to bring design concepts to life.",
    techStack: ["Figma"],
    date: "2026",
    prototype: "",
    liveDemo: "https://challengers.sahyadri.edu.in/",
    liveLabel: "Live Site",
    github: "",
    rotation: -1,
  },

  {
    id: "prepverse",
    title: "PrepVerse – Academic Resource Sharing Platform",
    description:
      "Designed the UI/UX and visual identity for an academic resource-sharing platform, including marketing posters and promotional content. Collaborated with developers through Git/GitHub workflows to support 300+ student registrations.",
    techStack: ["Figma"],
    date: "2026",
    prototype: "",
    liveDemo: "https://www.prepverse.live/",
    liveLabel: "Live Site",
    github: "",
    rotation: 1,
  },

  {
    id: "google-ai-chat",
    title: "Google AI Chat",
    description:
      "A conversational AI interface powered by the Google Gemini API with real-time responses, conversation history, and markdown support.",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Google Gemini API",
    ],
    date: "2026",
    prototype: "",
    liveDemo: "",
    liveLabel: "Live Demo",
    github: "https://github.com/Tejal-N/Ai-Chat-Bot",
    rotation: 1,
  },

  {
    id: "movie-ticket-booking",
    title: "Movie Ticket Booking System",
    description:
      "A full-stack movie ticket booking platform with interactive seat selection, temporary seat locking, booking management, and AI-powered movie recommendations.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
    ],
    date: "2026",
    prototype: "",
    liveDemo: "",
    liveLabel: "Live Demo",
    github: "https://github.com/Tejal-N/movie-booking-api",
    rotation: -1,
  },
];