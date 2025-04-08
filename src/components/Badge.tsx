// Badge.tsx
import React from 'react';
import StarBadge from './StarBadge';

interface BadgeProps {
  label: string;
  size?: string;
  color?: string;
}

const Badge: React.FC<BadgeProps> = ({ label, size, color }) => {
  return (
    <div className="flex items-center space-x-2">
      <StarBadge size={size} color={color} />
      <span className="text-white font-semibold">{label}</span>
    </div>
  );
};

export default Badge;
