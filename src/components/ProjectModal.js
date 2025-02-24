import { useEffect } from "react";
const ProjectModal = ({ title, leftColumnContent, children, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = ""; // Reset on close
    };
  }, []);

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 xl:p-4"
      onClick={handleOverlayClick}
    >
      {/* Modal Container - This Scrolls */}
      <div className="modal relative w-full max-w-[1400px] h-full bg-[#1b1b1b] rounded-lg shadow-lg overflow-y-auto scrollbar-custom">
        
        {/* Sticky Close Button */}
        <div className="sticky top-0 left-0 right-0 flex justify-end h-[70px] bg-[#1b1b1b] z-50">
          <button 
            onClick={onClose} 
            className="w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-gray-700 group"
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
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-16 pt-0">
        <div className="relative flex flex-col xl:flex-row gap-6 h-full">
          
          {/* Left Column (Fixed Position, Never Moves) */}
          <div className="xl:sticky top-[70px] w-full xl:w-2/5 xl:pe-6 pt-0 h-auto xl:h-full overflow-hidden">
            <h2 className="mt-0">{title}</h2>
            <div>{leftColumnContent}</div>
          </div>

          {/* Right Column (Scrollable) */}
          <div className="w-full xl:w-3/5 xl:ps-6 pt-6 overflow-y-auto">
            {children}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;