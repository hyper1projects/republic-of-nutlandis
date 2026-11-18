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
      <div className="max-w-content mx-auto px-4 sm:px-8 pt-10 sm:pt-16 pb-8 sm:pb-12">
        <div className="mb-5 sm:mb-6">
          <span className="inline-block border border-official-red/70 text-official-red font-mono text-[9px] sm:text-[11px] font-semibold tracking-[0.18em] sm:tracking-[0.2em] uppercase px-2.5 sm:px-3 py-1 rounded-[1px]">
            DEPARTMENT OF THE NATIONAL TREASURY
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 sm:gap-6 mb-6 sm:mb-8">
          <h2 className="font-slab font-black text-2xl sm:text-4xl lg:text-5xl text-paper-raised leading-[1.1] sm:leading-[1.08] tracking-tight uppercase max-w-2xl break-words">
            THE NATIONAL RESERVE MUST BE PRESERVED.
          </h2>

          <div className="flex-shrink-0 pt-0 sm:pt-1">
            <a
              href="#hero"
              className="inline-flex items-center justify-center bg-official-red hover:bg-official-darkRed text-paper-raised font-sans font-bold text-xs sm:text-sm tracking-widest uppercase px-5 sm:px-6 py-2.5 sm:py-3 rounded-[1px] transition-colors active:translate-y-[1px]"
            >
              HOLD YOUR NUTS
            </a>
          </div>
        </div>

        <p className="font-sans text-sm sm:text-base text-paper-secondary/80 max-w-lg leading-relaxed">
          National reserves are the foundation of our continued prosperity. Citizens are encouraged to uphold the national mission.
        </p>

        <div className="mt-8 sm:mt-10">
          <CountdownTimer variant="treasury" />
        </div>
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-8 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 space-y-4 sm:space-y-5">
            <h3 className="font-slab font-black text-xl sm:text-2xl lg:text-[26px] text-paper-raised leading-tight uppercase">
              MEET $NUTS — THE OFFICIAL MEME TOKEN OF THE REPUBLIC OF NUTLANDIS.
            </h3>

            <p className="font-sans text-sm text-paper-secondary/80 leading-relaxed">
              Nutlandis is a fictional government. $NUTS is its associated meme token. The national reserve is our story—not a government-backed asset or a promise of returns.
            </p>

            <p className="font-sans text-sm text-paper-secondary/80 leading-relaxed">
              Verify the network, contract and trading destination before acquiring $NUTS. Official destinations and market data have not yet been provided.
            </p>

            <p className="font-sans text-sm text-paper-secondary/80 leading-relaxed font-semibold">
              Meme tokens are highly speculative. Buyers can lose their entire investment.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-paper-raised border border-grid-line shadow-lg rounded-[1px] overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 border-b border-grid-line">
                <h4 className="font-slab font-bold text-lg sm:text-xl text-ink-primary tracking-tight">
                  $NUTS TOKEN INFORMATION
                </h4>

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

              <div className="px-4 sm:px-6 py-4 sm:py-5 space-y-0 divide-y divide-grid-line/60">
                <div className="flex flex-col sm:flex-row gap-0 sm:divide-x sm:divide-grid-line/60">
                  <div className="py-3.5 sm:pr-6 sm:w-1/2">
                    <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-1">TOKEN NAME</div>
                    <div className="font-sans text-sm font-semibold text-ink-primary">$NUTS</div>
                  </div>
                  <div className="py-3.5 sm:pl-6 sm:w-1/2">
                    <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-1">NETWORK</div>
                    <div className="font-sans text-sm text-ink-secondary italic">
                      {network ?? 'Not yet provided'}
                    </div>
                  </div>
                </div>

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

                <div className="flex flex-col sm:flex-row gap-0 sm:divide-x sm:divide-grid-line/60">
                  <div className="py-3.5 sm:pr-6 sm:w-1/2">
                    <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-1">LIQUIDITY</div>
                    <div className="font-sans text-sm text-ink-secondary italic">
                      {liquidity ?? 'Awaiting verification'}
                    </div>
                  </div>
                  <div className="py-3.5 sm:pl-6 sm:w-1/2">
                    <div class="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-1">CURRENT MARKET PRICE</div>
                    <div className="font-sans text-sm text-ink-secondary italic">
                      {marketPrice ?? 'Live source not connected'}
                    </div>
                  </div>
                </div>

                <div className="py-3.5">
                  <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-1">MARKET CAPITALISATION</div>
                  <div className="font-sans text-sm text-ink-secondary italic">
                    {marketCap ?? 'Awaiting verification'}
                  </div>
                </div>

                <div className="py-3.5">
                  <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-2">
                    BUY / TRADING DESTINATION
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="font-sans text-sm sm:text-base font-medium text-ink-primary">
                      {tradingDestination ?? 'Verified destination pending'}
                    </div>

                    <div className="flex items-center gap-3 text-ink-secondary flex-shrink-0">
                      <a href="https://x.com/nonutlandis?s=11" target="_blank" rel="noopener noreferrer" className="hover:text-ink-primary transition-colors p-1" title="Official Telegraph (X)">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                      <a href="https://t.me/nonutlandis" target="_blank" rel="noopener noreferrer" className="hover:text-ink-primary transition-colors p-1" title="Encrypted Relay (Telegram)">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.13 7.19c-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.58-2.1-.58-.72 0-1.22.17-1.56.45-.34.28-.63.65-.63 1.1 0 .45.29.82.63 1.1.34.28.84.45 1.56.45.88 0 1.49-.28 1.85-.83.14-.22.2-.5.2-.83z" />
                        </svg>
                      </a>
                      <a href="https://www.tiktok.com/@nutlandis" target="_blank" rel="noopener noreferrer" className="hover:text-ink-primary transition-colors p-1" title="National Broadcast Reel (TikTok)">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.01 8.75-.01 1.23-.21 2.44-.81 3.53-.76 1.38-2.02 2.45-3.51 2.95-1.43.48-3.03.49-4.48.08-1.51-.43-2.86-1.35-3.75-2.63-.89-1.28-1.3-2.86-1.11-4.4.19-1.54.98-2.98 2.17-3.95 1.26-1.03 2.94-1.49 4.57-1.29.02 1.48.01 2.96.01 4.44-.71-.23-1.52-.1-2.12.33-.61.43-.99 1.13-.99 1.87 0 .74.38 1.44.99 1.87.61.43 1.42.56 2.13.33.72-.23 1.29-.83 1.52-1.55.11-.34.11-.69.11-1.04V.02z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

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
                  className={`inline-flex items-center justify-center gap-2 font-sans font-bold text-xs sm:text-[13px] tracking-wider uppercase px-5 py-2.5 rounded-[1px] transition-colors active:translate-y-[1px] ${
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
