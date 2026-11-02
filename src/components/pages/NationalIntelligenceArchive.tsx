import React, { useState, useEffect } from 'react';
import {
  getPublishedDirectives,
  getPublishedNews,
  getPublishedCitizenReports,
  getActiveDirective,
} from '../../content';
import { OfficialStamp } from '../common/OfficialStamp';
import { ClassificationBadge } from '../common/ClassificationBadge';
import { COMMUNITY_LINKS } from '../../data/nationalData';
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Shield,
  AlertTriangle,
  Share2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface NationalIntelligenceArchiveProps {
  initialFocus?: 'directives' | 'news';
  onReturnToPortal: () => void;
}

export const NationalIntelligenceArchive: React.FC<NationalIntelligenceArchiveProps> = ({
  initialFocus = 'directives',
  onReturnToPortal,
}) => {
  const [focus, setFocus] = useState<'directives' | 'news'>(initialFocus);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [expandedArticles, setExpandedArticles] = useState<Record<string, boolean>>({});
  const [shareSuccess, setShareSuccess] = useState<string | null>(null);
  const [showGossipModal, setShowGossipModal] = useState(false);

  // Content queries
  const directives = getPublishedDirectives();
  const allNews = getPublishedNews();
  const citizenReports = getPublishedCitizenReports({ limit: 10 });
  const activeDirective = getActiveDirective();

  useEffect(() => {
    setFocus(initialFocus);
  }, [initialFocus]);

  // Extract distinct news categories
  const categories = ['ALL', ...Array.from(new Set(allNews.map((n) => n.category)))];

  const filteredNews = selectedCategory === 'ALL'
    ? allNews
    : allNews.filter((n) => n.category === selectedCategory);

  const toggleArticle = (id: string) => {
    setExpandedArticles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleShare = (title: string, text: string) => {
    if (navigator.share) {
      navigator.share({ title, text, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${title} — ${text}\n${window.location.href}`);
      setShareSuccess(title);
      setTimeout(() => setShareSuccess(null), 3000);
    }
  };

  const getHazardBadge = (level: string) => {
    switch (level) {
      case 'CATASTROPHIC':
      case 'CRITICAL':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase font-bold text-official-red bg-official-red/10 border border-official-red px-2 py-0.5 rounded-[1px]">
            <AlertTriangle className="w-3 h-3" />
            HAZARD: {level}
          </span>
        );
      case 'SEVERE':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase font-bold text-amber-800 bg-amber-500/10 border border-amber-800 px-2 py-0.5 rounded-[1px]">
            <Shield className="w-3 h-3" />
            HAZARD: {level}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase font-bold text-ink-secondary bg-ink-secondary/10 border border-grid-line px-2 py-0.5 rounded-[1px]">
            HAZARD: {level}
          </span>
        );
    }
  };

  /* ─────────────────────────────────────────────────────────────
     COMPONENT: DIRECTIVES & CHALLENGES LIST
     ───────────────────────────────────────────────────────────── */
  const DirectivesSection = (
    <section id="archive-directives" className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-ink-primary pb-3 gap-3">
        <div>
          <div className="font-mono text-xs font-bold text-official-red tracking-[0.15em] uppercase mb-1">
            CIVIC DUTY & MARTIAL REGISTER // 30-DAY PROTOCOLS
          </div>
          <h2 className="font-slab font-black text-2xl sm:text-3xl text-ink-primary uppercase tracking-tight">
            CHALLENGES & DIRECTIVES SET SO FAR
          </h2>
        </div>
        <div className="font-mono text-xs text-ink-muted">
          TOTAL DIRECTIVES PUBLISHED: <span className="font-bold text-ink-primary">{directives.length}</span>
        </div>
      </div>

      <p className="font-sans text-sm text-ink-secondary max-w-3xl leading-relaxed">
        The official chronological catalogue of daily national directives. Every citizen is commanded to comply without hesitation. Directives are ratified at 05:00 hours daily by the Supreme Command.
      </p>

      {/* Directives Cards List */}
      <div className="space-y-6">
        {directives.map((directive) => {
          const isActive = activeDirective?.id === directive.id;
          return (
            <article
              key={directive.id}
              className={`border rounded-[1px] bg-paper-raised overflow-hidden transition-all ${
                isActive
                  ? 'border-official-red ring-1 ring-official-red/30 shadow-md'
                  : 'border-grid-line hover:border-ink-secondary'
              }`}
            >
              {/* Top Banner Bar */}
              <div className="px-4 sm:px-7 py-2.5 sm:py-3 bg-paper-secondary/40 border-b border-grid-line/60 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  <span className="font-mono text-[11px] sm:text-xs font-bold bg-ink-primary text-paper-raised px-2 sm:px-2.5 py-0.5 rounded-[1px] uppercase tracking-wider">
                    DAY {String(directive.dayNumber).padStart(2, '0')}
                  </span>
                  {isActive && (
                    <span className="font-mono text-[9px] sm:text-[10px] font-bold text-official-red bg-official-red/10 border border-official-red px-2 py-0.5 rounded-[1px] uppercase tracking-widest animate-pulse">
                      ● TODAY'S ACTIVE DIRECTIVE
                    </span>
                  )}
                  <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-ink-secondary tracking-widest uppercase">
                    {directive.codeName}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {getHazardBadge(directive.hazardLevel)}
                  <span className="font-mono text-[10px] sm:text-[11px] text-ink-muted hidden sm:inline">
                    COMPLIANCE: <strong className="text-ink-primary">{directive.nationalComplianceRate}</strong>
                  </span>
                </div>
              </div>

              {/* Title Header */}
              <div className="px-4 sm:px-7 pt-4 sm:pt-5 pb-3">
                <h3 className="font-slab font-black text-lg sm:text-2xl text-ink-primary uppercase leading-tight break-words">
                  {directive.title}
                </h3>
              </div>

              {/* Two-Column Body: Formal Order vs For Uneducated Normies */}
              <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-grid-line/70 border-t border-grid-line/50">
                {/* Left: Formal Military / Institutional Specification (7 cols) */}
                <div className="lg:col-span-7 p-4 sm:p-7 space-y-4">
                  <div>
                    <div className="font-mono text-[10px] font-bold text-ink-muted tracking-widest uppercase mb-1.5">
                      OFFICIAL MARTIAL ORDER
                    </div>
                    <p className="font-sans text-sm sm:text-[15px] text-ink-secondary leading-relaxed">
                      {Array.isArray(directive.body) ? directive.body.join(' ') : directive.body}
                    </p>
                  </div>

                  {directive.prohibitedActions && directive.prohibitedActions.length > 0 && (
                    <div className="space-y-1.5 pt-2">
                      <div className="font-mono text-[10px] font-bold text-official-red tracking-widest uppercase">
                        STRICTLY PROHIBITED ACTIONS
                      </div>
                      <ul className="space-y-1 font-sans text-xs sm:text-sm text-ink-secondary">
                        {directive.prohibitedActions.map((action, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="font-mono text-official-red font-bold text-xs">✕</span>
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {directive.sanctionedCountermeasures && directive.sanctionedCountermeasures.length > 0 && (
                    <div className="space-y-1.5 pt-2">
                      <div className="font-mono text-[10px] font-bold text-emerald-800 tracking-widest uppercase">
                        SANCTIONED COUNTERMEASURES
                      </div>
                      <ul className="space-y-1 font-sans text-xs sm:text-sm text-ink-secondary">
                        {directive.sanctionedCountermeasures.map((counter, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="font-mono text-emerald-700 font-bold text-xs">✓</span>
                            <span>{counter}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right: For Uneducated Normies (5 cols) */}
                <div className="lg:col-span-5 p-4 sm:p-7 bg-paper-secondary/35 flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[11px] font-bold text-official-red tracking-widest uppercase mb-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-official-red" />
                      FOR UNEDUCATED NORMIES
                    </div>
                    <p className="font-sans text-base sm:text-lg font-semibold text-ink-primary leading-snug">
                      "{directive.plainSummary}"
                    </p>
                  </div>

                  <div className="pt-6 border-t border-grid-line/50 mt-6 flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider">
                      OPERATIONAL DATE: {directive.operationalDate}
                    </span>

                    <button
                      onClick={() => handleShare(directive.title, directive.plainSummary)}
                      type="button"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-official-red hover:text-official-darkRed tracking-widest uppercase transition-colors cursor-pointer"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>SHARE PROTOCOL</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );

  /* ─────────────────────────────────────────────────────────────
     COMPONENT: DAILY NEWS & DISPATCHES LIST
     ───────────────────────────────────────────────────────────── */
  const NewsSection = (
    <section id="archive-news" className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-ink-primary pb-3 gap-3">
        <div>
          <div className="font-mono text-xs font-bold text-official-red tracking-[0.15em] uppercase mb-1">
            NATIONAL NEWS SERVICE // CLASSIFICATION: PUBLIC DISCLOSURE
          </div>
          <h2 className="font-slab font-black text-2xl sm:text-3xl text-ink-primary uppercase tracking-tight">
            DAILY NEWS & FIELD DISPATCHES
          </h2>
        </div>
        <div className="font-mono text-xs text-ink-muted">
          TOTAL DISPATCHES: <span className="font-bold text-ink-primary">{filteredNews.length}</span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 pt-1 pb-2">
        <span className="font-mono text-[10px] text-ink-muted uppercase tracking-widest mr-1">
          FILTER BY:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-[1px] border transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-ink-primary text-paper-raised border-ink-primary font-bold'
                : 'bg-paper-raised text-ink-secondary border-grid-line hover:border-ink-secondary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* News Articles List */}
      <div className="space-y-6">
        {filteredNews.map((article) => {
          const isExpanded = !!expandedArticles[article.id];
          const bodyParagraphs = Array.isArray(article.body) ? article.body : [article.body];
          const dateStr = new Date(article.publicationDate).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          }).toUpperCase();

          return (
            <article
              key={article.id}
              className="border border-grid-line bg-paper-raised p-6 sm:p-8 rounded-[1px] hover:border-ink-secondary transition-all space-y-4"
            >
              {/* Header metadata row */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-grid-line/60 pb-3 font-mono text-[11px] text-ink-muted">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-bold text-official-red tracking-wider uppercase">
                    {article.code}
                  </span>
                  <span>•</span>
                  <span className="uppercase">{article.department || 'NEWS DEPARTMENT'}</span>
                  <span>•</span>
                  <ClassificationBadge level={article.classification} size="sm" />
                </div>
                <div className="flex items-center gap-1.5 text-ink-secondary">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{dateStr}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-slab font-black text-xl sm:text-2xl text-ink-primary uppercase leading-tight">
                {article.title}
              </h3>

              {/* Lead Summary */}
              {article.summary && (
                <p className="font-sans text-sm sm:text-base font-medium text-ink-primary leading-relaxed border-l-2 border-official-red pl-3.5 italic bg-paper-secondary/20 py-1">
                  {article.summary}
                </p>
              )}

              {/* Full Article Body */}
              <div className="space-y-3 font-sans text-sm sm:text-base text-ink-secondary leading-relaxed">
                {isExpanded ? (
                  bodyParagraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <p>{bodyParagraphs[0]}</p>
                )}
              </div>

              {/* Field Dispatches (if present) */}
              {article.fieldDispatches && article.fieldDispatches.length > 0 && (
                <div className="pt-2">
                  <div className="font-mono text-[10px] font-bold text-ink-muted tracking-widest uppercase mb-2">
                    FIELD OBSERVATION DISPATCHES
                  </div>
                  <div className="border border-grid-line bg-paper-base rounded-[1px] divide-y divide-grid-line">
                    {article.fieldDispatches.map((dispatch, idx) => (
                      <div key={idx} className="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
                        <div className="flex items-start sm:items-center gap-2">
                          <span className="font-bold text-ink-primary whitespace-nowrap">{dispatch.location}:</span>
                          <span className="text-ink-secondary font-sans text-xs">{dispatch.report}</span>
                        </div>
                        <span
                          className={`inline-block px-2 py-0.5 font-mono text-[10px] font-bold rounded-[1px] uppercase tracking-wider self-start sm:self-auto ${
                            dispatch.status === 'OPTIMAL'
                              ? 'bg-emerald-700/10 text-emerald-800 border border-emerald-700/30'
                              : dispatch.status === 'VIGILANT'
                              ? 'bg-amber-500/10 text-amber-800 border border-amber-800/30'
                              : 'bg-official-red/10 text-official-red border border-official-red/30'
                          }`}
                        >
                          {dispatch.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer actions & expander */}
              <div className="pt-3 border-t border-grid-line/60 flex flex-wrap items-center justify-between gap-3">
                <div className="font-mono text-[10px] text-ink-muted uppercase tracking-wider">
                  ARCHIVAL REF: {article.archivalRef}
                </div>

                <div className="flex items-center gap-4">
                  {bodyParagraphs.length > 1 && (
                    <button
                      onClick={() => toggleArticle(article.id)}
                      type="button"
                      className="inline-flex items-center gap-1 font-mono text-xs font-bold text-official-red hover:text-official-darkRed uppercase tracking-wider cursor-pointer"
                    >
                      <span>{isExpanded ? 'COLLAPSE FULL DISPATCH' : 'READ FULL DISPATCH'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  )}

                  <button
                    onClick={() => handleShare(article.title, article.summary || bodyParagraphs[0])}
                    type="button"
                    className="inline-flex items-center gap-1 font-mono text-xs text-ink-secondary hover:text-ink-primary uppercase tracking-wider cursor-pointer"
                  >
                    <Share2 className="w-3 h-3" />
                    <span>SHARE</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );

  /* ─────────────────────────────────────────────────────────────
     COMPONENT: CITIZEN REPORT ARCHIVE & LOG
     ───────────────────────────────────────────────────────────── */
  const CitizenReportsSection = (
    <section id="archive-citizen-reports" className="space-y-6 pt-6 border-t-2 border-grid-line">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-grid-line pb-3 gap-2">
        <div>
          <div className="font-mono text-xs font-bold text-official-red tracking-[0.15em] uppercase mb-1">
            CIVILIAN SUBMISSIONS & ENCOUNTERS // ARCHIVE
          </div>
          <h3 className="font-slab font-black text-xl sm:text-2xl text-ink-primary uppercase tracking-tight">
            CITIZEN REPORT REGISTRY & SECTOR INTERCEPTIONS
          </h3>
        </div>
        <span className="font-mono text-xs text-ink-muted">LOGGED FOR PUBLIC NOTICE</span>
      </div>

      <div className="border border-grid-line bg-paper-raised rounded-[1px] divide-y divide-grid-line">
        {citizenReports.map((report) => (
          <div key={report.id} className="p-4 sm:p-5 hover:bg-paper-secondary/20 transition-colors space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-ink-muted uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span className="font-bold text-ink-primary">{report.refCode}</span>
                <span>•</span>
                <span>{report.sector}</span>
                <span>•</span>
                <span className="text-official-red font-semibold">{report.incidentType}</span>
              </div>
              <span className="border border-grid-line px-2 py-0.5 rounded-[1px] font-bold text-ink-secondary">
                {report.status}
              </span>
            </div>

            <p className="font-sans text-sm text-ink-primary leading-relaxed">
              {Array.isArray(report.body) ? report.body[0] : report.body}
            </p>

            <div className="font-mono text-[10px] text-ink-muted pt-1">
              ACTION TAKEN: <span className="text-ink-secondary">{report.actionTaken}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2">
        <button
          type="button"
          onClick={() => setShowGossipModal(true)}
          className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-official-red hover:text-official-darkRed tracking-widest uppercase transition-colors cursor-pointer"
        >
          <span>ACCESS FULL UNREDACTED GOSSIP & SURVEILLANCE LOGS →</span>
        </button>
      </div>
    </section>
  );

  return (
    <div className="w-full py-8 sm:py-12 bg-archival-grid">
      <div className="max-w-content mx-auto px-4 sm:px-8 space-y-10 sm:space-y-12">

        {/* ── Top Archival Breadcrumb & Navigation Bar ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-grid-line pb-4">
          <button
            onClick={onReturnToPortal}
            type="button"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-official-red hover:text-official-darkRed tracking-widest uppercase transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>RETURN TO MAIN PORTAL</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-ink-muted tracking-widest uppercase">
              ARCHIVE REF: ARCH-INTEL-2026 // PUBLIC DISCLOSURE
            </span>
            <span className="hidden md:inline-block w-2 h-2 rounded-full bg-emerald-700 animate-pulse" />
          </div>
        </div>

        {/* ── Page Masthead Header ── */}
        <div className="border border-grid-line bg-paper-raised p-4 sm:p-10 rounded-[1px] space-y-4 sm:space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="font-mono text-[10px] sm:text-xs font-bold text-official-red tracking-[0.18em] sm:tracking-[0.2em] uppercase">
                BUREAU OF NATIONAL INTELLIGENCE & CIVIC ARCHIVE
              </div>
              <h1 className="font-slab font-black text-2xl sm:text-4xl lg:text-5xl text-ink-primary uppercase tracking-tight leading-[1.1] sm:leading-none break-words">
                NATIONAL INTELLIGENCE REPOSITORY
              </h1>
              <p className="font-sans text-xs sm:text-base text-ink-secondary leading-relaxed pt-1">
                The official public register of all civic directives, daily operational challenges, and ratified municipal intelligence dispatches for the Republic of Nutlandis.
              </p>
            </div>

            <div className="flex-shrink-0 self-start lg:self-auto">
              <OfficialStamp
                label="VERIFIED ARCHIVE"
                subLabel="INTELLIGENCE BUREAU"
                code="DOC-914-ACTIVE"
                variant="darkRed"
                rotation="none"
              />
            </div>
          </div>

          {/* Quick Focus Switcher / Order Controller */}
          <div className="pt-4 border-t border-grid-line flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-mono text-[10px] font-bold text-ink-muted uppercase tracking-widest mr-1">
                PRIMARY VIEW:
              </span>
              <div className="flex flex-col xs:flex-row items-stretch gap-2">
                <button
                  type="button"
                  onClick={() => setFocus('directives')}
                  className={`font-mono text-xs uppercase tracking-wider px-3.5 py-2 sm:py-1.5 rounded-[1px] border transition-all cursor-pointer text-center ${
                    focus === 'directives'
                      ? 'bg-official-red text-paper-raised border-official-red font-bold shadow-sm'
                      : 'bg-paper-base text-ink-secondary border-grid-line hover:border-ink-secondary'
                  }`}
                >
                  CHALLENGES & DIRECTIVES FIRST
                </button>
                <button
                  type="button"
                  onClick={() => setFocus('news')}
                  className={`font-mono text-xs uppercase tracking-wider px-3.5 py-2 sm:py-1.5 rounded-[1px] border transition-all cursor-pointer text-center ${
                    focus === 'news'
                      ? 'bg-official-red text-paper-raised border-official-red font-bold shadow-sm'
                      : 'bg-paper-base text-ink-secondary border-grid-line hover:border-ink-secondary'
                  }`}
                >
                  DAILY NEWS FIRST
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-[11px] text-ink-muted uppercase pt-1 md:pt-0">
              <a href="#archive-directives" className="hover:text-official-red transition-colors">
                › DIRECTIVES
              </a>
              <span>•</span>
              <a href="#archive-news" className="hover:text-official-red transition-colors">
                › NEWS
              </a>
              <span>•</span>
              <a href="#archive-citizen-reports" className="hover:text-official-red transition-colors">
                › CITIZEN LOG
              </a>
            </div>
          </div>
        </div>

        {shareSuccess && (
          <div className="border border-emerald-700 bg-emerald-700/10 text-emerald-900 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>LINK COPIED TO CLIPBOARD: {shareSuccess}</span>
          </div>
        )}

        {/* ── Main Connected Content: Ordered according to user focus ── */}
        {focus === 'directives' ? (
          <>
            {DirectivesSection}
            {NewsSection}
            {CitizenReportsSection}
          </>
        ) : (
          <>
            {NewsSection}
            {DirectivesSection}
            {CitizenReportsSection}
          </>
        )}

        {/* ── Bottom Return Navigation ── */}
        <div className="border-t border-grid-line pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onReturnToPortal}
            type="button"
            className="inline-flex items-center gap-2 bg-ink-primary hover:bg-ink-secondary text-paper-raised font-sans font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-[1px] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO MAIN GOVERNMENT PORTAL</span>
          </button>

          <span className="font-mono text-xs text-ink-muted uppercase tracking-widest">
            END OF INTELLIGENCE REPOSITORY RECORD // 2026
          </span>
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
                RETURN TO REPOSITORY
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
