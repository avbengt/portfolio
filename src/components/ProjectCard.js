import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ title, description, image, skills, note = [], leftColumnContent, children }) => {
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

        <h3>
          {note && note.length > 0 && (
            <div className="mb-[10px]">
              <span className="text-sm italic inline bg-[#42a2a6] px-[5px] py-[2px] rounded-sm">{note}</span>
            </div>
          )}
          {title}
        </h3>
        <p>{description}</p>

        {skills.length > 0 && (
          <div>
            <h5 className="font-normal mb-1">Skills and tools used:</h5>
            {skills.map((skill, i) => (
              <span key={i} className="skill">{skill}</span>
            ))}
          </div>
        )}
      </div>

      {isOpen && (
        <ProjectModal
          title={title}
          note={note}
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