import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ title, description, image, skills = [], children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/5 px-8 py-8 rounded-md">
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>







<div className="relative">
  {/* Image */}
  <img src={image} className="rounded-md border-invert" alt={`${title} thumbnail`} />

  {/* External Link Icon (Perfectly Round, Positioned in Inverted Corner) */}
  <div className="link-icon absolute bottom-0 right-0 translate-x-3 translate-y-3 w-13 h-13 bg-white/25 hover:bg-white/50 transition text-white rounded-full flex items-center justify-center">
    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4" />
  </div>
</div>




        <h3>{title}</h3>
        <p>{description}</p>

        {skills.length > 0 && (
          <div>
            <h5 className="font-normal mb-1">Skills used:</h5>
            {skills.map((skill, i) => (
              <span key={i} className="skill">{skill}</span>
            ))}
          </div>
        )}
      </div>

      {isOpen && (
        <ProjectModal title={title} onClose={() => setIsOpen(false)}>
          {children}
        </ProjectModal>
      )}
    </div>
  );
};

export default ProjectCard;