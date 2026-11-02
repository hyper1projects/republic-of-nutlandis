import React from 'react';

interface DividerProps {
  variant?: 'hairline' | 'double' | 'archival' | 'dark';
  label?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  variant = 'hairline',
  label,
  className = '',
}) => {
  if (variant === 'dark') {
    return (
      <div className={`w-full border-t border-paper-secondary/20 my-6 ${className}`} />
    );
  }

  if (variant === 'double') {
    return (
      <div className={`w-full border-t-2 border-b border-grid-line py-[2px] my-6 ${className}`} />
    );
  }

  if (variant === 'archival' && label) {
    return (
      <div className={`relative flex items-center justify-center my-8 ${className}`}>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-grid-line" />
        </div>
        <div className="relative bg-paper-base px-4 font-mono text-[10px] uppercase text-ink-muted tracking-widest">
          [ {label} ]
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full border-t border-grid-line my-6 ${className}`} />
  );
};
