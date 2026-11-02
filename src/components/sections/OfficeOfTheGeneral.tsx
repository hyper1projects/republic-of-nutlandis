import React, { useState } from 'react';
import { Award, ArrowUpRight, Scale } from 'lucide-react';
import { getPublishedDecrees, getDecreeCategories, OfficialDecreeRecord } from '../../content';
import { EditorialHeading } from '../common/EditorialHeading';
import { ClassificationBadge } from '../common/ClassificationBadge';
import { OfficialStamp } from '../common/OfficialStamp';
import { Modal } from '../common/Modal';

export const OfficeOfTheGeneral: React.FC = () => {
  const [selectedDecree, setSelectedDecree] = useState<OfficialDecreeRecord | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  // Dynamic content queries
  const categories = getDecreeCategories();
  const publishedDecrees = getPublishedDecrees({ category: activeFilter });

  return (
    <section id="general" className="w-full py-12 sm:py-16 md:py-20 border-b border-grid-line bg-paper-base">
      <div className="max-w-content mx-auto px-4 sm:px-8">
        
        {/* Editorial Section Heading */}
        <EditorialHeading
          office="OFFICE OF THE SUPREME MARSHAL // HIGH REDOUBT"
          number="03"
          title="SOVEREIGN DECREES, EXECUTIVE EDICTS & CONTINENTAL DIRECTIVES"
          subtitle="Official promulgations issued under the executive authority of General Bartholomew V. Nutcracker. Absolute adherence is mandatory for all citizens across seven sectors."
          classification="OFFICIAL DIRECTIVE"
        />

        {/* Dynamic Category Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-grid-line pb-3">
          <span className="font-mono text-[11px] text-ink-muted uppercase mr-2 flex items-center gap-1">
            <Scale className="w-3.5 h-3.5 text-official-red" />
            FILTER JURISDICTION:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-mono text-xs px-3 py-1.5 uppercase transition-colors rounded-[2px] border cursor-pointer ${
                activeFilter === cat
                  ? 'bg-official-red text-paper-raised border-official-red font-bold'
                  : 'bg-paper-raised text-ink-secondary border-grid-line hover:text-ink-primary hover:bg-paper-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Editorial Document Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {publishedDecrees.map((decree) => {
            const formattedDate = new Date(decree.publicationDate).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            }).toUpperCase();

            return (
              <article
                key={decree.id}
                className="border border-grid-line bg-paper-raised p-5 sm:p-6 rounded-[2px] flex flex-col justify-between hover:border-ink-secondary transition-colors relative group"
              >
                <div>
                  {/* Header Metadata */}
                  <div className="flex items-center justify-between gap-2 border-b border-grid-line/60 pb-2.5 mb-3">
                    <span className="font-mono text-[11px] font-bold text-official-red">
                      {decree.code}
                    </span>
                    <ClassificationBadge level={decree.classification} size="sm" />
                  </div>

                  <div className="font-mono text-[10px] text-ink-muted mb-2">
                    ISSUED: {formattedDate} // {decree.category}
                  </div>

                  {/* Decree Headline in Roboto Slab */}
                  <h3 className="font-slab font-bold text-lg sm:text-xl text-ink-primary leading-snug mb-3">
                    {decree.title}
                  </h3>

                  {/* Summary */}
                  <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                    {decree.summary}
                  </p>

                  {/* Penalty preview */}
                  {decree.mandatoryPenalties && decree.mandatoryPenalties.length > 0 && (
                    <div className="bg-paper-secondary/40 border border-grid-line/60 p-2.5 rounded-[1px] mb-4">
                      <span className="font-mono text-[10px] uppercase font-bold text-official-darkRed block mb-1">
                        PRIMARY PENAL SANCTION:
                      </span>
                      <p className="font-mono text-[11px] text-ink-primary leading-tight">
                        {decree.mandatoryPenalties[0]}
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer Controls & Seal Info */}
                <div className="border-t border-grid-line/60 pt-3 mt-2 flex items-center justify-between">
                  <div className="text-[10px] font-mono text-ink-muted">
                    SEAL: {decree.sealNumber}<br />
                    STATUS: <span className="text-emerald-700 font-semibold">{decree.activeStatus}</span>
                  </div>

                  <button
                    onClick={() => setSelectedDecree(decree)}
                    className="inline-flex items-center gap-1 text-official-red hover:text-official-darkRed font-mono text-xs font-bold uppercase transition-colors cursor-pointer"
                  >
                    <span>EXAMINE EDICT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Featured Formal Editorial Address Panel: The Midnight Proclamation */}
        <div className="border-2 border-grid-line bg-paper-raised p-6 sm:p-8 rounded-[2px] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-grid-line pb-6 mb-6">
            <div className="space-y-1">
              <div className="font-mono text-[11px] text-official-red font-bold uppercase tracking-widest flex items-center gap-2">
                <Award className="w-4 h-4" />
                STATE ARCHIVAL RECORD // SUPREME ORATION
              </div>
              <h3 className="font-slab text-2xl sm:text-3xl font-bold text-ink-primary">
                "THE KERNEL SHALL NOT CRACK" — BROADCAST FROM THE HIGH REDOUBT
              </h3>
              <p className="font-mono text-xs text-ink-secondary">
                Delivered by Supreme Marshal Bartholomew V. Nutcracker on the Eve of Mobilization
              </p>
            </div>

            <OfficialStamp
              label="EXECUTIVE RECORD"
              subLabel="SUPREME HEADQUARTERS"
              code="ORAT-01-NNN"
              variant="darkRed"
              rotation="left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-ink-secondary font-sans text-sm sm:text-base leading-relaxed">
            <blockquote className="font-serif italic border-l-2 border-official-red pl-4 text-ink-primary space-y-3">
              <p>
                "When temptation grips your pulse in the silent hours of the night, look to the seal. Look to your brothers and sisters standing vigilant across seven sectors. Plunge your wrists into icy water. Grip the iron bar. Grip your resolve."
              </p>
              <footer className="font-mono text-xs not-italic text-ink-muted">
                — Bartholomew V. Nutcracker, Supreme Marshal
              </footer>
            </blockquote>

            <div className="space-y-3 text-xs sm:text-sm font-sans">
              <p>
                The High Redoubt confirms that transmission towers across all continental provinces will rebroadcast the Marshal's Address every six hours at maximum acoustic amplification.
              </p>
              <div className="p-3 bg-paper-base border border-grid-line rounded-[1px] font-mono text-xs">
                <span className="font-bold text-ink-primary block mb-1">MANDATORY CITIZEN RESPONSE:</span>
                Upon hearing the concluding phrase "HOLD YOUR NUTS", all citizens within audible range must face northeast, place their right hand over their chest pocket, and remain motionless for seven seconds.
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Modal for Full Decree Text */}
      {selectedDecree && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedDecree(null)}
          title={selectedDecree.title}
          classification={selectedDecree.classification}
          referenceCode={selectedDecree.code}
        >
          <div className="space-y-4">
            <div className="font-mono text-xs bg-paper-base p-3 border border-grid-line space-y-1">
              <div><strong className="text-ink-primary">ISSUING AUTHORITY:</strong> {selectedDecree.signatory}</div>
              <div><strong className="text-ink-primary">JURISDICTION:</strong> {selectedDecree.category}</div>
              <div><strong className="text-ink-primary">EFFECTIVE STATUS:</strong> {selectedDecree.activeStatus}</div>
            </div>

            <div className="font-sans text-sm leading-relaxed space-y-3">
              {Array.isArray(selectedDecree.body) ? (
                selectedDecree.body.map((clause, i) => (
                  <p key={i} className="text-ink-primary">
                    {clause}
                  </p>
                ))
              ) : (
                <p className="text-ink-primary">{selectedDecree.body}</p>
              )}
            </div>

            {selectedDecree.mandatoryPenalties && selectedDecree.mandatoryPenalties.length > 0 && (
              <div className="border-t border-grid-line pt-4 mt-4">
                <h4 className="font-mono text-xs font-bold text-official-red uppercase tracking-wider mb-2">
                  SCHEDULE OF DISCIPLINARY SANCTIONS:
                </h4>
                <ul className="space-y-1.5 font-mono text-xs text-ink-secondary">
                  {selectedDecree.mandatoryPenalties.map((pen, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-official-red font-bold">§{i + 1}</span>
                      <span>{pen}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
};
