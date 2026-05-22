import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

type CompareCardData = {
  feature: string
  lossback: string
  bonus: string
  rakeback: string
  vip: string
}

const compareCards: CompareCardData[] = [
  { feature: 'Real cash value', lossback: '100% withdrawable', bonus: 'Locked behind rollover', rakeback: 'Withdrawable', vip: 'Depends on level' },
  { feature: 'Rollover requirement', lossback: 'None', bonus: '30× – 50× standard', rakeback: 'None', vip: 'Often partial' },
  { feature: 'Calculation base', lossback: 'Net losses', bonus: 'Deposit amount', rakeback: 'Volume wagered', vip: 'Loyalty tier' },
  { feature: 'Payout cadence', lossback: 'Every Monday', bonus: 'One-shot on claim', rakeback: 'Daily / weekly', vip: 'Monthly drip' },
  { feature: 'Who can access it', lossback: 'Negotiated whales', bonus: 'Everyone', rakeback: 'Everyone', vip: 'Tier-gated' },
  { feature: 'Ceiling on value', lossback: 'Up to 20% net', bonus: 'Fixed amount', rakeback: '~1% – 4%', vip: '5% – 10%' },
]

export default function WhatIsLossback() {
  return (
    <section id="what-is-lossback" className="py-24 bg-roobet-dark">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="red-badge mb-4">Cashback 101</span>
            <h2 className="section-heading mt-2">
              Roobet Cashback Explained —{' '}
              <span className="text-roo-gradient">The Deal Behind The Deal</span>
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Lossback, rakeback, deposit bonus, loyalty rewards — they sound similar, they
              behave radically differently. Here's the version that actually moves the needle
              for high-volume Roobet players.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">
                A <strong className="text-white">Roobet lossback</strong> agreement is a private
                cashback contract: a fixed share of whatever you lose over a defined window — almost
                always seven calendar days — is wired back into your Roobet balance in
                cryptocurrency. It is the highest-EV reward instrument Roobet operates, and it sits
                permanently off the public marketing menu.
              </p>
              <p>
                To know why it matters, you have to separate four reward mechanics that most
                players blur together. Each one has a wildly different effect on your long-run
                expectancy:
              </p>
              <div className="space-y-4">
                <div className="card border-l-4 border-l-roobet-red">
                  <h3 className="font-bold text-white text-lg mb-2">Lossback (the deal)</h3>
                  <p>
                    Returns a percentage of your <em>net losses</em>. If your weekly statement
                    shows $40,000 wagered, $48,000 returned in wins and you end down $9,000 net,
                    a 20% lossback wires{' '}
                    <strong className="text-white">$1,800 back to your wallet</strong>. No rollover,
                    no minimum odds, no game restrictions. It exists to keep whales whole enough
                    to keep playing — which is why it is gated and negotiated, not advertised.
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-bold text-white text-lg mb-2">Rakeback</h3>
                  <p>
                    A small slice of the operator's edge on every wager, paid whether the bet wins
                    or loses. Useful for high-frequency players grinding low-edge games, but
                    typically capped between 1% and 4% of the actual house edge — and it does
                    nothing to soften a bad week, because it doesn't track losses at all.
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-bold text-white text-lg mb-2">Deposit / reload bonuses</h3>
                  <p>
                    Headline numbers look enormous (200% match, 100 free spins, etc.) but every
                    cent comes attached to wagering requirements — usually 30× to 50× — calibrated
                    so the expected withdrawable value lands below zero. Casinos run them because
                    they convert curious depositors, not because they reward existing volume.
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-bold text-white text-lg mb-2">Roobet's standard loyalty tiers</h3>
                  <p>
                    The public Roo Rewards programme hands out level-up bonuses, weekly boosts and
                    occasional rakeback at higher tiers. It's a fine baseline, but the meaningful
                    cashback percentages only unlock for players who already produce
                    six-figure-monthly volume — and even then the ceiling tends to plateau around
                    5% to 8%. Lossback through a campaign manager bypasses that ramp entirely.
                  </p>
                </div>
              </div>
              <p>
                The <strong className="text-white">Roobet cashback deal</strong> Hugo brokers
                short-circuits the standard loyalty ramp. Because campaign managers negotiate
                directly with Roobet's VIP operations team, you can land at the 15%–20% tier on
                day one — no grinding twelve weeks of public Roo Rewards to prove worthiness.
                On a Crash/Mines bankroll burning $150,000+ per month, the spread between a public
                5% boost and a negotiated 20% lossback can quietly add{' '}
                <strong className="text-white">$1,500–$3,000 per week</strong> of recovered
                losses back into the bankroll.
              </p>
              <p>
                That is why the{' '}
                <strong className="text-white">Roobet whale lossback</strong> structure is the
                quiet benchmark inside the high-volume crypto-gambling community. It doesn't change
                the variance of any single session, but it permanently shaves the long-run RTP
                gap — making weekly survival probabilities meaningfully higher and freeing capital
                that would otherwise be casino revenue.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="sticky top-8 space-y-8">
              <div className="card p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white mb-6 text-center font-display">
                  How a Roobet cashback week settles
                </h3>
                <svg
                  viewBox="0 0 520 280"
                  className="w-full"
                  aria-label="Horizontal money-flow diagram for Roobet weekly cashback settlement"
                >
                  <defs>
                    <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ff3358" />
                      <stop offset="100%" stopColor="#ffd166" />
                    </linearGradient>
                  </defs>

                  {/* Track line */}
                  <line x1="40" y1="140" x2="480" y2="140" stroke="#2a3349" strokeWidth="2" strokeDasharray="3 3" />

                  {/* Node 1: Player */}
                  <rect x="20" y="100" width="120" height="80" rx="14" fill="#1a2235" stroke="#ff3358" strokeWidth="2" />
                  <text x="80" y="128" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="700">YOU (WHALE)</text>
                  <text x="80" y="148" textAnchor="middle" fill="#94a3b8" fontSize="10">$150k weekly</text>
                  <text x="80" y="164" textAnchor="middle" fill="#94a3b8" fontSize="10">wager volume</text>

                  {/* Arrow 1 -> 2 */}
                  <line x1="140" y1="140" x2="190" y2="140" stroke="url(#flowGrad)" strokeWidth="2.5" />
                  <polygon points="186,134 198,140 186,146" fill="#ff7849" />
                  <text x="165" y="128" textAnchor="middle" fill="#94a3b8" fontSize="9">wagers</text>

                  {/* Node 2: Roobet */}
                  <rect x="200" y="100" width="120" height="80" rx="14" fill="#1a2235" stroke="#2a3349" strokeWidth="2" />
                  <text x="260" y="128" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="700">ROOBET.COM</text>
                  <text x="260" y="148" textAnchor="middle" fill="#94a3b8" fontSize="10">~3% house edge</text>
                  <text x="260" y="164" textAnchor="middle" fill="#94a3b8" fontSize="10">$9k net loss</text>

                  {/* Arrow 2 -> Hugo (down) */}
                  <line x1="260" y1="180" x2="260" y2="220" stroke="#ffd166" strokeWidth="2.5" strokeDasharray="4 3" />
                  <polygon points="254,216 260,228 266,216" fill="#ffd166" />
                  <text x="305" y="206" fill="#ffd166" fontSize="9">VIP team negotiation</text>

                  {/* Hugo box */}
                  <rect x="200" y="226" width="120" height="44" rx="12" fill="#1a2235" stroke="#ffd166" strokeWidth="1.5" />
                  <text x="260" y="245" textAnchor="middle" fill="#ffd166" fontSize="11" fontWeight="700">HUGO · CAMPAIGN MGR</text>
                  <text x="260" y="260" textAnchor="middle" fill="#94a3b8" fontSize="9">20% rate authorised</text>

                  {/* Arrow Roobet -> Cashback (right) */}
                  <line x1="320" y1="140" x2="370" y2="140" stroke="url(#flowGrad)" strokeWidth="2.5" />
                  <polygon points="366,134 378,140 366,146" fill="#ff3358" />
                  <text x="345" y="128" textAnchor="middle" fill="#ff7849" fontSize="9">cashback</text>

                  {/* Node 3: Cashback */}
                  <rect x="380" y="92" width="120" height="96" rx="14" fill="#ff3358" fillOpacity="0.12" stroke="#ff3358" strokeWidth="2" />
                  <text x="440" y="124" textAnchor="middle" fill="#ff5470" fontSize="13" fontWeight="800">$1,800</text>
                  <text x="440" y="142" textAnchor="middle" fill="#ffd166" fontSize="10" fontWeight="600">PAID BACK</text>
                  <text x="440" y="160" textAnchor="middle" fill="#94a3b8" fontSize="9">Monday morning</text>
                  <text x="440" y="174" textAnchor="middle" fill="#94a3b8" fontSize="9">in BTC / USDT</text>

                  {/* Curved arrow back to player */}
                  <path d="M 440 92 Q 440 40 80 50 L 80 100" stroke="#ff3358" strokeWidth="1.5" fill="none" strokeDasharray="5,3" />
                  <polygon points="74,94 80,106 86,94" fill="#ff3358" />
                  <text x="260" y="38" textAnchor="middle" fill="#ff5470" fontSize="10" fontWeight="600">back into your Roobet wallet</text>
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '0×', label: 'Rollover on cashback' },
                  { value: '20%', label: 'Max negotiated rate' },
                  { value: '7d', label: 'Settlement window' },
                  { value: '8', label: 'Crypto networks paid' },
                ].map((stat) => (
                  <div key={stat.label} className="card text-center">
                    <div className="num text-2xl font-extrabold text-roo-gradient">{stat.value}</div>
                    <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Comparison — rebuilt as stacked cards, NOT an HTML table */}
        <Reveal className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center font-display">
            Cashback vs. bonus vs. rakeback vs. loyalty — head to head
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {compareCards.map((row) => (
              <div key={row.feature} className="card tilt-card">
                <div className="text-xs uppercase tracking-wider text-slate-500 font-display mb-3">
                  {row.feature}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-baseline justify-between gap-3 py-2 px-3 rounded-lg bg-roobet-red/10 border border-roobet-red/30">
                    <span className="text-roobet-red-light font-semibold">Lossback</span>
                    <span className="text-white text-right">{row.lossback}</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 py-1.5 px-3">
                    <span className="text-slate-400">Deposit bonus</span>
                    <span className="text-slate-300 text-right">{row.bonus}</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 py-1.5 px-3">
                    <span className="text-slate-400">Rakeback</span>
                    <span className="text-slate-300 text-right">{row.rakeback}</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 py-1.5 px-3">
                    <span className="text-slate-400">Loyalty tiers</span>
                    <span className="text-slate-300 text-right">{row.vip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
