import React from 'react';
import { NationalSeal } from '../common/NationalSeal';
import { NATIONAL_IDENTITY } from '../../data/nationalData';
import { OfficialStamp } from '../common/OfficialStamp';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full font-sans" style={{ background: '#302B26', color: '#EAE0CA' }}>

      {/* ── Main grid ── */}
      <div className="max-w-content mx-auto px-4 sm:px-8 pt-10 sm:pt-14 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pb-8 border-b border-[#EAE0CA]/10">

          {/* Column 1 — Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <NationalSeal size="sm" variant="dark" />
              <div>
                <div className="font-mono text-[10px] font-bold tracking-widest uppercase opacity-50">
                  OFFICIAL GOVERNMENT PORTAL
                </div>
                <h4 className="font-slab font-bold text-base leading-tight" style={{ color: '#EAE0CA' }}>
                  {NATIONAL_IDENTITY.name}
                </h4>
              </div>
            </div>
            <div className="font-mono text-xs font-bold tracking-widest uppercase" style={{ color: '#EAE0CA', opacity: 0.6 }}>
              {NATIONAL_IDENTITY.slogan}
            </div>
          </div>

          {/* Column 2 — Section Navigation */}
          <div className="space-y-3">
            <div className="font-mono text-[10px] font-bold tracking-widest uppercase opacity-40" style={{ color: '#EAE0CA' }}>
              SECTION NAVIGATION
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#hero" className="font-sans text-sm font-semibold transition-opacity hover:opacity-80" style={{ color: '#EAE0CA' }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#treasury" className="font-sans text-sm font-semibold transition-opacity hover:opacity-80" style={{ color: '#EAE0CA' }}>
                  National Treasury
                </a>
              </li>
              <li>
                <a href="#intelligence" className="font-sans text-sm font-semibold transition-opacity hover:opacity-80" style={{ color: '#EAE0CA' }}>
                  National Intelligence
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Official Community Channels */}
          <div className="space-y-3">
            <div className="font-mono text-[10px] font-bold tracking-widest uppercase opacity-40" style={{ color: '#EAE0CA' }}>
              OFFICIAL COMMUNITY CHANNELS
            </div>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a
                  href="https://x.com/nonutlandis?s=11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:opacity-80 transition-opacity"
                  style={{ color: '#EAE0CA' }}
                >
                  <span>OFFICIAL TELEGRAPH (X / TWITTER)</span>
                  <span className="opacity-40 ml-3">[EXTERNAL]</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/nonutlandis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:opacity-80 transition-opacity"
                  style={{ color: '#EAE0CA' }}
                >
                  <span>CIVILIAN CITIZEN FORUM (TELEGRAM)</span>
                  <span className="opacity-40 ml-3">[ENCRYPTED]</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@nutlandis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:opacity-80 transition-opacity"
                  style={{ color: '#EAE0CA' }}
                >
                  <span>STATE BROADCAST CHANNEL (TIKTOK)</span>
                  <span className="opacity-40 ml-3">[OFFICIAL]</span>
                </a>
              </li>
              <li>
                <a
                  href="https://pump.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between font-bold hover:opacity-90 transition-opacity"
                  style={{ color: '#AD4032' }}
                >
                  <span>LAUNCH / ACQUIRE $NNN (PUMP.FUN)</span>
                  <span className="ml-3">[LIVE]</span>
                </a>
              </li>
            </ul>

            {/* Stamp */}
            <div className="pt-3">
              <OfficialStamp
                label="PERMANENT RECORD"
                subLabel="GAZETTE IMPRIMATUR"
                code="GOV-FINAL-2026"
                variant="ink"
                rotation="none"
              />
            </div>
          </div>

        </div>

        {/* ── Status bar ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 py-4 border-b border-[#EAE0CA]/10">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-40" style={{ color: '#EAE0CA' }}>GOVERNMENT STATUS</span>
            <span className="font-mono text-[10px] uppercase tracking-widest font-bold" style={{ color: '#EAE0CA' }}>FULLY OPERATIONAL</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-40" style={{ color: '#EAE0CA' }}>NATIONAL TOKEN</span>
            <span className="font-mono text-[10px] uppercase tracking-widest font-bold" style={{ color: '#EAE0CA' }}>$NNN</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-40" style={{ color: '#EAE0CA' }}>CLASSIFICATION</span>
            <span className="font-mono text-[10px] uppercase tracking-widest font-bold" style={{ color: '#EAE0CA' }}>PUBLIC RECORD</span>
          </div>
        </div>

        {/* ── Disclaimer ── */}
        <div className="py-5 sm:py-6">
          <p className="font-sans text-xs leading-relaxed opacity-50" style={{ color: '#EAE0CA' }}>
            The Republic of Nutlandis is a fictional internet community and creative project. $NNN is a speculative meme token associated with this project and is not an investment guarantee or representation of government-backed financial value.
          </p>
        </div>

        {/* ── End of record sign-off ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 border-t border-[#EAE0CA]/10 gap-2 text-center sm:text-left">
          <span className="font-mono text-[10px] uppercase tracking-widest opacity-40" style={{ color: '#EAE0CA' }}>
            END OF OFFICIAL RECORD.
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest opacity-40" style={{ color: '#EAE0CA' }}>
            © 2026 REPUBLIC OF NUTLANDIS
          </span>
        </div>

      </div>
    </footer>
  );
};
