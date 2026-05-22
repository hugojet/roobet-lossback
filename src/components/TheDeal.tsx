import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TELEGRAM_URL } from '../seo/siteMeta'

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
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

const steps = [
  {
    number: 1,
    title: 'DM Hugo on Telegram',
    desc: 'Open the chat at @hugo_lossback_bot, send a short intro, drop a rough volume range. Hugo handles the inbox personally and most messages get a reply inside the same business day.',
    icon: '📱',
  },
  {
    number: 2,
    title: 'Light-touch volume check',
    desc: 'No invasive KYC. Hugo just needs to see your Roobet wager history — usually two or three screenshots of your statistics tab. Enough to confirm tier eligibility, nothing more.',
    icon: '🔍',
  },
  {
    number: 3,
    title: 'Weekly settlement, paid in crypto',
    desc: 'From the following Monday onward your net losses are tallied automatically. The agreed percentage lands in your Roobet wallet in BTC/ETH/USDT — ready to withdraw or redeploy.',
    icon: '💸',
  },
]

const perks = [
  { icon: '🏟️', title: 'Sportsbook + casino combined', desc: 'Lossback applies to net losses across both verticals on one wallet — rare in the industry, big upside if you hedge across slots, originals and live betting.' },
  { icon: '🚫', title: 'Bet-cap relaxation', desc: 'Default per-bet limits get lifted for VIPs working with Hugo. Useful if you size up on Crash multipliers, Mines runs or single-leg sport plays.' },
  { icon: '🎁', title: 'Off-menu reload boosts', desc: 'Bespoke top-up bonuses negotiated case-by-case during cold streaks. These aren\'t in the public promo grid and aren\'t available through the standard cashier.' },
  { icon: '🛟', title: 'Priority cashier line', desc: 'Withdrawal stuck in review? Hugo pings the VIP desk directly. Typical resolution measured in hours, not days.' },
  { icon: '📊', title: 'Sunday-night statement', desc: 'Every Sunday you receive a transparent breakdown: total wagered, returns paid, net loss, lossback rate applied, exact crypto amount due. No mystery, no math homework.' },
  { icon: '🤫', title: 'Discretion by default', desc: 'Your tier, your terms and your volume history stay between you and Hugo. Whale clients value privacy — Hugo respects it.' },
]

export default function TheDeal() {
  return (
    <section id="how-it-works" className="py-24 bg-roobet-darker">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="red-badge mb-4">The Mechanics</span>
            <h2 className="section-heading mt-2">
              Inside Hugo's <span className="text-roo-gradient">Roobet Lossback</span> Programme
              <br />— From Handshake To Payout
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Three steps to activation, then weekly automatic settlement. No paperwork mountains,
              no months of public-tier grinding before the rate becomes meaningful.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-20 relative">
          <div className="hidden md:block absolute top-16 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-roobet-red to-transparent opacity-30" aria-hidden="true" />
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.12}>
              <div className="card tilt-card text-center relative group hover:border-roobet-red/50 transition-colors duration-300">
                <div className="w-16 h-16 rounded-2xl bg-roobet-red/10 border border-roobet-red/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-roobet-red/20 transition-colors">
                  <span className="text-3xl" aria-hidden="true">{step.icon}</span>
                </div>
                <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-roobet-red text-white text-sm font-black flex items-center justify-center shadow-red-glow-sm font-display">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{step.desc}</p>
                {step.number < 3 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-roobet-red text-2xl z-10" aria-hidden="true">→</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8 font-display">
            Tier ladder — pick the one that matches your monthly wager
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="card tilt-card border-2 border-roobet-border hover:border-roobet-red/40 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-roobet-red/5 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
              <div className="red-badge mb-4">Tier 1</div>
              <h4 className="text-2xl font-extrabold text-white mb-2 font-display">Big Player</h4>
              <div className="num text-3xl font-extrabold text-roo-gradient mb-1">10%</div>
              <div className="text-slate-400 text-sm mb-6">Weekly net-loss lossback</div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-roobet-border/50">
                  <span className="text-slate-400">Monthly wager band</span>
                  <span className="text-white font-semibold num">$15k – $150k</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-roobet-border/50">
                  <span className="text-slate-400">Sample monthly net loss</span>
                  <span className="text-white font-semibold num">$4,500</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-roobet-border/50">
                  <span className="text-slate-400">Weekly lossback (avg)</span>
                  <span className="text-roobet-red-light font-bold num">~$112</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">Annualised lossback</span>
                  <span className="text-roobet-red-light font-bold num">~$5,400</span>
                </div>
              </div>
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full mt-6 justify-center text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
                </svg>
                Claim My Deal
              </a>
            </div>

            <div className="card tilt-card border-2 border-roobet-red/60 relative overflow-hidden shadow-red-glow">
              <div className="absolute top-0 right-0 w-48 h-48 bg-roobet-red/10 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
              <div className="absolute top-4 right-4">
                <span className="bg-roobet-gold text-roobet-darker text-xs font-black px-2 py-1 rounded-full font-display">MAX RATE</span>
              </div>
              <div className="red-badge mb-4">Tier 2</div>
              <h4 className="text-2xl font-extrabold text-white mb-2 font-display">Whale Tier 🐳</h4>
              <div className="num text-3xl font-extrabold text-roo-gradient mb-1">Up to 20%</div>
              <div className="text-slate-400 text-sm mb-6">Weekly net-loss lossback</div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-roobet-border/50">
                  <span className="text-slate-400">Monthly wager band</span>
                  <span className="text-white font-semibold num">$150k+</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-roobet-border/50">
                  <span className="text-slate-400">Sample monthly net loss</span>
                  <span className="text-white font-semibold num">$9,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-roobet-border/50">
                  <span className="text-slate-400">Weekly lossback (avg)</span>
                  <span className="text-roobet-red-light font-bold num">~$450</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">Annualised lossback</span>
                  <span className="text-roobet-red-light font-bold num">~$21,600</span>
                </div>
              </div>
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full mt-6 justify-center text-sm animate-red-pulse">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
                </svg>
                Claim My Deal
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h3 className="text-2xl font-bold text-white text-center mb-8 font-display">
            What ships with every Hugo deal (alongside the percentage)
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="card tilt-card flex gap-4 hover:border-roobet-red/30 transition-colors duration-300"
              >
                <span className="text-2xl flex-shrink-0" aria-hidden="true">{perk.icon}</span>
                <div>
                  <h4 className="font-bold text-white mb-1 font-display">{perk.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{perk.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
