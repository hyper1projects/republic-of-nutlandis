import React, { useState } from 'react';
import generalPortrait from '../../assets/general-portrait.jpg';
import { getFeaturedNews } from '../../content';
import { Modal } from '../common/Modal';

export const NationalBulletinHero: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const leadNews = getFeaturedNews();

  if (!leadNews) {
    return null;
  }

  const paragraphs = Array.isArray(leadNews.body) ? leadNews.body : [leadNews.body];

  return (
    <section id="hero" className="w-full py-6 sm:py-12 border-b border-grid-line bg-archival-grid">
      <div className="max-w-content mx-auto px-4 sm:px-8">
        
        {/* Top Pre-Header Introduction */}
        <div className="mb-6 sm:mb-10">
          <div className="font-mono text-xs sm:text-[13px] font-bold text-official-red tracking-wider uppercase mb-1.5">
            A FICTIONAL REPUBLIC. A REAL MEME TOKEN.
          </div>
          <p className="font-sans text-xs sm:text-sm text-ink-secondary max-w-3xl leading-relaxed">
            Welcome to Nutlandis, home of $NNN. Explore the fiction; verify the token details. No government backing. The absurdity is official.
          </p>
        </div>

        {/* 3-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Column 1: Lead Bulletin Story (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5 sm:space-y-4">
            
            {/* Tag Badge: [ NATIONAL BULLETIN / 001 ] */}
            <div>
              <span className="inline-block border border-official-red px-2.5 py-1 text-official-red font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase rounded-[1px]">
                [ {leadNews.code} ]
              </span>
            </div>

            {/* Main Bold Serif Headline: THE NATION REMAINS ON HIGH ALERT. */}
            <h2 className="font-slab font-black text-2xl sm:text-4xl lg:text-[44px] text-ink-primary leading-[1.1] sm:leading-[1.08] tracking-tight uppercase break-words">
              {leadNews.title}
            </h2>

            {/* Supporting Description */}
            <p className="font-sans text-sm sm:text-base text-ink-secondary leading-relaxed font-normal pt-1">
              {leadNews.summary}
            </p>

            {/* Read Full Dispatch Action Link */}
            <div className="pt-1 sm:pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-official-red hover:text-official-darkRed font-mono text-xs sm:text-[13px] font-bold tracking-wider uppercase cursor-pointer transition-colors"
              >
                <span>READ FULL DISPATCH</span>
                <span className="text-base font-sans">→</span>
              </button>
            </div>

          </div>

          {/* Column 2: Framed State Portrait of General Nutcracker (3.5 cols) */}
          <div className="lg:col-span-3 flex flex-col items-center">
            
            <div className="w-full max-w-[280px] border border-grid-line bg-paper-raised p-1 shadow-sm">
              <div className="relative border border-grid-line/60 bg-[#DCD0B9] overflow-hidden">
                <img
                  src={generalPortrait}
                  alt="General Nutcracker Official State Portrait"
                  className="w-full h-auto object-cover object-top block select-none"
                />
              </div>
            </div>

            {/* Metadata below Portrait Frame */}
            <div className="w-full max-w-[280px] flex items-center justify-between text-[10px] font-mono text-ink-secondary/90 tracking-wider uppercase mt-2 px-0.5">
              <span>GENERAL NUTCRACKER</span>
              <span>STATE PORTRAIT / 001</span>
            </div>

          </div>

          {/* Column 3: OFFICIAL DOSSIER Card (3.5 cols) */}
          <div className="lg:col-span-4">
            <div className="border border-grid-line bg-paper-raised p-5 sm:p-6 shadow-sm rounded-[1px]">
              
              {/* Dossier Header with Social Icons */}
              <div className="flex items-center justify-between border-b border-grid-line/60 pb-3 mb-4">
                <span className="font-mono text-xs font-bold text-official-red tracking-wider uppercase">
                  OFFICIAL DOSSIER
                </span>

                {/* Social Relay Icons */}
                <div className="flex items-center gap-3 text-ink-secondary">
                  {/* X / Twitter Icon */}
                  <a
                    href="https://x.com/nonutlandis?s=11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink-primary transition-colors"
                    title="Official Telegraph (X)"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Telegram Icon */}
                  <a
                    href="https://t.me/nonutlandis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink-primary transition-colors"
                    title="Encrypted Civilian Relay (Telegram)"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                    </svg>
                  </a>

                  {/* TikTok Icon */}
                  <a
                    href="https://www.tiktok.com/@nutlandis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink-primary transition-colors"
                    title="National Broadcast Reel (TikTok)"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Dossier Data Fields */}
              <div className="space-y-3 font-sans">
                
                {/* 1. Head of State */}
                <div className="border-b border-grid-line/60 pb-2">
                  <div className="font-mono text-[10px] sm:text-[11px] text-ink-muted uppercase tracking-wider mb-0.5">
                    HEAD OF STATE
                  </div>
                  <div className="text-sm sm:text-base font-medium text-ink-primary">
                    General Nutcracker
                  </div>
                </div>

                {/* 2. National Motto */}
                <div className="border-b border-grid-line/60 pb-2">
                  <div className="font-mono text-[10px] sm:text-[11px] text-ink-muted uppercase tracking-wider mb-0.5">
                    NATIONAL MOTTO
                  </div>
                  <div className="text-sm sm:text-base font-medium text-ink-primary">
                    Hold Your Nuts
                  </div>
                </div>

                {/* 3. Government Status */}
                <div className="border-b border-grid-line/60 pb-2">
                  <div className="font-mono text-[10px] sm:text-[11px] text-ink-muted uppercase tracking-wider mb-0.5">
                    GOVERNMENT STATUS
                  </div>
                  <div className="text-sm sm:text-base font-medium text-ink-primary">
                    Fully Operational
                  </div>
                </div>

                {/* 4. National Reserve */}
                <div className="border-b border-grid-line/60 pb-2">
                  <div className="font-mono text-[10px] sm:text-[11px] text-ink-muted uppercase tracking-wider mb-0.5">
                    NATIONAL RESERVE
                  </div>
                  <div className="text-sm sm:text-base font-medium text-ink-primary">
                    Under Preservation
                  </div>
                </div>

                {/* 5. National Token */}
                <div className="pt-0.5">
                  <div className="font-mono text-[10px] sm:text-[11px] text-ink-muted uppercase tracking-wider mb-0.5">
                    NATIONAL TOKEN
                  </div>
                  <div className="text-sm sm:text-base font-medium text-ink-primary">
                    $NNN
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Classification Bar */}
        <div className="border-t border-grid-line pt-3 mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono text-ink-secondary uppercase tracking-widest">
          <span>CLASSIFICATION: {leadNews.classification}</span>
          <span>ISSUED BY: {leadNews.department || 'OFFICE OF THE GENERAL'}</span>
        </div>

      </div>

      {/* Modal for Full Lead Gazette Dispatch */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={leadNews.title}
        classification={leadNews.classification}
        referenceCode={leadNews.code}
      >
        <p className="font-serif italic text-base text-ink-primary border-l-2 border-official-red pl-4 py-1">
          {leadNews.summary}
        </p>

        <div className="space-y-3 font-sans text-sm sm:text-base leading-relaxed text-ink-secondary">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-ink-secondary">
              {paragraph}
            </p>
          ))}
        </div>

        {leadNews.fieldDispatches && leadNews.fieldDispatches.length > 0 && (
          <div className="border-t border-grid-line pt-4 mt-6">
            <h4 className="font-mono text-xs font-bold text-ink-primary uppercase tracking-wider mb-3">
              FIELD OBSERVATION REPORTS:
            </h4>
            <div className="space-y-3 font-mono text-xs">
              {leadNews.fieldDispatches.map((d, i) => (
                <div key={i} className="p-3 bg-paper-secondary/40 border border-grid-line/60">
                  <div className="flex justify-between font-bold text-ink-primary mb-1">
                    <span>{d.location}</span>
                    <span className="text-official-red">STATUS: {d.status}</span>
                  </div>
                  <div className="text-ink-secondary text-[11px]">{d.report}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
