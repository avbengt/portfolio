import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Parallels Desktop for Mac",
    description: "Revamped product pages to match Apple's aesthetic with Bootstrap & lazy-loading images.",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    title: "Useful Sandboxes",
    description: "A collection of useful front-end coding sandboxes.",
    skills: ["React", "Tailwind", "Next.js"],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-5xl font-bold text-center text-white mb-10">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}