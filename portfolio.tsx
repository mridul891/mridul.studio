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

export default function Component() {
  const [activeTab, setActiveTab] = useState("Projects");

  const projects = [
    {
      name: "oss.now",
      description:
        "A place to share your open source projects and find new ones.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Payload CMS",
        "Postgres",
      ],
      githubUrl: "#",
      viewUrl: "#",
    },
    {
      name: "UI Registry",
      description:
        "A simple UI registry for components and blocks using the shadcn api.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      githubUrl: "#",
      viewUrl: "#",
    },
    {
      name: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Payload CMS",
        "Stripe",
      ],
      githubUrl: "#",
      viewUrl: "#",
    },
    {
      name: "Portfolio Website",
      description:
        "A minimalist portfolio website showcasing projects and skills with a clean, responsive design.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "#",
      viewUrl: "#",
    },
    {
      name: "Work Hours Tracker - web",
      description:
        "A collaborative task management web application with real-time updates and team functionality.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Web Sockets",
        "Supabase",
      ],
      githubUrl: "#",
      viewUrl: "#",
    },
  ];

  const experience = [
    {
      name: "UI Registry",
      description:
        "A simple UI registry for components and blocks using the shadcn api.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      githubUrl: "#",
      viewUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white text-sm">
      <div className="max-w-2xl mx-auto px-6 py-12 ">
        {/* Header */}
        <div className="flex items-center justify-between mb-2  ">
          <h1 className="text-2xl font-medium">Hey, I'm Mridul Pandey</h1>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-gray-800"
          >
            <Sun className="h-5 w-5" />
          </Button>
        </div>

        {/* Description */}
        <div className="mb-4">
          <p className="text-gray-300 mb-4">
            Software Engineer from London. Open to work. Contact me below.
            Currently building{" "}
            <span className="text-white font-medium">zero</span> and{" "}
            <span className="text-white font-medium">oss.now</span>.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-gray-400 text-sm">
            <Link href="https://cal.com/crytek/">Cal</Link>
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <Link href="https://github.com/mridul891">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <Link href="https://x.com/work_pandey">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <Link href="https://www.linkedin.com/in/pandeymridul/">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <Link href="mailto:pandeym891@gmail.com">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-8 mb-5 border-b border-gray-800">
          {["Projects", "Experience", "Tools"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-medium transition-colors ${
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
          <div className="space-y-2">
            {projects.map((project, index) => (
              <div key={index} className="group my-4  ">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-medium text-white">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white hover:bg-gray-800 text-xs"
                    >
                      GitHub
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white hover:bg-gray-800 text-xs"
                    >
                      View
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
                <p className="text-gray-300 mb-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs text-gray-400 bg-gray-900 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Placeholder for other tabs */}
        {activeTab === "Experience" && (
          <div className="text-gray-400 ">
            {experience.map((experience, index) => (
              <div key={index} className="group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-medium text-white">
                    {experience.name}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs text-gray-400 bg-gray-900 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Tools" && (
          <div className="text-gray-400">
            <p>Tools content coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
}
