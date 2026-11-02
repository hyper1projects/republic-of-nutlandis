import React, { useState } from 'react';
import { getActiveDirective, getPublishedNews, getPublishedCitizenReports } from '../../content';
import { COMMUNITY_LINKS } from '../../data/nationalData';
import { ArrowUpRight } from 'lucide-react';

export const NationalIntelligence: React.FC = () => {
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showGossipModal, setShowGossipModal] = useState(false);

  // Content queries — all draft-filtered and sorted
  const todayDirective = getActiveDirective();
  const newsCards = getPublishedNews({ limit: 3 });
  const recentReports = getPublishedCitizenReports({ limit: 3 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!location.trim() || !description.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setLocation('');
      setDescription('');
    }, 4000);
  };

  return (
    <section id="intelligence" className="w-full py-10 sm:py-14 border-b border-grid-line bg-archival-grid">
      <div className="max-w-content mx-auto px-4 sm:px-8 space-y-10 sm:space-y-12">

        {/* Section Header Row */}
        <div className="flex items-center justify-between border-b border-grid-line pb-3">
          <span className="font-mono text-xs sm:text-[13px] font-bold text-official-red tracking-[0.15em] uppercase">
            NATIONAL INTELLIGENCE
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] text-ink-muted tracking-widest uppercase hidden sm:block">
            NEWS AND INTELLIGENCE DEPARTMENT
          </span>
        </div>

        {/* Today's Directive — Two-column card */}
        {todayDirective && (
          <div className="border border-grid-line bg-paper-raised rounded-[1px] overflow-hidden">
            {/* Card header */}
            <div className="px-4 sm:px-8 pt-5 sm:pt-8 pb-4 border-b border-grid-line/60">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                <span className="inline-block border border-ink-secondary/50 text-ink-secondary font-mono text-[9px] sm:text-[11px] font-semibold tracking-widest uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-[1px]">
                  TODAY'S DIRECTIVE
                </span>
                <span className="font-mono text-[10px] sm:text-xs font-semibold text-ink-muted tracking-widest uppercase">
                  CITIZEN DUTY / {todayDirective.codeName}
                </span>
              </div>
              <h3 className="font-slab font-black text-xl sm:text-3xl lg:text-[2.25rem] text-ink-primary uppercase leading-tight break-words">
                {todayDirective.title}
              </h3>
            </div>

            {/* Two-column body */}
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-grid-line/60">
              {/* Left — Formal directive text */}
              <div className="px-4 sm:px-8 py-4 sm:py-6 space-y-3">
                <div className="font-mono text-[10px] sm:text-[11px] font-bold text-ink-muted tracking-widest uppercase mb-1.5">
                  OFFICIAL ORDER
                </div>
                <p className="font-sans text-sm sm:text-base text-ink-secondary leading-relaxed">
                  {Array.isArray(todayDirective.body) ? todayDirective.body[0] : todayDirective.body}
                </p>
                {todayDirective.sanctionedCountermeasures.length > 0 && (
                  <p className="font-sans text-sm sm:text-base text-ink-secondary leading-relaxed">
                    A secure reserve begins with an orderly district. Document your compliance, share the directive, and invite another citizen to report for duty.
                  </p>
                )}
              </div>

              {/* Right — Plain-language translation */}
              <div className="px-4 sm:px-8 py-4 sm:py-6 bg-paper-secondary/30 flex flex-col justify-center">
                <div className="font-mono text-[10px] sm:text-[11px] font-bold text-official-red tracking-widest uppercase mb-2 sm:mb-3">
                  FOR UNEDUCATED NORMIES
                </div>
                <p className="font-sans text-base sm:text-xl font-semibold text-ink-primary leading-snug">
                  {todayDirective.plainSummary}
                </p>
              </div>
            </div>

            {/* Card footer — actions */}
            <div className="px-4 sm:px-8 py-3.5 sm:py-4 border-t border-grid-line/60 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: todayDirective.title, text: todayDirective.codeName, url: window.location.href });
                  }
                }}
                className="inline-flex items-center justify-center gap-1.5 border border-official-red text-official-red hover:bg-official-red hover:text-paper-raised font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase px-4 py-2.5 sm:py-2 rounded-[1px] transition-colors cursor-pointer text-center"
              >
                SHARE DIRECTIVE →
              </button>
              <a
                href="#/intelligence?focus=directives"
                className="inline-flex items-center justify-center gap-1 font-mono text-[11px] sm:text-xs font-bold text-official-red hover:text-official-darkRed tracking-widest uppercase transition-colors cursor-pointer text-center py-1"
              >
                VIEW ALL DIRECTIVES →
              </a>
            </div>
          </div>
        )}

        {/* Daily News — header row + 3-col card grid */}
        {newsCards.length > 0 && (
          <div>
            {/* Sub-section header with VIEW ALL on the right */}
            <div className="flex items-center justify-between border-b border-grid-line pb-3 mb-5">
              <span className="font-mono text-[11px] sm:text-xs font-bold text-official-red tracking-[0.15em] uppercase">
                DAILY NEWS
              </span>
              <a
                href="#/intelligence?focus=news"
                className="font-mono text-[11px] sm:text-xs font-bold text-official-red hover:text-official-darkRed tracking-widest uppercase transition-colors"
              >
                VIEW ALL →
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {newsCards.map((item) => {
                const summary = item.summary || (Array.isArray(item.body) ? item.body[0] : item.body);
                return (
                  <div
                    key={item.id}
                    className="border border-grid-line bg-paper-raised p-5 sm:p-6 rounded-[1px] flex flex-col justify-between hover:border-ink-secondary transition-colors"
                  >
                    <div className="space-y-3 mb-5">
                      <h4 className="font-slab font-black text-base sm:text-lg lg:text-xl text-ink-primary uppercase leading-tight">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed line-clamp-3">
                        {summary}
                      </p>
                    </div>

                    <div className="border-t border-grid-line/60 pt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-ink-muted uppercase tracking-widest">
                      <span>SOURCE: {item.department || 'FIELD OBSERVATION'}</span>
                      <span>CLASSIFICATION: {item.classification.split(' ')[0]}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom: Citizen Report Form + Recent Reports */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">

          {/* LEFT: Submit Encounter Report Form */}
          <div className="lg:col-span-7 border border-grid-line bg-paper-raised p-4 sm:p-8 rounded-[1px]">
            <div className="mb-4 sm:mb-5">
              <div className="font-mono text-[10px] sm:text-[11px] font-bold text-official-red tracking-widest uppercase mb-1.5 sm:mb-2">
                CITIZEN REPORTING
              </div>
              <h3 className="font-slab font-black text-lg sm:text-2xl text-ink-primary uppercase">
                SUBMIT AN ENCOUNTER REPORT
              </h3>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <div className="font-mono text-xs font-bold text-emerald-700 tracking-widest uppercase">
                  ✓ REPORT RECEIVED BY INTELLIGENCE BUREAU
                </div>
                <p className="font-sans text-sm text-ink-secondary">
                  Your submission has been logged. A field agent will assess and respond within standard processing cycles.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  If you have encountered unusual activity, unauthorized gatherings, or irregularities in the national reserve, please submit your findings below.
                </p>

                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] sm:text-[11px] text-ink-muted tracking-widest uppercase font-semibold">
                    LOCATION OF ENCOUNTER
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Sector 4, North Gate"
                    className="w-full border border-grid-line bg-paper-base px-3.5 sm:px-4 py-2 sm:py-2.5 font-sans text-sm text-ink-primary placeholder:text-ink-muted/60 focus:outline-none focus:border-ink-secondary rounded-[1px] transition-colors"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] sm:text-[11px] text-ink-muted tracking-widest uppercase font-semibold">
                    DESCRIPTION OF EVENT
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide as much detail as possible..."
                    rows={4}
                    className="w-full border border-grid-line bg-paper-base px-3.5 sm:px-4 py-2 sm:py-2.5 font-sans text-sm text-ink-primary placeholder:text-ink-muted/60 focus:outline-none focus:border-ink-secondary rounded-[1px] transition-colors resize-none"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center bg-ink-primary hover:bg-ink-secondary text-paper-raised font-sans font-bold text-xs sm:text-[13px] tracking-wider uppercase px-5 py-2.5 rounded-[1px] transition-colors cursor-pointer w-full sm:w-auto"
                  >
                    SUBMIT REPORT
                  </button>
                  <button
                    type="button"
                    onClick={() => { setLocation(''); setDescription(''); }}
                    className="inline-flex items-center justify-center border border-grid-line text-ink-secondary hover:text-ink-primary hover:border-ink-secondary font-sans font-bold text-xs sm:text-[13px] tracking-wider uppercase px-5 py-2.5 rounded-[1px] transition-colors cursor-pointer w-full sm:w-auto"
                  >
                    SAVE DRAFT
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT: Recent Citizen Reports */}
          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] sm:text-[11px] font-bold text-official-red tracking-widest uppercase mb-3 sm:mb-4">
              RECENT CITIZEN REPORTS
            </div>

            <div className="border border-grid-line bg-paper-raised rounded-[1px] divide-y divide-grid-line">
              {recentReports.map((report) => {
                const date = new Date(report.publicationDate).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                }).toUpperCase();

                return (
                  <div key={report.id} className="px-3.5 sm:px-5 py-3.5 sm:py-4 flex items-start justify-between gap-3 sm:gap-4 hover:bg-paper-secondary/30 transition-colors">
                    <p className="font-sans text-xs sm:text-sm text-ink-primary leading-snug flex-1">
                      {Array.isArray(report.body)
                        ? report.body[0].split('.')[0] + '.'
                        : (report.body as string).split('.')[0] + '.'}
                    </p>
                    <span className="font-mono text-[9px] sm:text-[10px] text-ink-muted tracking-wider whitespace-nowrap flex-shrink-0 pt-0.5">
                      {date}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-4">
              <button
                type="button"
                onClick={() => setShowGossipModal(true)}
                className="inline-flex items-center gap-1 font-mono text-[11px] sm:text-xs font-bold text-official-red hover:text-official-darkRed tracking-widest uppercase transition-colors cursor-pointer"
              >
                VIEW CITIZEN REPORT ARCHIVE →
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Classified Gossip Intercept Modal */}
      {showGossipModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowGossipModal(false)}
        >
          <div
            className="relative w-full max-w-lg bg-paper-raised text-ink-primary border-2 border-official-red shadow-2xl p-4 sm:p-8 rounded-[1px] space-y-4 sm:space-y-5 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-grid-line pb-2.5 sm:pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-official-red animate-pulse flex-shrink-0" />
                <span className="font-mono text-[9px] sm:text-xs font-bold text-official-red uppercase tracking-wider sm:tracking-widest">
                  ACCESS RESTRICTED // CLEARANCE REQUIRED
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowGossipModal(false)}
                className="text-ink-muted hover:text-ink-primary font-mono text-xs uppercase cursor-pointer flex-shrink-0"
              >
                ✕ [CLOSE]
              </button>
            </div>

            {/* Stamp & Punchline */}
            <div className="space-y-3">
              <div className="inline-block border-2 border-official-red text-official-red px-2 py-0.5 sm:px-2.5 sm:py-1 font-mono text-[9px] sm:text-[10px] font-bold tracking-widest uppercase">
                SECURITY CLEARANCE INSUFFICIENT
              </div>
              
              <h3 className="font-slab font-black text-xl sm:text-3xl text-ink-primary uppercase leading-tight break-words">
                Go buy the token, gossip girl lol
              </h3>

              <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed">
                Full civilian surveillance transcripts, neighbor violation logs, and classified snitch reports are reserved for verified holders of the national reserve.
              </p>

              <div className="bg-paper-secondary/40 border border-grid-line p-3 sm:p-3.5 rounded-[1px] space-y-1">
                <div className="font-mono text-[10px] font-bold text-official-red uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-official-red animate-pulse" />
                  <span>TOKEN LAUNCH VIGIL ACTIVE // 96-HOUR COUNTDOWN</span>
                </div>
                <p className="font-sans text-xs text-ink-secondary leading-snug">
                  $NNN launches on <strong>pump.fun</strong> upon countdown expiration. Follow official relays to receive the contract ping the millisecond liquidity is instantiated.
                </p>
              </div>
            </div>

            {/* Official Relay Channels */}
            <div className="space-y-2 pt-1">
              <div className="font-mono text-[10px] text-ink-muted uppercase tracking-widest font-semibold">
                OFFICIAL COMMUNITY RELAYS:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <a
                  href={COMMUNITY_LINKS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between font-mono text-xs font-bold bg-official-red hover:bg-official-darkRed text-paper-raised px-3 py-2 rounded-[1px] transition-colors"
                >
                  <span>TELEGRAM</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={COMMUNITY_LINKS.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between font-mono text-xs font-bold border border-grid-line bg-paper-base hover:border-ink-primary text-ink-primary px-3 py-2 rounded-[1px] transition-colors"
                >
                  <span>X / TWITTER</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={COMMUNITY_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between font-mono text-xs font-bold border border-grid-line bg-paper-base hover:border-ink-primary text-ink-primary px-3 py-2 rounded-[1px] transition-colors"
                >
                  <span>TIKTOK</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 border-t border-grid-line/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
              <a
                href={COMMUNITY_LINKS.pumpFun}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowGossipModal(false)}
                className="inline-flex items-center justify-center gap-1.5 bg-ink-primary hover:bg-ink-secondary text-paper-raised font-mono font-bold text-xs tracking-wider uppercase px-4 py-2.5 rounded-[1px] transition-colors text-center"
              >
                <span>VISIT PUMP.FUN LAUNCHPAD →</span>
              </a>
              <button
                type="button"
                onClick={() => setShowGossipModal(false)}
                className="inline-flex items-center justify-center font-mono text-xs font-semibold text-ink-muted hover:text-ink-primary uppercase px-4 py-2 border border-grid-line transition-colors cursor-pointer text-center"
              >
                RETURN TO REPORTING
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
