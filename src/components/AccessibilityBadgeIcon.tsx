import React from 'react';

interface AccessibilityBadgeIconProps {
  className?: string;
}

export const AccessibilityBadgeIcon: React.FC<AccessibilityBadgeIconProps> = ({
  className = 'w-6 h-6'
}) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer light border circle */}
      <circle cx="32" cy="32" r="30.5" fill="#f1f5f9" />
      {/* Royal blue main circle */}
      <circle cx="32" cy="32" r="24.5" fill="#3246a8" />
      {/* Inner white ring */}
      <circle cx="32" cy="32" r="19" stroke="#ffffff" strokeWidth="2.6" />
      {/* Human head */}
      <circle cx="32" cy="21" r="3.4" fill="#ffffff" />
      {/* Outstretched arms */}
      <path
        d="M21 27.5H43"
        stroke="#ffffff"
        strokeWidth="3.3"
        strokeLinecap="round"
      />
      {/* Torso */}
      <path
        d="M32 27.5V35.2"
        stroke="#ffffff"
        strokeWidth="4.6"
        strokeLinecap="round"
      />
      {/* Left & right legs */}
      <path
        d="M31.2 34.5L27.5 44M32.8 34.5L36.5 44"
        stroke="#ffffff"
        strokeWidth="3.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
