export interface Skill {
  name: string;
  color: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      {
        name: "C",
        color: "#A8B9CC",
      },
      {
        name: "Java",
        color: "#ED1D25",
      },
      {
        name: "JavaScript",
        color: "#F7DF1E",
      },
    ],
  },

  {
    name: "Frontend Development",
    skills: [
      {
        name: "HTML5",
        color: "#E34F26",
      },
      {
        name: "CSS3",
        color: "#1572B6",
      },
      {
        name: "React.js",
        color: "#61DAFB",
      },
      {
        name: "Tailwind CSS",
        color: "#06B6D4",
      },
      {
        name: "Next.js",
        color: "#000000",
      },
    ],
  },

  {
    name: "UI/UX & Design",
    skills: [
      {
        name: "Figma",
        color: "#F24E1E",
      },
      {
        name: "Canva",
        color: "#00C4CC",
      },
    ],
  },

  {
    name: "Tools & Backend",
    skills: [
      {
        name: "Git",
        color: "#F05032",
      },
      {
        name: "GitHub",
        color: "#181717",
      },
      {
        name: "VS Code",
        color: "#007ACC",
      },
      {
        name: "Node.js",
        color: "#339933",
      },
      {
        name: "Express.js",
        color: "#000000",
      },
      {
        name: "Firebase",
        color: "#FFCA28",
      },
      {
        name: "Vercel",
        color: "#000000",
      },
      {
        name: "Postman",
        color: "#FF6C37",
      },
    ],
  },
];