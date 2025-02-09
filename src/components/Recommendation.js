export default function ProjectCard({ title, description, link }) {
    return (
      <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-600 my-3">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 transition-colors duration-300"
        >
          View Project →
        </a>
      </div>
    );
  }