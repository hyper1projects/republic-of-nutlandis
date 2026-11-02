import React, { useState, useEffect } from 'react';
import { Clock, ArrowUpRight } from 'lucide-react';
import { COMMUNITY_LINKS } from '../../data/nationalData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

// 96 hours from current operational date (Nov 2, 2026 -> Nov 6, 2026)
// We also support localStorage so it's consistent across reloads
function getStoredTargetTime(): number {
  try {
    const stored = localStorage.getItem('nutlandis_launch_target');
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed) && parsed > Date.now()) {
        return parsed;
      }
    }
  } catch {
    // fallback
  }
  const newTarget = Date.now() + 96 * 60 * 60 * 1000;
  try {
    localStorage.setItem('nutlandis_launch_target', newTarget.toString());
  } catch {
    // ignore
  }
  return newTarget;
}

export const CountdownTimer: React.FC<{ variant?: 'treasury' | 'banner' }> = ({ variant = 'treasury' }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 4,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });

  useEffect(() => {
    const target = getStoredTargetTime();

    const calculate = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isComplete: false });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  if (variant === 'banner') {
    return (
      <div className="w-full bg-[#1F1C18] border-b border-official-red/40 py-2.5 px-4 text-paper-raised">
        <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-official-red animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-official-red uppercase">
              T-MINUS RESERVE UNLOCK:
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-paper-raised">
              {pad(timeLeft.days)}D : {pad(timeLeft.hours)}H : {pad(timeLeft.minutes)}M : {pad(timeLeft.seconds)}S
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
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-3 gap-2">
        <div className="flex items-center gap-2.5">
          <Clock className="w-4 h-4 text-official-red animate-pulse" />
          <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.18em] text-official-red uppercase">
            IMMUTABLE TIME-LOCK PROTOCOL // 96-HOUR HYPER-VIGIL
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest bg-official-red/20 text-official-red border border-official-red/40 rounded-[1px]">
            DEPLOYMENT: PUMP.FUN
          </span>
        </div>
      </div>

      {/* Main Countdown Display Grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto py-2">
        {/* Days */}
        <div className="border border-white/10 bg-[#1D1A16] p-3 sm:p-4 rounded-[1px] text-center shadow-inner">
          <div className="font-mono font-black text-2xl sm:text-4xl lg:text-5xl text-paper-raised tracking-tight">
            {pad(timeLeft.days)}
          </div>
          <div className="font-mono text-[9px] sm:text-[11px] uppercase tracking-widest text-paper-secondary/60 mt-1">
            DAYS
          </div>
        </div>

        {/* Hours */}
        <div className="border border-white/10 bg-[#1D1A16] p-3 sm:p-4 rounded-[1px] text-center shadow-inner">
          <div className="font-mono font-black text-2xl sm:text-4xl lg:text-5xl text-paper-raised tracking-tight">
            {pad(timeLeft.hours)}
          </div>
          <div className="font-mono text-[9px] sm:text-[11px] uppercase tracking-widest text-paper-secondary/60 mt-1">
            HOURS
          </div>
        </div>

        {/* Minutes */}
        <div className="border border-white/10 bg-[#1D1A16] p-3 sm:p-4 rounded-[1px] text-center shadow-inner">
          <div className="font-mono font-black text-2xl sm:text-4xl lg:text-5xl text-paper-raised tracking-tight">
            {pad(timeLeft.minutes)}
          </div>
          <div className="font-mono text-[9px] sm:text-[11px] uppercase tracking-widest text-paper-secondary/60 mt-1">
            MINUTES
          </div>
        </div>

        {/* Seconds */}
        <div className="border border-official-red/40 bg-[#1D1A16] p-3 sm:p-4 rounded-[1px] text-center shadow-inner ring-1 ring-official-red/20">
          <div className="font-mono font-black text-2xl sm:text-4xl lg:text-5xl text-official-red tracking-tight">
            {pad(timeLeft.seconds)}
          </div>
          <div className="font-mono text-[9px] sm:text-[11px] uppercase tracking-widest text-official-red/80 mt-1">
            SECONDS
          </div>
        </div>
      </div>

      {/* Explanatory notice */}
      <div className="pt-1 text-center space-y-1">
        <p className="font-sans text-xs sm:text-sm text-paper-secondary/85 leading-relaxed max-w-2xl mx-auto">
          The national reserve remains locked in sovereign escrow while continental telemetry synchronizes across social relays. At T-Zero, the official $NNN pool will be instantiated on <strong>pump.fun</strong> for civilian acquisition.
        </p>
      </div>

      {/* Social Relay Call to Action */}
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
