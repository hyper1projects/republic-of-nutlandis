import React from 'react';
import { ClassificationLevel } from '../../types';

interface ClassificationBadgeProps {
  level: ClassificationLevel | string;
  size?: 'sm' | 'md';
  onDark?: boolean;
  className?: string;
}

export const ClassificationBadge: React.FC<ClassificationBadgeProps> = ({
  level,
  size = 'md',
  onDark = false,
  className = '',
}) => {
  const isRed = level.includes('RESTRICTED') || level.includes('DEFCON') || level.includes('EYES ONLY');
  
  const sizeClasses = size === 'sm' 
    ? 'text-[10px] px-1.5 py-0.5 tracking-widest' 
    : 'text-[11px] px-2.5 py-1 tracking-wider';

  let borderBgClass = '';
  if (onDark) {
    if (isRed) {
      borderBgClass = 'border-official-red text-official-red bg-official-red/10';
    } else {
      borderBgClass = 'border-paper-secondary/40 text-paper-raised bg-paper-base/5';
    }
  } else {
    if (isRed) {
      borderBgClass = 'border-official-red text-official-red bg-official-red/5';
    } else {
      borderBgClass = 'border-grid-line text-ink-secondary bg-paper-raised';
    }
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono uppercase font-semibold border ${sizeClasses} ${borderBgClass} ${className}`}
      style={{ borderRadius: '1px' }}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isRed ? 'bg-official-red animate-pulse' : 'bg-grid-line'
        }`}
      />
      {level}
    </span>
  );
};
