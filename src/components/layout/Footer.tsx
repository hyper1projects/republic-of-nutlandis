import React from 'react';
import { NationalSeal } from '../common/NationalSeal';
import { NATIONAL_IDENTITY } from '../../data/nationalData';

const PUMP_FUN_URL = 'https://pump.fun/coin/3ncKmE36uHoNd8BkK3HcWWCk8kBmAq6Wpq1Qo7Hcpump';
const SOCIAL_LINKS = [
  { label: 'Official X / Twitter', url: 'https://x.com/nutlandis' },
  { label: 'Community Telegram', url: 'https://t.me/nonutlandis' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@nnn.nutlandis' },
];

export const Footer: React.FC = () => (
  <footer className="w-full bg-treasury-dark font-sans text-paper-raised">
    <div className="mx-auto grid max-w-content grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-3 sm:px-8 sm:py-14">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <NationalSeal size="sm" variant="dark" />
          <div>
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-paper-raised/60">Fictional community project</div>
            <h4 className="font-slab text-base font-bold">{NATIONAL_IDENTITY.name}</h4>
          </div>
        </div>
        <div className="font-mono text-xs font-bold uppercase tracking-widest text-paper-raised/60">{NATIONAL_IDENTITY.slogan}</div>
      </div>

      <div className="space-y-3">
        <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-paper-raised/50">Section navigation</div>
        <ul className="space-y-2 text-sm font-semibold">
          <li><a href="#hero" className="hover:text-emerald-300">Home</a></li>
          <li><a href="#treasury" className="hover:text-emerald-300">National Treasury</a></li>
          <li><a href="#intelligence" className="hover:text-emerald-300">National Intelligence</a></li>
        </ul>
      </div>

      <div className="space-y-3">
        <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-paper-raised/50">Official social links</div>
        <ul className="space-y-2 font-mono text-xs">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}><a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">{link.label} ↗</a></li>
          ))}
          <li><a href={PUMP_FUN_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-official-red hover:text-paper-raised">$NUTS on Pump.fun ↗</a></li>
        </ul>
      </div>
    </div>
    <div className="mx-auto max-w-content border-t border-paper-raised/10 px-4 py-5 text-xs leading-relaxed text-paper-raised/60 sm:px-8">
      The Republic of Nutlandis is a fictional internet community and creative project. $NUTS is a speculative meme token, not a government-backed asset or investment guarantee. Verify the contract before trading; you could lose your entire investment.
    </div>
  </footer>
);
