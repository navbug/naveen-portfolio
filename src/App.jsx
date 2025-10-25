// import React, { useState } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import ContactModal from "./modals/ContactModal";
// import HeroSection from "./components/HeroSection";
// import TabNavigation from "./components/TabNavigation";
// import { tabs } from "./utils/helpers";
// import Footer from "./components/Footer";

// const App = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [contactModalOpen, setContactModalOpen] = useState(false);

//   const ActiveTabComponent = tabs[activeTab].component;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
//       <Navbar onContactClick={() => setContactModalOpen(true)} />
//       <ContactModal
//         isOpen={contactModalOpen}
//         onClose={() => setContactModalOpen(false)}
//       />

//       <HeroSection />

//       <TabNavigation
//         tabs={tabs}
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//       />

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="min-h-[500px]">
//           <ActiveTabComponent />
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ContactModal from "./modals/ContactModal";
import HeroSection from "./components/HeroSection";
import TabNavigation from "./components/TabNavigation";
import { tabs } from "./utils/helpers";
import Footer from "./components/Footer";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const ActiveTabComponent = tabs[activeTab].component;

  return (
    <div className="page-background">
      <Navbar onContactClick={() => setContactModalOpen(true)} />
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <HeroSection />

      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[500px]">
          <ActiveTabComponent />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;