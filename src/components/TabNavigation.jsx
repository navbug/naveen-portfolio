import React from "react";

const TabNavigation = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-2 py-4 overflow-x-auto scrollbar-hide">
          {tabs.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeTab === index;
            
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`group relative flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg tab-active"
                    : "btn-secondary"
                }`}
                style={{padding: "7px 12px"}}
              >
                <Icon 
                  className={`w-6 h-6 transition-transform duration-300 ${
                    isActive ? 'rotate-0' : 'group-hover:rotate-12'
                  }`} 
                />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;