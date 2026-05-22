import { useState, useMemo, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TELEGRAM_URL } from '../seo/siteMeta'

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function formatUSD(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1000) return `$${(n / 1000).toFixed(1)}k`
  return `$${Math.round(n).toLocaleString()}`
}

/** Smooth roll-up between previous and next value over `ms`. */
function useRollingNumber(value: number, ms = 600) {
  const [display, setDisplay] = useState(value)
  const prev = useRef(value)
  useEffect(() => {
    const from = prev.current
    const to = value
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / ms)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(from + (to - from) * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
      else prev.current = to
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [value, ms])
  return display
}

type Tier = 'big' | 'whale'

type GameProfile = {
  id: 'slots' | 'crash' | 'sports'
  label: string
  emoji: string
  rtpLossPct: number // expected long-run loss share of wagered volume
  hint: string
}

const profiles: GameProfile[] = [
  { id: 'slots', label: 'Slots & Live', emoji: '🎰', rtpLossPct: 0.04, hint: 'Pragmatic, Hacksaw, Nolimit City — ~4% blended edge.' },
  { id: 'crash', label: 'Crash & Originals', emoji: '🚀', rtpLossPct: 0.01, hint: 'Roobet Crash, Mines, Plinko — ~1% provable edge.' },
  { id: 'sports', label: 'Sportsbook', emoji: '⚽', rtpLossPct: 0.045, hint: 'Pre-match + live + parlays — ~4.5% effective margin.' },
]

export default function Calculator() {
  const [monthlyWager, setMonthlyWager] = useState(120_000)
  const [profile, setProfile] = useState<GameProfile>(profiles[0])
  const [tier, setTier] = useState<Tier>('big')

  const lossbackPct = tier === 'whale' ? 0.20 : 0.10

  const results = useMemo(() => {
    const monthlyLoss = monthlyWager * profile.rtpLossPct
    const monthlyLossback = monthlyLoss * lossbackPct
    const weeklyLossback = monthlyLossback / 4.33
    const annualLossback = monthlyLossback * 12
    const effectiveLoss = profile.rtpLossPct * (1 - lossbackPct) * 100
    return { monthlyLoss, monthlyLossback, weeklyLossback, annualLossback, effectiveLoss }
  }, [monthlyWager, profile, lossbackPct])

  const rollWeekly = useRollingNumber(results.weeklyLossback)
  const rollMonthly = useRollingNumber(results.monthlyLossback)
  const rollAnnual = useRollingNumber(results.annualLossback)
  const rollLoss = useRollingNumber(results.monthlyLoss)
  const rollEffective = useRollingNumber(results.effectiveLoss)

  return (
    <section id="calculator" className="py-24 bg-roobet-dark">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="red-badge mb-4">Run The Numbers</span>
            <h2 className="section-heading mt-2">
              Roobet Lossback Calculator — <span className="text-roo-gradient">See Your Weekly Return</span>
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Plug in your real monthly wager, pick the game mix you actually play, then watch the
              negotiated rate translate into weekly, monthly and annual recovered cash.
            </p>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="card space-y-8">
              <h3 className="text-xl font-bold text-white font-display">Your playing profile</h3>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="wager-slider" className="text-slate-300 font-medium">Monthly wager volume</label>
                  <span className="text-roobet-red-light font-bold text-lg num">{formatUSD(monthlyWager)}</span>
                </div>
                <input
                  id="wager-slider"
                  className="roo-range w-full"
                  type="range"
                  min={5000}
                  max={500000}
                  step={5000}
                  value={monthlyWager}
                  onChange={e => setMonthlyWager(Number(e.target.value))}
                  aria-valuemin={5000}
                  aria-valuemax={500000}
                  aria-valuenow={monthlyWager}
                  aria-label="Monthly wager volume in US dollars"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1 num">
                  <span>$5k</span>
                  <span>$500k</span>
                </div>
              </div>

              <div>
                <p className="text-slate-300 font-medium mb-3">Game profile</p>
                <div className="grid grid-cols-3 gap-3">
                  {profiles.map(p => (
                    <button
                      key={p.id}
                      onClick={() => setProfile(p)}
                      className={`py-3 px-3 rounded-xl border-2 font-bold text-sm transition-all duration-200 ${
                        profile.id === p.id
                          ? 'border-roobet-red bg-roobet-red/10 text-roobet-red-light'
                          : 'border-roobet-border text-slate-400 hover:border-slate-500'
                      }`}
                      aria-pressed={profile.id === p.id}
                    >
                      <span className="text-xl block mb-1" aria-hidden="true">{p.emoji}</span>
                      <span className="font-display">{p.label}</span>
                      <div className="num text-xs font-normal mt-0.5 opacity-80">
                        ~{(p.rtpLossPct * 100).toFixed(1)}% edge
                      </div>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-3 leading-relaxed">{profile.hint}</p>
              </div>

              <div>
                <p className="text-slate-300 font-medium mb-3">Negotiated lossback tier</p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTier('big')}
                    className={`py-3 px-4 rounded-xl border-2 font-bold text-sm transition-all duration-200 font-display ${
                      tier === 'big'
                        ? 'border-roobet-red bg-roobet-red/10 text-roobet-red-light'
                        : 'border-roobet-border text-slate-400 hover:border-slate-500'
                    }`}
                    aria-pressed={tier === 'big'}
                  >
                    Big Player
                    <div className="text-xs font-normal mt-0.5">10% rate</div>
                  </button>
                  <button
                    onClick={() => setTier('whale')}
                    className={`py-3 px-4 rounded-xl border-2 font-bold text-sm transition-all duration-200 font-display ${
                      tier === 'whale'
                        ? 'border-roobet-red bg-roobet-red/10 text-roobet-red-light'
                        : 'border-roobet-border text-slate-400 hover:border-slate-500'
                    }`}
                    aria-pressed={tier === 'whale'}
                  >
                    Whale Tier 🐳
                    <div className="text-xs font-normal mt-0.5">20% rate</div>
                  </button>
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                * Figures are statistical expectations using long-run edge assumptions. Real weeks
                fluctuate — that's the entire point of a percentage-of-net-loss structure.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-4">
              <div className="card border-2 border-roobet-red/50 bg-roobet-red/5">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-display">
                  <span className="w-8 h-8 rounded-lg bg-roobet-red/20 flex items-center justify-center text-roobet-red-light">🦘</span>
                  Your lossback projection
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-roobet-border/40">
                    <span className="text-slate-400">Expected monthly net loss</span>
                    <span className="text-white font-bold text-lg num">{formatUSD(rollLoss)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-roobet-border/40">
                    <span className="text-slate-400">Weekly lossback ({(lossbackPct * 100).toFixed(0)}%)</span>
                    <span className="text-roobet-red-light font-extrabold text-xl num">{formatUSD(rollWeekly)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-roobet-border/40">
                    <span className="text-slate-400">Monthly lossback total</span>
                    <span className="text-roobet-gold font-extrabold text-xl num">{formatUSD(rollMonthly)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-roobet-border/40">
                    <span className="text-slate-400">Annual lossback projection</span>
                    <span className="text-roobet-red-light font-extrabold text-2xl num">{formatUSD(rollAnnual)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-400">Effective edge after lossback</span>
                    <span className="text-white font-bold text-lg num">
                      {rollEffective.toFixed(2)}%
                      <span className="text-xs text-roobet-red-light ml-1">(vs {(profile.rtpLossPct * 100).toFixed(1)}%)</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="card relative overflow-hidden text-center py-8">
                <div className="absolute inset-0 gold-shimmer-bg opacity-50" aria-hidden="true" />
                <div className="relative">
                  <div className="num text-5xl font-extrabold text-roo-gradient mb-2">
                    {formatUSD(rollAnnual)}
                  </div>
                  <div className="text-slate-200 font-medium font-display">Projected yearly recovery</div>
                  <div className="mt-3 text-sm text-slate-300">
                    That's{' '}
                    <strong className="text-white num">{formatUSD(rollMonthly)}/month</strong>{' '}
                    sliding straight back into your Roobet balance — in crypto, no rollover.
                  </div>
                </div>
              </div>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
                </svg>
                Claim My Deal
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
