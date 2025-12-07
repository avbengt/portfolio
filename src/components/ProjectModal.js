"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const ProjectModal = ({ title, note, leftColumnContent, children, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = ""; // Reset on close
    };
  }, []);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  // Use portal to render modal at body level
  const modalContent = (
    <motion.div
      id="modal-overlay"
      className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/60 xl:p-4"
      onClick={handleOverlayClick}
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Modal Container - This Scrolls */}
      <motion.div
        className="modal relative w-full max-w-[1400px] h-full bg-[#1b1b1b] rounded-lg shadow-lg overflow-y-auto scrollbar-custom"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >

        {/* Sticky Close Button */}
        <div className="sticky top-0 left-0 right-0 flex justify-end h-[70px] bg-[#1b1b1b] z-50">
          <motion.button
            onClick={onClose}
            className="w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-gray-700 group"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="w-4 h-4 stroke-current text-gray-400 group-hover:text-white transition-colors duration-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </motion.button>
        </div>

        {/* Modal Content */}
        <div className="p-16 pt-0">
          <div className="relative flex flex-col xl:flex-row gap-6 h-full">

            {/* Left Column (Fixed Position, Never Moves) */}
            <div className="xl:sticky top-[70px] w-full xl:w-2/5 xl:pe-6 pt-0 h-auto xl:h-full overflow-hidden">
              {note && note.length > 0 && (
                <div className="mb-[5px]">
                  <span className="text-base font-bold italic inline bg-[#5052b5] px-[5px] py-[2px] rounded-sm">{note}</span>
                </div>
              )}
              <h2 className="mt-0!">{title}</h2>
              <div>{leftColumnContent}</div>
            </div>

            {/* Right Column (Scrollable) */}
            <div className="w-full xl:w-3/5 xl:ps-6 pt-6 overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  // Render modal using portal to body
  if (typeof window === "undefined") return null;
  return createPortal(modalContent, document.body);
};

export default ProjectModal;