import React, { useEffect } from 'react';
import { X, Printer, Shield } from 'lucide-react';
import { ClassificationBadge } from './ClassificationBadge';
import { OfficialStamp } from './OfficialStamp';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  classification?: string;
  referenceCode?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  classification = "RESTRICTED EXECUTIVE",
  referenceCode = "DOC-ARCH-2026",
  children,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-paper-raised text-ink-primary border border-grid-line shadow-2xl flex flex-col rounded-[2px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Document Header Bar */}
        <div className="px-4 sm:px-5 py-3 sm:py-3.5 bg-paper-secondary/50 border-b border-grid-line flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Shield className="w-4 h-4 text-official-red flex-shrink-0" />
            <ClassificationBadge level={classification} size="sm" />
            <span className="font-mono text-[10px] sm:text-[11px] text-ink-muted hidden md:inline truncate">
              REF: {referenceCode}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <button
              onClick={() => window.print()}
              type="button"
              className="p-1 sm:p-1.5 text-ink-secondary hover:text-ink-primary hover:bg-paper-secondary rounded-[1px] transition-colors cursor-pointer"
              title="Print Official Document"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              type="button"
              className="p-1 sm:p-1.5 text-ink-secondary hover:text-official-red hover:bg-paper-secondary rounded-[1px] transition-colors cursor-pointer"
              title="Close Dispatch"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="p-4 sm:p-8 overflow-y-auto space-y-4 sm:space-y-6">
          <div className="border-b border-grid-line pb-4">
            <div className="font-mono text-[10px] tracking-widest uppercase text-ink-muted mb-1">
              REPUBLIC OF NUTLANDIS • EXECUTIVE RECORD ARCHIVE
            </div>
            <h3 className="font-slab text-xl sm:text-2xl font-bold text-ink-primary leading-tight">
              {title}
            </h3>
          </div>

          <div className="prose-content font-sans text-sm sm:text-base leading-relaxed text-ink-secondary space-y-4">
            {children}
          </div>

          {/* Document Footer Verification */}
          <div className="mt-8 pt-6 border-t border-grid-line flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <OfficialStamp
                label="OFFICIALLY RATIFIED"
                subLabel="DEPARTMENT OF ARCHIVES"
                code={referenceCode}
                variant="red"
                rotation="none"
              />
              <div className="text-[11px] font-mono text-ink-muted">
                AUTHENTICATED TRANSMISSION<br />
                HOLD YOUR NUTS
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 font-mono text-xs uppercase bg-paper-secondary hover:bg-paper-base border border-grid-line text-ink-primary transition-colors"
            >
              Close Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
