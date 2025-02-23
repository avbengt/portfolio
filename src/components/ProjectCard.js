import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ title, description, image, skills = [], leftColumnContent, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/5 px-8 py-8 rounded-md">
      <div className="cursor-pointer group" onClick={() => setIsOpen(true)}>

        <div className="relative">
          {/* Image */}
          <img src={image} className="rounded-md border-invert" alt={`${title} thumbnail`} />
          <div className="link-icon absolute bottom-0 right-0 w-10 h-10 bg-white/25 group-hover:bg-white/35 transition text-white rounded-tl-[20px] rounded-tr-[.375rem]  rounded-br-[.375rem] rounded-bl-[.375rem] flex items-center justify-center">
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
          <ProjectModal 
          title={title} 
          leftColumnContent={leftColumnContent} 
          onClose={() => setIsOpen(false)}
          >
            {children}
          </ProjectModal>
        )}
    </div>
  );
};

export default ProjectCard;