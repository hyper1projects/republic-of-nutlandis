import React, { useState } from 'react';
import { OfficialStamp } from '../common/OfficialStamp';
import { CountdownTimer } from '../common/CountdownTimer';

export const NationalTreasury: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Contract address — to be updated when verified on-chain data is available
  const contractAddress: string | null = null;
  const network: string | null = null;
  const totalSupply: string | null = null;
  const distribution: string | null = null;
  const liquidity: string | null = null;
  const marketPrice: string | null = null;
  const marketCap: string | null = null;
  const tradingDestination: string | null = null;

  const handleCopy = async () => {
    if (!contractAddress) return;
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const isVerified = !!contractAddress;

  return (
    <section
      id="treasury"
      className="w-full bg-treasury-dark border-b border-black/40"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(242,233,215,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,233,215,0.035) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      {/* Top portion: headline + intro */}
      <div className="max-w-content mx-auto px-4 sm:px-8 pt-10 sm:pt-16 pb-8 sm:pb-12">

        {/* Department Badge */}
        <div className="mb-5 sm:mb-6">
          <span className="inline-block border border-official-red/70 text-official-red font-mono text-[9px] sm:text-[11px] font-semibold tracking-[0.18em] sm:tracking-[0.2em] uppercase px-2.5 sm:px-3 py-1.5 rounded-[1px]">
            DEPARTMENT OF THE NATIONAL TREASURY
          </span>
        </div>

        {/* Headline + CTA Row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 sm:gap-6 mb-6 sm:mb-8">
          <h2 className="font-slab font-black text-2xl sm:text-4xl lg:text-5xl text-paper-raised leading-[1.1] sm:leading-[1.08] tracking-tight uppercase max-w-2xl break-words">
            THE NATIONAL RESERVE MUST BE PRESERVED.
          </h2>

          <div className="flex-shrink-0 pt-0 sm:pt-1">
            <a
              href="#hero"
              className="inline-flex items-center justify-center bg-official-red hover:bg-official-darkRed text-paper-raised font-sans font-bold text-xs sm:text-sm tracking-widest uppercase px-5 sm:px-7 py-3 rounded-[1px] transition-colors active:translate-y-[1px] w-full sm:w-auto text-center"
            >
              HOLD YOUR NUTS
            </a>
          </div>
        </div>

        {/* Subtitle */}
        <p className="font-sans text-sm sm:text-base text-paper-secondary/80 max-w-lg leading-relaxed">
          National reserves are the foundation of our continued prosperity. Citizens are encouraged to uphold the national mission.
        </p>

        {/* 96-Hour Launch Countdown Dashboard */}
        <div className="mt-8 sm:mt-10">
          <CountdownTimer variant="treasury" />
        </div>
      </div>

      {/* Bottom portion: left copy + right token card */}
      <div className="max-w-content mx-auto px-4 sm:px-8 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT: Meet $NNN editorial copy (4 cols) */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5">
            <h3 className="font-slab font-black text-xl sm:text-2xl lg:text-[26px] text-paper-raised leading-tight uppercase">
              MEET $NNN — THE OFFICIAL MEME TOKEN OF THE REPUBLIC OF NUTLANDIS.
            </h3>

            <p className="font-sans text-sm text-paper-secondary/80 leading-relaxed">
              Nutlandis is a fictional government. $NNN is its associated meme token. The national reserve is our story—not a government-backed asset or a promise of returns.
            </p>

            <p className="font-sans text-sm text-paper-secondary/80 leading-relaxed">
              Verify the network, contract and trading destination before acquiring $NNN. Official destinations and market data have not yet been provided.
            </p>

            <p className="font-sans text-sm text-paper-secondary/80 leading-relaxed font-semibold">
              Meme tokens are highly speculative. Buyers can lose their entire investment.
            </p>
          </div>

          {/* RIGHT: $NNN Token Information Card (8 cols) */}
          <div className="lg:col-span-8">
            <div className="bg-paper-raised border border-grid-line shadow-lg rounded-[1px] overflow-hidden">

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 border-b border-grid-line">
                <h4 className="font-slab font-bold text-lg sm:text-xl text-ink-primary tracking-tight">
                  $NNN TOKEN INFORMATION
                </h4>

                {/* Verification Stamp */}
                <div className="flex-shrink-0 self-start">
                  {isVerified ? (
                    <OfficialStamp
                      label="TREASURY VERIFIED"
                      subLabel="NATIONAL TREASURY"
                      variant="red"
                      rotation="none"
                    />
                  ) : (
                    <div className="border border-official-red px-3 py-1.5 sm:py-2 text-center rounded-[1px]">
                      <div className="font-mono text-[10px] sm:text-[11px] font-bold text-official-red tracking-[0.12em] uppercase leading-tight">
                        AWAITING VERIFICATION
                      </div>
                      <div className="font-mono text-[8px] sm:text-[9px] text-official-red/80 tracking-widest uppercase mt-0.5">
                        NATIONAL TREASURY
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body: Data Fields Grid */}
              <div className="px-4 sm:px-6 py-4 sm:py-5 space-y-0 divide-y divide-grid-line/60">

                {/* Row 1: Token Name + Network */}
                <div className="flex flex-col sm:flex-row gap-0 sm:divide-x sm:divide-grid-line/60">
                  <div className="py-3.5 sm:pr-6 sm:w-1/2">
                    <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-1">TOKEN NAME</div>
                    <div className="font-sans text-sm font-semibold text-ink-primary">$NNN</div>
                  </div>
                  <div className="py-3.5 sm:pl-6 sm:w-1/2">
                    <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-1">NETWORK</div>
                    <div className="font-sans text-sm text-ink-secondary italic">
                      {network ?? 'Not yet provided'}
                    </div>
                  </div>
                </div>

                {/* Row 2: Contract Address */}
                <div className="py-3.5">
                  <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-2">
                    COPY CONTRACT ADDRESS
                  </div>
                  <div className="flex items-center justify-between gap-3 border border-grid-line bg-paper-base px-4 py-2.5 rounded-[1px]">
                    <span className="font-mono text-xs text-ink-secondary italic truncate">
                      {contractAddress ?? 'Contract not yet provided'}
                    </span>
                    <button
                      onClick={handleCopy}
                      disabled={!contractAddress}
                      className={`font-mono text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-[1px] transition-colors flex-shrink-0 ${
                        !contractAddress
                          ? 'text-ink-muted/50 cursor-not-allowed'
                          : copied
                          ? 'bg-emerald-700 text-white'
                          : 'text-ink-secondary hover:text-ink-primary cursor-pointer'
                      }`}
                    >
                      {copied ? 'COPIED' : 'COPY'}
                    </button>
                  </div>
                </div>

                {/* Row 3: Total Supply + Distribution */}
                <div className="flex flex-col sm:flex-row gap-0 sm:divide-x sm:divide-grid-line/60">
                  <div className="py-3.5 sm:pr-6 sm:w-1/2">
                    <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-1">TOTAL SUPPLY</div>
                    <div className="font-sans text-sm text-ink-secondary italic">
                      {totalSupply ?? 'Not yet provided'}
                    </div>
                  </div>
                  <div className="py-3.5 sm:pl-6 sm:w-1/2">
                    <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-1">DISTRIBUTION / ALLOCATION</div>
                    <div className="font-sans text-sm text-ink-secondary italic">
                      {distribution ?? 'Awaiting verification'}
                    </div>
                  </div>
                </div>

                {/* Row 4: Liquidity + Market Price */}
                <div className="flex flex-col sm:flex-row gap-0 sm:divide-x sm:divide-grid-line/60">
                  <div className="py-3.5 sm:pr-6 sm:w-1/2">
                    <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-1">LIQUIDITY</div>
                    <div className="font-sans text-sm text-ink-secondary italic">
                      {liquidity ?? 'Awaiting verification'}
                    </div>
                  </div>
                  <div className="py-3.5 sm:pl-6 sm:w-1/2">
                    <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-1">CURRENT MARKET PRICE</div>
                    <div className="font-sans text-sm text-ink-secondary italic">
                      {marketPrice ?? 'Live source not connected'}
                    </div>
                  </div>
                </div>

                {/* Row 5: Market Cap (full width) */}
                <div className="py-3.5">
                  <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-1">MARKET CAPITALISATION</div>
                  <div className="font-sans text-sm text-ink-secondary italic">
                    {marketCap ?? 'Awaiting verification'}
                  </div>
                </div>

                {/* Row 6: Trading Destination + Social Icons */}
                <div className="py-3.5">
                  <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-2">
                    BUY / TRADING DESTINATION
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="font-sans text-sm sm:text-base font-medium text-ink-primary">
                      {tradingDestination ?? 'Verified destination pending'}
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3 text-ink-secondary flex-shrink-0">
                      <a href="https://x.com/nonutlandis?s=11" target="_blank" rel="noopener noreferrer" className="hover:text-ink-primary transition-colors p-1" title="Official Telegraph (X)">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                      <a href="https://t.me/nonutlandis" target="_blank" rel="noopener noreferrer" className="hover:text-ink-primary transition-colors p-1" title="Encrypted Relay (Telegram)">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                        </svg>
                      </a>
                      <a href="https://www.tiktok.com/@nutlandis" target="_blank" rel="noopener noreferrer" className="hover:text-ink-primary transition-colors p-1" title="National Broadcast Reel (TikTok)">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Card Footer: status bar + Acquire button */}
              <div className="border-t border-grid-line px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 bg-paper-base/40">
                <span className="font-mono text-[10px] sm:text-[11px] text-ink-muted tracking-widest uppercase text-center sm:text-left">
                  {isVerified
                    ? 'VERIFIED // OFFICIAL TREASURY RECORD'
                    : 'UNAVAILABLE / TOKEN DETAILS UNVERIFIED'}
                </span>

                <a
                  href={tradingDestination ?? '#treasury'}
                  target={tradingDestination ? '_blank' : undefined}
                  rel={tradingDestination ? 'noopener noreferrer' : undefined}
                  className={`inline-flex items-center justify-center gap-2 font-sans font-bold text-xs sm:text-[13px] tracking-wider uppercase px-5 py-2.5 rounded-[1px] transition-colors active:translate-y-[1px] w-full sm:w-auto text-center ${
                    isVerified
                      ? 'bg-official-red hover:bg-official-darkRed text-paper-raised'
                      : 'bg-official-red/80 hover:bg-official-red text-paper-raised'
                  }`}
                >
                  <span>ACQUIRE NATIONAL RESERVE</span>
                  <span>→</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
