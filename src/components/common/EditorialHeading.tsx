import React from 'react';
import { ClassificationLevel } from '../../types';
import { ClassificationBadge } from './ClassificationBadge';

interface EditorialHeadingProps {
  office: string;
  title: string;
  subtitle?: string;
  classification?: ClassificationLevel | string;
  number?: string;
  onDark?: boolean;
  align?: 'left' | 'center';
  className?: string;
}

export const EditorialHeading: React.FC<EditorialHeadingProps> = ({
  office,
  title,
  subtitle,
  classification,
  number,
  onDark = false,
  align = 'left',
  className = '',
}) => {
  return (
    <div className={`mb-8 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {/* Pre-header Office and Metadata */}
      <div className={`flex flex-wrap items-center gap-3 mb-3 ${align === 'center' ? 'justify-center' : 'justify-between'}`}>
        <div className="flex items-center gap-2">
          {number && (
            <span className={`font-mono text-[12px] font-bold ${onDark ? 'text-official-red' : 'text-official-red'}`}>
              SECTION {number} //
            </span>
          )}
          <span className={`font-mono text-[11px] tracking-widest uppercase font-semibold ${onDark ? 'text-paper-secondary/80' : 'text-ink-secondary'}`}>
            {office}
          </span>
        </div>
        {classification && (
          <ClassificationBadge level={classification} size="sm" onDark={onDark} />
        )}
      </div>

      {/* Main Heading in Roboto Slab */}
      <h2
        className={`font-slab font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight ${
          onDark ? 'text-paper-raised' : 'text-ink-primary'
        }`}
      >
        {title}
      </h2>

      {/* Optional Subtitle */}
      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base max-w-3xl leading-relaxed font-sans ${
            onDark ? 'text-paper-secondary' : 'text-ink-secondary'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}

      {/* Thin baseline rule */}
      <div className={`mt-5 border-b ${onDark ? 'border-paper-secondary/20' : 'border-grid-line'}`} />
    </div>
  );
};
