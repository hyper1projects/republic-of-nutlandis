import React, { useState } from 'react';
import { OfficialStamp } from '../common/OfficialStamp';
import { CountdownTimer } from '../common/CountdownTimer';

export const NationalTreasury: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const contractAddress = '3ncKmE36uHoNd8BkK3HcWWCk8kBmAq6Wpq1Qo7Hcpump';
  const network = 'Solana';
  const totalSupply = '1,000,000,000 $NUTS';
  const distribution = 'Pump.fun launch';
  const liquidity = 'Verify live liquidity on pump.fun';
  const marketPrice = '$0.00000194';
  const marketCap = '$1.94K';
  const tradingDestination = 'https://pump.fun/coin/3ncKmE36uHoNd8BkK3HcWWCk8kBmAq6Wpq1Qo7Hcpump';

  const handleCopy = async () => {
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
              className="inline-flex items-center justify-center bg-official-red hover:bg-official-darkRed text-paper-raised font-sans font-bold text-xs sm:text-sm tracking-widest uppercase px-5 sm:px-6 py-2.5 sm:py-3 rounded-[1px] transition-colors"
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
              Verify the network, contract and trading destination before acquiring $NUTS. Market information can change rapidly.
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
                  ) : null}
                </div>
              </div>

              <div className="px-4 sm:px-6 py-4 sm:py-5 space-y-0 divide-y divide-grid-line/60">
                <div className="flex flex-col sm:flex-row gap-0 sm:divide-x sm:divide-grid-line/60">
                  <div className="py-3.5 sm:pr-6 sm:w-1/2">
                    <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-1">TOKEN NAME</div>
                    <div className="font-sans text-sm font-semibold text-ink-primary">NUTS</div>
                  </div>
                  <div className="py-3.5 sm:pl-6 sm:w-1/2">
                    <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-1">NETWORK</div>
                    <div className="font-sans text-sm text-ink-secondary">{network}</div>
                  </div>
                </div>

                <div className="py-3.5">
                  <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-2">
                    COPY CONTRACT ADDRESS
                  </div>
                  <div className="flex items-center justify-between gap-3 border border-grid-line bg-paper-base px-4 py-2.5 rounded-[1px]">
                    <span className="font-mono text-xs text-ink-secondary truncate">
                      {contractAddress}
                    </span>
                    <button
                      onClick={handleCopy}
                      className={`font-mono text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-[1px] transition-colors flex-shrink-0 ${
                        copied
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
                    <div className="font-sans text-sm text-ink-secondary">{totalSupply}</div>
                  </div>
                  <div className="py-3.5 sm:pl-6 sm:w-1/2">
                    <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-1">DISTRIBUTION / ALLOCATION</div>
                    <div className="font-sans text-sm text-ink-secondary">{distribution}</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-0 sm:divide-x sm:divide-grid-line/60">
                  <div className="py-3.5 sm:pr-6 sm:w-1/2">
                    <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-1">LIQUIDITY</div>
                    <div className="font-sans text-sm text-ink-secondary">{liquidity}</div>
                  </div>
                  <div className="py-3.5 sm:pl-6 sm:w-1/2">
                    <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-1">CURRENT MARKET PRICE</div>
                    <div className="font-sans text-sm text-ink-secondary">{marketPrice}</div>
                  </div>
                </div>

                <div className="py-3.5">
                  <div className="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-1">MARKET CAPITALISATION</div>
                  <div className="font-sans text-sm text-ink-secondary">{marketCap}</div>
                </div>

                <div class="py-3.5">
                  <div class="font-mono text-[10px] text-ink-muted tracking-widest uppercase mb-2">
                    BUY / TRADING DESTINATION
                  </div>
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="font-mono text-xs sm:text-sm font-medium text-ink-primary break-all">
                      {tradingDestination}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-grid-line px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 bg-paper-base/40">
                <span className="font-mono text-[10px] sm:text-[11px] text-ink-muted tracking-widest uppercase text-center sm:text-left">
                  VERIFIED // OFFICIAL TREASURY RECORD
                </span>

                <a
                  href={tradingDestination}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-sans font-bold text-xs sm:text-[13px] tracking-wider uppercase px-5 py-2.5 rounded-[1px] transition-colors active:scale-[0.98] bg-official-red hover:bg-official-darkRed text-paper-raised"
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
