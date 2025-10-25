// import { X } from "lucide-react";

// const VideoModal = ({ isOpen, onClose, videoUrl }) => {
//   if (!isOpen) return null;

//   return (
//     <div 
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn" 
//       onClick={onClose}
//     >
//       <div 
//         className="relative w-full max-w-4xl mx-4 animate-scaleIn" 
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button 
//           onClick={onClose} 
//           className="absolute -top-12 right-0 p-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors shadow-lg"
//         >
//           <X className="w-6 h-6" />
//         </button>
//         <div 
//           className="relative bg-black rounded-lg overflow-hidden shadow-2xl border-4 border-amber-600" 
//           style={{ paddingBottom: '56.25%' }}
//         >
//           <iframe
//             src={videoUrl}
//             className="absolute inset-0 w-full h-full"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             title="Project Demo Video"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoModal;





import { X } from "lucide-react";

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center animate-fadeIn" 
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl mx-4 animate-scaleIn" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute -top-12 right-0 p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <div 
          className="relative bg-black rounded-lg overflow-hidden shadow-2xl" 
          style={{ paddingBottom: '56.25%' }}
        >
          <iframe
            src={videoUrl}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video Player"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;