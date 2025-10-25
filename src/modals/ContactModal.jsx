// import { useState } from "react";
// import { X } from "lucide-react";

// const ContactModal = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   if (!isOpen) return null;

//   const handleSubmit = () => {};

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/5 backdrop-blur-sm animate-fadeIn"
//       onClick={onClose}
//     >
//       <div
//         className="relative w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl animate-scaleIn"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="absolute -top-12 right-0 p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
//         >
//           <X className="w-6 h-6" />
//         </button>
//         <form onSubmit={handleSubmit} className="">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               required
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//               className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               required
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//               Message
//             </label>
//             <textarea
//               required
//               rows="4"
//               value={formData.message}
//               onChange={(e) =>
//                 setFormData({ ...formData, message: e.target.value })
//               }
//               className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all resize-none"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };




// const ContactModal = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   if (!isOpen) return null;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     onClose();
//   };

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
//       onClick={onClose}
//       style={{ animation: "fadeIn 0.3s ease-out" }}
//     >
//       <div
//         className="relative w-full max-w-md bg-amber-50 dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-4 border-amber-200 dark:border-amber-900"
//         onClick={(e) => e.stopPropagation()}
//         style={{ animation: "scaleIn 0.3s ease-out" }}
//       >
//         <button
//           onClick={onClose}
//           className="absolute -top-4 -right-4 p-2 bg-amber-600 text-white hover:bg-amber-700 rounded-full transition-colors shadow-lg"
//         >
//           <X className="w-5 h-5" />
//         </button>
//         <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-6 text-center">Get In Touch</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-amber-900 dark:text-amber-200 mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               required
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//               className="w-full px-4 py-3 border-2 border-amber-300 dark:border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white transition-all bg-white"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-amber-900 dark:text-amber-200 mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               required
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               className="w-full px-4 py-3 border-2 border-amber-300 dark:border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white transition-all bg-white"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-amber-900 dark:text-amber-200 mb-2">
//               Message
//             </label>
//             <textarea
//               required
//               rows="4"
//               value={formData.message}
//               onChange={(e) =>
//                 setFormData({ ...formData, message: e.target.value })
//               }
//               className="w-full px-4 py-3 border-2 border-amber-300 dark:border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white transition-all resize-none bg-white"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };


// export default ContactModal;


// import React from "react";

// const TabNavigation = ({ tabs, activeTab, setActiveTab }) => {
//   return (
//     <div className="glass-effect-strong border-y-2 sticky top-16 z-40">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-center space-x-1 sm:space-x-2 py-3 overflow-x-auto scrollbar-hide">
//           {tabs.map((item, index) => {
//             const Icon = item.icon;
//             const isActive = activeTab === index;
            
//             return (
//               <button
//                 key={index}
//                 onClick={() => setActiveTab(index)}
//                 className={`group relative flex items-center space-x-2 px-3 sm:px-5 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base ${
//                   isActive
//                     ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg tab-active"
//                     : "btn-secondary"
//                 }`}
//               >
//                 <Icon 
//                   className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
//                     isActive ? 'rotate-0' : 'group-hover:rotate-12'
//                   }`} 
//                 />
//                 <span className="hidden sm:inline">{item.label}</span>
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabNavigation;

import { X } from "lucide-react";
import { useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="card-elevated relative w-full max-w-md p-8 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 p-2 bg-primary-600 text-white hover:bg-primary-700 rounded-full transition-colors shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Message
            </label>
            <textarea
              required
              rows="4"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="textarea"
            />
          </div>
          <button
            type="submit"
            className="btn-primary btn-ripple w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;