import React from 'react';

interface OfficialStampProps {
  label: string;
  subLabel?: string;
  code?: string;
  variant?: 'red' | 'darkRed' | 'ink';
  rotation?: 'none' | 'left' | 'right';
  className?: string;
}

export const OfficialStamp: React.FC<OfficialStampProps> = ({
  label,
  subLabel = "REPUBLIC OF NUTLANDIS",
  code,
  variant = 'red',
  rotation = 'left',
  className = '',
}) => {
  const variantStyles = {
    red: 'border-official-red text-official-red',
    darkRed: 'border-official-darkRed text-official-darkRed',
    ink: 'border-ink-secondary text-ink-secondary',
  };

  const rotationStyles = {
    none: 'rotate-0',
    left: '-rotate-1',
    right: 'rotate-1',
  };

  return (
    <div
      className={`inline-block border-2 px-3 py-1.5 font-mono select-none tracking-wider text-center uppercase ${variantStyles[variant]} ${rotationStyles[rotation]} ${className}`}
      style={{
        boxShadow: 'inset 0 0 0 1px currentColor',
      }}
    >
      <div className="text-[9px] font-semibold tracking-widest opacity-80 leading-tight">
        {subLabel}
      </div>
      <div className="text-[12px] font-bold tracking-wider leading-tight my-0.5">
        {label}
      </div>
      {code && (
        <div className="text-[8px] font-mono tracking-widest opacity-75 leading-tight">
          REF: {code}
        </div>
      )}
    </div>
  );
};
