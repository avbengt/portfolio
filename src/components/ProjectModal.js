  const ProjectModal = ({ title, children, onClose }) => {
    // Function to close modal when clicking outside of the modal content
    const handleOverlayClick = (e) => {
      if (e.target.id === "modal-overlay") {
        onClose(); // Close modal if the overlay is clicked
      }
    };
  
    return (
      <div
        id="modal-overlay" // Add an ID for the overlay
        className="fixed inset-0 flex items-center justify-center z-50 bg-black/60"
        onClick={handleOverlayClick} // Detect clicks outside modal
      >
        <div className="modal relative p-4 w-full max-w-[1400px] bg-[#1b1b1b] m-[1em] rounded-lg shadow-lg">
          {/* Modal Header */}
          <div className="flex justify-between items-center p-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <button onClick={onClose} className="!cursor-pointer hover:bg-transparent">
                <svg
                    className="w-4 h-4 stroke-current text-gray-400 hover:text-white transition-colors duration-200"
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
          <div className="p-4 space-y-4">{children}</div>
        </div>
      </div>
    );
  };
  
  export default ProjectModal;