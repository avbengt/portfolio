import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "My Cool Side Project",
    description: "A fun project that showcases my skills.",
    link: "https://example.com",
  },
  {
    title: "Another Awesome Project",
    description: "This project does something really cool.",
    link: "https://example.com",
  },
  {
    title: "Experimental App",
    description: "An innovative idea I'm working on.",
    link: "https://example.com",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-10">
        My Projects
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}