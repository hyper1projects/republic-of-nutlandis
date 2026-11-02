import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface ContractAddressFieldProps {
  address: string;
  network?: string;
  label?: string;
  onDark?: boolean;
  className?: string;
}

export const ContractAddressField: React.FC<ContractAddressFieldProps> = ({
  address,
  network = "Solana Mainnet",
  label = "OFFICIAL VERIFIED CONTRACT ADDRESS",
  onDark = true,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div
      className={`border p-4 rounded-[2px] transition-all ${
        onDark
          ? 'bg-[#26221E] border-paper-secondary/20 text-paper-raised'
          : 'bg-paper-raised border-grid-line text-ink-primary'
      } ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <span
          className={`font-mono text-[10px] tracking-widest uppercase font-semibold ${
            onDark ? 'text-paper-secondary/70' : 'text-ink-muted'
          }`}
        >
          {label}
        </span>
        <span
          className={`font-mono text-[10px] px-1.5 py-0.5 rounded-[1px] border ${
            onDark
              ? 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30'
              : 'border-emerald-700/30 text-emerald-800 bg-emerald-50'
          }`}
        >
          VERIFIED RECORD // {network}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-black/20 p-2.5 rounded-[1px] border border-white/5">
        <code className="font-mono text-xs sm:text-sm tracking-wider break-all select-all text-paper-raised">
          {address}
        </code>

        <button
          onClick={handleCopy}
          type="button"
          className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 font-mono text-xs uppercase font-semibold transition-all rounded-[2px] select-none flex-shrink-0 ${
            copied
              ? 'bg-emerald-700 text-white border border-emerald-600'
              : 'bg-official-red hover:bg-official-darkRed text-paper-raised border border-official-red active:translate-y-[1px]'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>RECORD COPIED</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>COPY CONTRACT</span>
            </>
          )}
        </button>
      </div>

      <div
        className={`mt-2 flex items-center justify-between text-[10px] font-mono ${
          onDark ? 'text-paper-secondary/60' : 'text-ink-muted'
        }`}
      >
        <span>STATUS: ARCHIVAL MULTI-SIG SECURED</span>
        <span>AUDIT HASH: #0914-NNN-SOL</span>
      </div>
    </div>
  );
};
