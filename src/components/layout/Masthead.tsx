import React from 'react';
import { NationalSeal } from '../common/NationalSeal';

const PUMP_FUN_URL = 'https://pump.fun/coin/3ncKmE36uHoNd8BkK3HcWWCk8kBmAq6Wpq1Qo7Hcpump';

export const Masthead: React.FC = () => (
  <header className="w-full border-b border-grid-line/60 bg-paper-base">
    <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3.5 sm:px-8 sm:py-5">
      <a href="#treasury" className="group flex min-w-0 items-center gap-3">
        <NationalSeal size="md" variant="light" className="h-9 w-9 shrink-0 sm:h-12 sm:w-12" />
        <div className="min-w-0">
          <span className="mb-1 block truncate font-mono text-[9px] uppercase tracking-[0.15em] text-ink-muted sm:text-[11px]">Official project site</span>
          <h1 className="font-slab text-base font-bold uppercase leading-tight tracking-tight text-ink-primary transition-colors group-hover:text-official-darkRed sm:text-2xl">
            Republic of Nutlandis
          </h1>
        </div>
      </a>
      <a
        href={PUMP_FUN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 bg-official-red px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-paper-raised transition-colors hover:bg-official-darkRed sm:px-5 sm:text-xs"
      >
        View on Pump.fun ↗
      </a>
    </div>
  </header>
);
