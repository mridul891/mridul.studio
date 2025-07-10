"use client";

import { useState } from "react";
import {
  Sun,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconReact } from "./utils";

export default function Component() {
  const [activeTab, setActiveTab] = useState("Projects");

  const projects = [
    {
      name: "JOTION – AI-POWERED CONTENT AND KNOWLEDGE MANAGEMENT PLATFORM",
      description:
        "Built a secure, AI-powered document platform with real-time collaboration, smart content tools, and structured knowledge management.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Postgres",
        "Prisma",
      ],
      githubUrl: "https://github.com/mridul891/Notion",
      viewUrl: "https://notion-crytek.vercel.app/",
    },
    {
      name: "Landing Page",
      description:
        "A simple ui Landing page for Stay on top of your goals with real-time progress tracking, smart insights, and effortless team collaboration—all in one intuitive platform..",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      githubUrl: "https://github.com/mridul891/LandingPage",
      viewUrl: "https://landing-page-crytek.vercel.app/",
    },
    {
      name: "Portfolio Website",
      description:
        "A minimalist portfolio website showcasing projects and skills with a clean, responsive design.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/mridul891/mridul.studio",
      viewUrl: "https://mridul-studio.vercel.app/",
    },
  ];

  const experience = [
    {
      name: "Lead Full Stack Developer",
      description: "Lead Full Stack Developer at Crezium Creative Agency ",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      instaUrl: "https://www.instagram.com/_crezium/",
    },
  ];

  const icons = [
    {
      name: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "NextJS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "React Router",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",
    },
    {
      name: "Typescript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Go",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    },
    {
      name: "TRPC",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trpc/trpc-original.svg",
    },
    {
      name: "NodeJS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "PostgreSQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "TailwindCSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "GIT",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-black text-white text-xs sm:text-sm">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header and Intro */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <h1 className="text-lg sm:text-xl font-medium">
              Hey, I'm Mridul Pandey
            </h1>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Software Engineer from India. Open to work. Contact me below.
            Currently building{" "}
            {/* <span className="text-white font-medium">zero</span> and{" "} */}
            <span className="text-white font-medium">Crezium</span>.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <span className="text-gray-400 text-xs">
              <Link href="https://cal.com/crytek/">Cal</Link>
            </span>
            {[
              ["https://github.com/mridul891", Github],
              ["https://x.com/work_pandey", Twitter],
              ["https://www.linkedin.com/in/pandeymridul/", Linkedin],
              ["mailto:pandeym891@gmail.com", Mail],
            ].map(([url, Icon], i) => (
              <Button
                key={i}
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Link href={url}>
                  <Icon className="h-4 w-4" />
                </Link>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-6 mb-6 border-b border-gray-800 overflow-x-auto">
          {["Projects", "Tools", "Experience"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-xs sm:text-sm font-medium whitespace-nowrap ${
                activeTab === tab
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects List */}
        {activeTab === "Projects" && (
          <div className="space-y-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                custom={i + 1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-2">
                  <h3 className="text-base font-medium">{project.name}</h3>
                  <div className="flex gap-2">
                    <Link href={project.githubUrl}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white hover:bg-gray-800 text-xs"
                      >
                        GitHub
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </Link>
                    <Link href={project.viewUrl}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white hover:bg-gray-800 text-xs"
                      >
                        View
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <p className="text-gray-300 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, j) => (
                    <span
                      key={j}
                      className="text-[10px] text-gray-400 bg-gray-800 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Experience */}
        {activeTab === "Experience" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="text-gray-400"
          >
            {experience.map((exp, i) => (
              <div key={i} className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-2">
                  <h3 className="text-base font-medium text-white mb-1">
                    {exp.name}{" "}
                  </h3>
                  <div className="flex gap-2">
                    <Link href={exp.instaUrl}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white hover:bg-gray-800 text-xs"
                      >
                        Insta
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <p className="mb-2">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, j) => (
                    <span
                      key={j}
                      className="text-[10px] text-gray-400 bg-gray-800 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tools Placeholder */}
        {activeTab === "Tools" && (
          <section className="mb-12">
            <motion.div
              className="flex flex-wrap gap-y-6 gap-x-4 justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {icons.map((tech, i) => (
                <motion.div
                  key={i}
                  className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]"
                  variants={itemVariants}
                >
                  <div className="flex flex-col items-center group">
                    <div className="relative h-7 w-7 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                      <img
                        alt={`${tech.name} logo`}
                        loading="eager"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain drop-shadow-md"
                        src={tech.src}
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}
      </div>
    </div>
  );
}
