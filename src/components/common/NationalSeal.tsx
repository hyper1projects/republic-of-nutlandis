import React from 'react';

interface NationalSealProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'monochrome';
  className?: string;
}

export const NationalSeal: React.FC<NationalSealProps> = ({
  size = 'md',
  variant = 'light',
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-36 h-36',
  };

  const isDark = variant === 'dark';
  const primaryColor = isDark ? '#F2E9D7' : '#292824';
  const accentColor = '#AD4032';
  const secondaryColor = isDark ? '#DCD0B9' : '#625B50';
  const ringColor = isDark ? 'rgba(242, 233, 215, 0.4)' : '#B9AD98';

  return (
    <div
      className={`inline-flex items-center justify-center select-none flex-shrink-0 ${sizeMap[size]} ${className}`}
      aria-label="Official Seal of the Republic of Nutlandis"
      title="Official Seal of the Republic of Nutlandis — Hold Your Nuts"
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer Ring */}
        <circle cx="100" cy="100" r="95" stroke={primaryColor} strokeWidth="3" />
        <circle cx="100" cy="100" r="90" stroke={ringColor} strokeWidth="1" strokeDasharray="3 3" />
        
        {/* Inner Border Ring */}
        <circle cx="100" cy="100" r="70" stroke={primaryColor} strokeWidth="1.5" />
        <circle cx="100" cy="100" r="66" stroke={accentColor} strokeWidth="1" />

        {/* Circular Path Text */}
        <path
          id={`seal-curve-${size}`}
          d="M 28 100 A 72 72 0 1 1 172 100 A 72 72 0 1 1 28 100"
          fill="none"
        />
        <text
          fontSize="11.5"
          fontFamily="'IBM Plex Mono', monospace"
          fontWeight="600"
          fill={primaryColor}
          letterSpacing="2.8"
        >
          <textPath href={`#seal-curve-${size}`} startOffset="4%">
            REPUBLIC OF NUTLANDIS • MMXXIV •
          </textPath>
        </text>

        {/* Central Heraldic Shield / Walnut Motif */}
        <g transform="translate(100, 100)">
          {/* Subtle Laurel Sprigs */}
          <path
            d="M -42 15 C -45 5, -42 -15, -28 -30 C -25 -20, -28 -5, -25 5"
            stroke={secondaryColor}
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 42 15 C 45 5, 42 -15, 28 -30 C 25 -20, 28 -5, 25 5"
            stroke={secondaryColor}
            strokeWidth="1.5"
            fill="none"
          />

          {/* Central Walnut Silhouette - Authoritative, Geometric, Heraldic */}
          {/* Left Kernel / Shell half */}
          <path
            d="M -4 -38 C -22 -26, -32 -8, -32 14 C -32 34, -20 46, -4 52 L -4 -38 Z"
            fill={primaryColor}
          />
          {/* Right Kernel / Shell half */}
          <path
            d="M 4 -38 C 22 -26, 32 -8, 32 14 C 32 34, 20 46, 4 52 L 4 -38 Z"
            fill={primaryColor}
          />
          {/* Center Seam / Suture Line */}
          <line x1="0" y1="-44" x2="0" y2="56" stroke={accentColor} strokeWidth="2" />
          <circle cx="0" cy="-44" r="2.5" fill={accentColor} />
          <circle cx="0" cy="56" r="2.5" fill={accentColor} />

          {/* Core Crest Details */}
          <path
            d="M -16 -4 C -22 10, -18 24, -10 32"
            stroke={isDark ? '#302B26' : '#EAE0CA'}
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 16 -4 C 22 10, 18 24, 10 32"
            stroke={isDark ? '#302B26' : '#EAE0CA'}
            strokeWidth="1.5"
            fill="none"
          />
        </g>

        {/* Lower Banner Ribbon / Slogan */}
        <rect
          x="38"
          y="152"
          width="124"
          height="18"
          fill={accentColor}
          rx="1"
        />
        <text
          x="100"
          y="164.5"
          textAnchor="middle"
          fontSize="9"
          fontFamily="'IBM Plex Mono', monospace"
          fontWeight="700"
          fill="#F2E9D7"
          letterSpacing="1.2"
        >
          HOLD YOUR NUTS
        </text>

        {/* Small stars */}
        <polygon points="48,100 50,96 52,100 49,98" fill={accentColor} />
        <polygon points="148,100 150,96 152,100 149,98" fill={accentColor} />
      </svg>
    </div>
  );
};
