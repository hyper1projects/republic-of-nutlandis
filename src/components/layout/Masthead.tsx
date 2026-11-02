import React from 'react';
import { NationalSeal } from '../common/NationalSeal';

export const Masthead: React.FC = () => {
  return (
    <header className="w-full bg-paper-base border-b border-grid-line/60">
      <div className="max-w-content mx-auto px-4 sm:px-8 py-3.5 sm:py-6">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Left: National Seal & Official Identity */}
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-4 group cursor-pointer select-none min-w-0">
            <NationalSeal
              size="md"
              variant="light"
              className="w-9 h-9 sm:w-13 sm:h-13 flex-shrink-0 transition-transform group-hover:scale-[1.02]"
            />

            <div className="flex flex-col justify-center min-w-0">
              <span className="font-mono text-[9px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.18em] uppercase text-ink-muted font-medium leading-none mb-1 truncate">
                OFFICIAL GOVERNMENT PORTAL
              </span>
              <h1 className="font-slab font-bold text-base sm:text-2xl md:text-[26px] text-ink-primary tracking-tight uppercase leading-tight group-hover:text-official-darkRed transition-colors truncate">
                REPUBLIC OF NUTLANDIS
              </h1>
            </div>
          </a>

          {/* Right: Outlined $NNN Treasury Button */}
          <div className="flex-shrink-0">
            <a
              href="#treasury"
              className="inline-flex items-center justify-center border border-official-red text-official-red hover:bg-official-red hover:text-paper-raised transition-all px-3 sm:px-6 py-1.5 sm:py-2.5 font-sans font-semibold text-[11px] sm:text-sm tracking-wide rounded-[1px] active:translate-y-[1px] whitespace-nowrap"
            >
              $NNN Treasury
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};
