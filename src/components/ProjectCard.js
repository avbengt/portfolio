export default function ProjectCard({ title, description, skills }) {
    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-gray-400 mt-2">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span key={i} className="bg-teal-500 text-white px-2 py-1 rounded text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  }