import React, { useState } from 'react';
import { ExternalLink, Copy, Check } from 'lucide-react';

const contractAddress = '3ncKmE36uHoNd8BkK3HcWWCk8kBmAq6Wpq1Qo7Hcpump';
const pumpFunUrl = `https://pump.fun/coin/${contractAddress}`;

export const NationalTreasury: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main id="treasury" className="min-h-[75vh] bg-archival-grid px-4 py-10 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <section className="overflow-hidden border border-grid-line bg-paper-raised shadow-lg">
          <div className="border-b border-grid-line bg-treasury-dark px-5 py-8 text-paper-raised sm:px-10 sm:py-12">
            <div className="mb-5 inline-flex items-center gap-2 border border-emerald-400/50 px-3 py-1.5 font-mono text-xs font-bold tracking-widest text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              $NUTS IS LIVE
            </div>
            <h2 className="font-slab text-3xl font-black uppercase tracking-tight sm:text-5xl">NUTS on Pump.fun</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-paper-secondary sm:text-base">
              The token is live. Open its Pump.fun page for the current market cap, liquidity, price, volume, chart, and trading information. Market data changes continuously; the figures shown there are the live source.
            </p>
            <a
              href={pumpFunUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 bg-official-red px-6 py-3 font-sans text-sm font-bold uppercase tracking-wider text-paper-raised transition-colors hover:bg-official-darkRed"
            >
              Trade / View Live Market <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-0 sm:grid-cols-2">
            <div className="border-b border-grid-line p-5 sm:border-r sm:p-8">
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink-muted">Token</div>
              <div className="mt-2 font-slab text-2xl font-bold text-ink-primary">NUTS</div>
            </div>
            <div className="border-b border-grid-line p-5 sm:p-8">
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink-muted">Network</div>
              <div className="mt-2 text-lg font-semibold text-ink-primary">Solana</div>
            </div>
            <div className="border-b border-grid-line p-5 sm:border-b-0 sm:border-r sm:p-8">
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink-muted">Market cap & liquidity</div>
              <div className="mt-2 text-sm text-ink-secondary">View current values on Pump.fun</div>
            </div>
            <div className="border-b border-grid-line p-5 sm:border-b-0 sm:p-8">
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink-muted">Market status</div>
              <div className="mt-2 inline-flex items-center gap-2 font-semibold text-emerald-800">
                <span className="h-2 w-2 rounded-full bg-emerald-600" /> Live
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-8">
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink-muted">Solana contract address</div>
            <div className="mt-2 flex items-center justify-between gap-3 border border-grid-line bg-paper-base p-3">
              <code className="min-w-0 break-all text-xs text-ink-primary sm:text-sm">{contractAddress}</code>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex shrink-0 items-center gap-1.5 px-2 py-1 font-mono text-xs font-bold uppercase text-ink-secondary hover:text-ink-primary"
                aria-label="Copy contract address"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-ink-muted">
              The Republic of Nutlandis is a fictional community project. $NUTS is a speculative meme token, not a government-backed asset or investment guarantee. Always verify the contract before trading; you could lose your entire investment.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};
