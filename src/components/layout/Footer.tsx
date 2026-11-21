import React from 'react';
import { NationalSeal } from '../common/NationalSeal';

const PUMP_FUN_URL = 'https://pump.fun/coin/3ncKmE36uHoNd8BkK3HcWWCk8kBmAq6Wpq1Qo7Hcpump';

export const Footer: React.FC = () => (
  <footer className="w-full bg-treasury-dark font-sans text-paper-raised">
    <div className="mx-auto flex max-w-content flex-col gap-5 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <div className="flex items-center gap-3">
        <NationalSeal size="sm" variant="dark" />
        <div>
          <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-paper-raised/60">Fictional community project</div>
          <div className="font-slab text-sm font-bold">Republic of Nutlandis · $NUTS</div>
        </div>
      </div>
      <a href={PUMP_FUN_URL} target="_blank" rel="noopener noreferrer" className="font-mono text-xs font-bold uppercase tracking-wider text-paper-raised hover:text-emerald-300">
        Open NUTS on Pump.fun ↗
      </a>
    </div>
    <div className="mx-auto max-w-content px-4 pb-6 font-sans text-xs leading-relaxed text-paper-raised/60 sm:px-8">
      $NUTS is a speculative meme token, not a government-backed asset or investment guarantee. Verify the contract before trading. You could lose your entire investment.
    </div>
  </footer>
);
