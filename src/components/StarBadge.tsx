// StarBadge.tsx
import React from 'react';

interface StarBadgeProps {
  size?: string;
  color?: string;
}

const StarBadge: React.FC<StarBadgeProps> = ({ size = 'w-12 h-12', color = 'text-yellow-500' }) => {
  return (
    <div className={`flex justify-center items-center ${size}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={`${color} ${size}`}
      >
        <path
          fillRule="evenodd"
          d="M12 2l2.4 7.8h8.1l-6.6 4.8 2.4 7.7-6.6-4.8-6.6 4.8 2.4-7.7-6.6-4.8h8.1L12 2z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default StarBadge;
