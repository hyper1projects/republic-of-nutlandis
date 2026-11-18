import React, { useEffect, useState } from 'react';
import { Clock, ArrowUpRight } from 'lucide-react';
import { COMMUNITY_LINKS } from '../../data/nationalData';

const GMT_MINUS_8_OFFSET_MS = -8 * 60 * 60 * 1000;
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

const getCountdown = (now: number): string => {
  // Treat GMT-8 as a fixed UTC-8 offset, independent of the browser's timezone.
  const gmtMinus8Now = new Date(now + GMT_MINUS_8_OFFSET_MS);
  let target = Date.UTC(
    gmtMinus8Now.getUTCFullYear(),
    gmtMinus8Now.getUTCMonth(),
    gmtMinus8Now.getUTCDate(),
    12,
  ) - GMT_MINUS_8_OFFSET_MS;

  if (target <= now) target += ONE_DAY_MS;

  const totalSeconds = Math.ceil((target - now) / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds]
    .map((part) => String(part).padStart(2, '0'))
    .join(':');
};

export const CountdownTimer: React.FC<{ variant?: 'treasury' | 'banner' }> = ({ variant = 'treasury' }) => {
  const [timeRemaining, setTimeRemaining] = useState('--:--:--');

  useEffect(() => {
    const updateCountdown = () => setTimeRemaining(getCountdown(Date.now()));
    updateCountdown();
    const intervalId = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  if (variant === 'banner') {
    return (
      <div className="w-full bg-[#1F1C18] border-b border-official-red/40 py-2.5 px-4 text-paper-raised">
        <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-official-red animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-official-red uppercase">
              12 PM GMT-8 IN:
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-paper-raised">
              {timeRemaining}
            </span>
          </div>

          <a
            href="https://t.me/nonutlandis"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] sm:text-[11px] font-bold text-paper-secondary hover:text-official-red tracking-wider uppercase transition-colors flex items-center gap-1"
          >
            <span>JOIN OFFICIAL TELEGRAM RELAY FOR LAUNCH BLOCK</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full border-2 border-official-red/80 bg-[#25211C] p-5 sm:p-7 rounded-[1px] shadow-xl text-paper-raised space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-3 gap-2">
        <div className="flex items-center gap-2.5">
          <Clock className="w-4 h-4 text-official-red animate-pulse" />
          <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.18em] text-official-red uppercase">
            COUNTDOWN TO 12 PM GMT-8
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest bg-official-red/20 text-official-red border border-official-red/40 rounded-[1px]">
            DEPLOYMENT: PUMP.FUN
          </span>
        </div>
      </div>

      <div className="max-w-xl mx-auto py-2">
        <div className="border border-official-red/40 bg-[#1D1A16] p-6 sm:p-8 rounded-[1px] text-center shadow-inner ring-1 ring-official-red/20">
          <div aria-live="off" className="font-mono font-black text-2xl sm:text-4xl lg:text-5xl text-official-red tracking-tight tabular-nums">
            {timeRemaining}
          </div>
          <div className="mt-2 font-mono text-[10px] sm:text-xs text-paper-secondary/70 uppercase tracking-widest">
            HOURS : MINUTES : SECONDS // GMT-8
          </div>
        </div>
      </div>

      <div className="pt-1 text-center space-y-1">
        <p className="font-sans text-xs sm:text-sm text-paper-secondary/85 leading-relaxed max-w-2xl mx-auto">
          The national reserve remains locked in sovereign escrow while continental telemetry synchronizes across social relays. At T-Zero, the official $NNN pool will be instantiated on <strong>pump.fun</strong> for civilian acquisition.
        </p>
      </div>

      <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <span className="font-mono text-[10px] sm:text-[11px] text-paper-secondary/60 uppercase tracking-widest text-center sm:text-left">
          GET IMMEDIATE LAUNCH PING VIA OFFICIAL RELAYS:
        </span>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <a
            href={COMMUNITY_LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold bg-official-red hover:bg-official-darkRed text-paper-raised px-3.5 py-1.5 rounded-[1px] uppercase tracking-wider transition-colors"
          >
            <span>TELEGRAM</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={COMMUNITY_LINKS.x}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold border border-white/20 hover:border-white text-paper-raised px-3.5 py-1.5 rounded-[1px] uppercase tracking-wider transition-colors"
          >
            <span>X / TWITTER</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={COMMUNITY_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold border border-white/20 hover:border-white text-paper-raised px-3.5 py-1.5 rounded-[1px] uppercase tracking-wider transition-colors"
          >
            <span>TIKTOK</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
