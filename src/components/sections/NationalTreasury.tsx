import React, { useState } from 'react';
import { ExternalLink, Copy, Check } from 'lucide-react';

const contractAddress = '3ncKmE36uHoNd8BkK3HcWWCk8kBmAq6Wpq1Qo7Hcpump';
const pumpFunUrl = `https://pump.fun/coin/${contractAddress}`;
const socialLinks = [
  { label: 'X / Twitter', url: 'https://x.com/nutlandis' },
  { label: 'Telegram', url: 'https://t.me/nonutlandis' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@nnn.nutlandis' },
];

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

  const snapshotMetrics = [
    { label: 'Market cap', value: '$1.94K' },
    { label: '24h volume', value: '$343' },
    { label: 'Holders', value: '2' },
    { label: 'All-time high', value: '$2.25K' },
  ];

  return (
    <section
      id="treasury"
      className="w-full border-b border-black/40 bg-treasury-dark"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(242,233,215,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,233,215,0.035) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <div className="mx-auto max-w-content px-4 pb-12 pt-10 sm:px-8 sm:pb-20 sm:pt-16">
        <div className="mb-5 sm:mb-6">
          <span className="inline-block border border-official-red/70 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-official-red sm:text-[11px]">
            Department of the National Treasury
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-4 sm:space-y-5 lg:col-span-4">
            <h2 className="font-slab text-2xl font-black uppercase leading-tight text-paper-raised sm:text-4xl">
              The national reserve must be preserved.
            </h2>
            <h3 className="font-slab text-xl font-black uppercase leading-tight text-paper-raised sm:text-2xl">
              Meet $NUTS — the meme token of the Republic of Nutlandis.
            </h3>
            <p className="text-sm leading-relaxed text-paper-secondary/80">
              Nutlandis is a fictional government. $NUTS is its associated meme token. The national reserve is part of the project’s story—not a government-backed asset or a promise of returns.
            </p>
            <p className="text-sm leading-relaxed text-paper-secondary/80">
              Market figures below are transcribed from the supplied Pump.fun screenshot and may be outdated. Use the Pump.fun page for current price, market cap, liquidity, volume, and chart data.
            </p>
            <p className="text-sm font-semibold leading-relaxed text-paper-secondary/80">
              Meme tokens are highly speculative. Buyers can lose their entire investment.
            </p>
            <div className="flex flex-wrap gap-4 border-t border-paper-raised/20 pt-4">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="font-mono text-xs font-bold uppercase tracking-wider text-paper-secondary hover:text-paper-raised">
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="overflow-hidden border border-grid-line bg-paper-raised shadow-lg">
              <div className="flex flex-col justify-between gap-3 border-b border-grid-line px-4 py-4 sm:flex-row sm:items-center sm:px-6 sm:py-5">
                <div>
                  <h4 className="font-slab text-lg font-bold tracking-tight text-ink-primary sm:text-xl">$NUTS token information</h4>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-emerald-800">Live on Pump.fun · Solana</p>
                </div>
                <a href={pumpFunUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-official-red px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-paper-raised transition-colors hover:bg-official-darkRed">
                  View live market <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="grid grid-cols-2 divide-x divide-y divide-grid-line/60 sm:grid-cols-4 sm:divide-y-0">
                {snapshotMetrics.map((metric) => (
                  <div key={metric.label} className="p-4 sm:p-5">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-ink-muted sm:text-[10px]">{metric.label}</div>
                    <div className="mt-1 font-sans text-lg font-bold text-ink-primary sm:text-xl">{metric.value}</div>
                  </div>
                ))}
              </div>

              <div className="divide-y divide-grid-line/60 px-4 sm:px-6">
                <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">Liquidity / current price</span>
                  <span className="text-sm text-ink-secondary">Check the live Pump.fun market</span>
                </div>
                <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">Network</span>
                  <span className="text-sm font-semibold text-ink-primary">Solana</span>
                </div>
                <div className="py-4">
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-ink-muted">Contract address</div>
                  <div className="flex items-center justify-between gap-3 border border-grid-line bg-paper-base px-3 py-2.5">
                    <code className="min-w-0 break-all text-xs text-ink-primary sm:text-sm">{contractAddress}</code>
                    <button type="button" onClick={handleCopy} className="inline-flex shrink-0 items-center gap-1.5 px-2 py-1 font-mono text-xs font-bold uppercase text-ink-secondary hover:text-ink-primary" aria-label="Copy contract address">
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-grid-line bg-paper-base/50 px-4 py-4 sm:px-6">
                <p className="text-xs leading-relaxed text-ink-muted">
                  Screenshot metrics are a reference snapshot, not a live feed. Always verify the mint address before trading. $NUTS is a speculative meme token and could lose all value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
