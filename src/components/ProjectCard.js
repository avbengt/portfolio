"use client";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ title, description, image, skills, note = [], leftColumnContent, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      className="cursor-pointer bg-white/5 px-8 py-8 rounded-md backdrop-blur-sm border border-white/10 hover:border-white/20 group"
      variants={cardVariants}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
      transition={{
        scale: { duration: 0.1, ease: "easeOut" },
        boxShadow: { duration: 0.1, ease: "easeOut" }
      }}
    >
      <div className="" onClick={() => setIsOpen(true)}>

        <div className="relative overflow-hidden rounded-md">
          {/* Image */}
          <img src={image} className="rounded-md border-invert w-full transition-all duration-300" alt={`${title} thumbnail`} />
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

      <AnimatePresence>
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
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;