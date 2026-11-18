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
            Welcome to Nutlandis, home of $NUTS. Explore the fiction; verify the token details. No government backing. The absurdity is official.
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
                  <a
                    href="https://x.com/nutlandis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink-primary transition-colors"
                    title="Official Telegraph (X)"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  <a
                    href="https://t.me/nonutlandis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink-primary transition-colors"
                    title="Encrypted Civilian Relay (Telegram)"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.75-2.1-.75-.72 0-1.22.17-1.56.45-.34.28-.63.65-.63 1.1 0 .45.29.82.63 1.1.34.28.84.45 1.56.45.88 0 1.49-.28 1.85-.83.14-.22.2-.5.2-.83zm-1.1-3.5c-.88 0-1.44.37-1.44 1.05 0 .68.56 1.05 1.44 1.05.88 0 1.44-.37 1.44-1.05 0-.68-.56-1.05-1.44-1.05z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.tiktok.com/@nutlandis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink-primary transition-colors"
                    title="National Broadcast Reel (TikTok)"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.01 8.75-.01 1.23-.21 2.44-.81 3.53-.76 1.38-2.02 2.45-3.51 2.95-1.43.48-3.03.49-4.48.08-1.51-.43-2.86-1.35-3.75-2.63-.89-1.28-1.3-2.86-1.11-4.4.19-1.54.98-2.98 2.17-3.95 1.26-1.03 2.94-1.49 4.57-1.29.02 1.48.01 2.96.01 4.44-.71-.23-1.52-.1-2.12.33-.61.43-.99 1.13-.99 1.87 0 .74.38 1.44.99 1.87.61.43 1.42.56 2.13.33.72-.23 1.29-.83 1.52-1.55.11-.34.11-.69.11-1.04V.02z" />
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
                    $NUTS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Classification Bar */}
        <div className="border-t border-grid-line pt-3 mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono text-ink-secondary uppercase">
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
