"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const myProjects = [
  {
    imagePath: "https://raw.githubusercontent.com/ParadelaPablo/project-images/main/wanderwise.png",
    title: "WanderWise - Travel Planner",
    description:
      "WanderWise is a platform for planning road trips efficiently. It provides users with tools to organize routes, calculate travel costs, and discover new destinations.",
    skills: ["React", "Node.js", "Express", "MongoDB", "CSS", "HTML"],
    links: [
      { label: "GitHub Repo", url: "https://github.com/ParadelaPablo/wanderwise" },
    ],
  },
  {
    imagePath: "https://raw.githubusercontent.com/ParadelaPablo/project-images/main/collabtask.png",
    title: "CollabTask - Task Manager",
    description:
      "CollabTask is a collaborative task management app built with Java and Spring Boot for the backend, and React for the frontend. It allows team members to organize tasks, assign responsibilities, and track progress.",
    skills: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Render",
    ],
    links: [
      { label: "Live Site", url: "https://collabtask-frontend.onrender.com/" },
      { label: "GitHub Repo", url: "https://github.com/ParadelaPablo/task-manager" },
    ],
  },
  {
    imagePath: "https://raw.githubusercontent.com/ParadelaPablo/project-images/main/indracafe.png",
    title: "Indra Cafe - Website",
    description:
      "A minimalist and visually appealing website built for Indra Cafe using only HTML and CSS. It features a clean layout showcasing the cafe's menu, location, and gallery.",
    skills: ["HTML", "CSS"],
    links: [
      { label: "Live Site", url: "https://indracafe.onrender.com/" },
      { label: "GitHub Repo", url: "https://github.com/ParadelaPablo/IndraCafe" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {myProjects.map((project, index) => (
          <Card
            key={index}
            className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
              <Image
                src={project.imagePath}
                alt={`Screenshot of ${project.title}`}
                width={1920}
                height={1080}
                priority
                className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
              />
            </CardHeader>
            <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
              <p className="text-primary font-bold">{project.title}</p>
              <CardDescription className="py-3 text-muted-foreground">
                {project.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {project.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex}>{skill}</Badge>
                ))}
              </CardFooter>
              <CardFooter className="p-0 mt-2 flex flex-wrap gap-2">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
    </section>
  );
}
