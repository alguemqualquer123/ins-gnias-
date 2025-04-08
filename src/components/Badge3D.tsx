// Badge3D.tsx
import React from "react";

interface Badge3DProps {
  label: string;
  icon: string;
}

const Badge3D: React.FC<Badge3DProps> = ({ label, icon }) => {
  return (
    <div className="w-full flex justify-center items-center space-x-2 p-2 bg-gradient-to-br from-purple-500/20 to-blue-500 rounded-lg shadow-lg transform transition-all hover:shadow-2xl select-none">
      <div className="w-20 h-20 group relative rounded-full overflow-hidden ">
        {/* <div className="absolute inset-0 bg-white/20 opacity-10 rounded-full shadow-md animate-pulse"></div> */}
        <div className="relative h-full w-full group flex justify-center items-center">
          <div className="absolute flex justify-center items-center mb-1 p-2">
            <img
              src={icon}
              draggable={false}
              alt=""
              className="w-10 h-10 insignea grayscale-0 hover:grayscale-0 hover:cursor-pointer"
            />
          </div>

          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
            {label}
          </div>
        </div>
      </div>
      <span  className="text-lg font-poppins text-white">{label}</span>
    </div>
  );
};

export default Badge3D;
