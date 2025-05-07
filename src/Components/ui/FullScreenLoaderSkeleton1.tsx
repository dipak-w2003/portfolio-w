import React from "react";

const FullScreenLoader: React.FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#0f0f0f] text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );
};

export default FullScreenLoader;
