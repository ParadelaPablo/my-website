"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [

  {
    timeline: "Sep 2024 — Dec 2024",
    currentPosition: "Full Stack Java Developer",
    place: "SALT - School of Applied Technology",
    previousPositions: [""],
    description:
      "Successfully completed an intensive Full Stack Java Developer bootcamp, mastering technologies such as Java, Spring Boot, PostgreSQL, and RESTful APIs for backend development. Developed expertise in frontend technologies, including React, TypeScript, HTML, and CSS, to create dynamic and user-focused applications. Proficient in designing scalable architectures, implementing best practices, and building complete end-to-end solutions in agile environments.",
    skills: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "RESTful APIs",
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "Agile Development",
      "Scalable Architectures",
      "Team Collaboration",
      "Testing & Debugging",
    ],
  },
  {
    timeline: "Oct 2022 — Jun 2024",
    currentPosition: "Front End Developer",
    place: "Coderhouse",
    previousPositions: [""],
    description:
      "Completed comprehensive courses in frontend development, covering essential technologies such as HTML, CSS, JavaScript, and React. Gained expertise in building responsive web designs, implementing interactive user interfaces, and optimizing performance for seamless user experiences. Proficient in leveraging modern frameworks and tools to create visually appealing and functional web applications.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Responsive Design",
      "UI/UX Design",
      "Performance Optimization",
      "Problem-Solving",
      "Testing & Debugging",
      "Version Control (Git)",
      "Team Collaboration",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="studies" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Studies
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12 flex flex-col gap-4">
  <a
    href="/am-resume-2024.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center font-medium leading-tight text-foreground group"
  >
    <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
      View Full Resume
    </span>
    <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
  </a>
  <a
    href="/am-resume-2024.pdf"
    download="Pablo_Paradela_CV.pdf"
    className="inline-flex items-center font-medium leading-tight text-foreground group"
  >
    <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
      Download Full Resume
    </span>
    <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
  </a>
</div>


    </section>
  );
}
