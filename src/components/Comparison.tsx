import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
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

type Cell = { value: string; highlight?: boolean }
type Row = { feature: string; hugo: Cell; public: Cell; roo: Cell }

const rows: Row[] = [
  {
    feature: 'Headline cashback rate',
    hugo: { value: 'Up to 20% weekly', highlight: true },
    public: { value: 'Promo only', highlight: false },
    roo: { value: '5%–8% at top tier', highlight: false },
  },
  {
    feature: 'Dedicated VIP host',
    hugo: { value: 'Hugo, named', highlight: true },
    public: { value: 'None assigned', highlight: false },
    roo: { value: 'Generic host pool', highlight: false },
  },
  {
    feature: 'Per-bet cap relaxation',
    hugo: { value: 'Negotiable, often removed', highlight: true },
    public: { value: 'Standard caps', highlight: false },
    roo: { value: 'Minor lifts at high tier', highlight: false },
  },
  {
    feature: 'Off-menu reload boosts',
    hugo: { value: 'Yes, case-by-case', highlight: true },
    public: { value: 'Public promos only', highlight: false },
    roo: { value: 'Occasional tier bonuses', highlight: false },
  },
  {
    feature: 'Time to activation',
    hugo: { value: '24 – 48 hours', highlight: true },
    public: { value: 'Instant but flat', highlight: false },
    roo: { value: '6 – 12 weeks to climb', highlight: false },
  },
  {
    feature: 'Rollover on cashback',
    hugo: { value: 'Zero', highlight: true },
    public: { value: '30× – 50× standard', highlight: false },
    roo: { value: 'Partial on tier bonuses', highlight: false },
  },
  {
    feature: 'Settlement cadence',
    hugo: { value: 'Weekly, auto', highlight: true },
    public: { value: 'Not applicable', highlight: false },
    roo: { value: 'Monthly drip', highlight: false },
  },
  {
    feature: 'Cashier priority',
    hugo: { value: 'VIP desk direct line', highlight: true },
    public: { value: 'Standard support queue', highlight: false },
    roo: { value: 'Tiered queue', highlight: false },
  },
  {
    feature: 'Sportsbook losses included',
    hugo: { value: 'Yes, blended in', highlight: true },
    public: { value: 'No', highlight: false },
    roo: { value: 'Limited or separate', highlight: false },
  },
]

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-roobet-darker">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="red-badge mb-4">Side By Side</span>
            <h2 className="section-heading mt-2">
              Hugo's Roobet Deal Vs.{' '}
              <span className="text-roo-gradient">Walking In Through The Front Door</span>
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Same casino, same games, same crypto rails — but radically different commercial
              terms once a campaign manager is in the loop. Below is the exact spread, feature
              by feature.
            </p>
          </div>
        </Reveal>

        {/* Header strip (visual only, no <table>) */}
        <Reveal>
          <div className="grid grid-cols-12 gap-3 mb-3 px-2">
            <div className="col-span-12 sm:col-span-3" />
            <div className="col-span-4 sm:col-span-3">
              <div className="card border-2 border-roobet-red/40 bg-roobet-red/10 text-center py-4">
                <div className="text-roobet-red-light font-extrabold text-base font-display">Hugo's Deal</div>
                <div className="text-xs text-slate-400 font-normal mt-1">via @hugo_lossback_bot</div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-3">
              <div className="card bg-roobet-card/40 text-center py-4">
                <div className="text-slate-200 font-bold text-base font-display">Public sign-up</div>
                <div className="text-xs text-slate-500 font-normal mt-1">Plain Roobet referral</div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-3">
              <div className="card bg-roobet-card/40 text-center py-4">
                <div className="text-slate-200 font-bold text-base font-display">Roo Rewards (public)</div>
                <div className="text-xs text-slate-500 font-normal mt-1">Climbing the standard ladder</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Row cards */}
        <div className="space-y-3">
          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -16, filter: 'blur(5px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              viewport={{ once: true }}
              className="grid grid-cols-12 gap-3 items-stretch"
            >
              <div className="col-span-12 sm:col-span-3 flex items-center px-4 sm:px-2 py-2">
                <span className="text-slate-200 font-medium font-display">{row.feature}</span>
              </div>
              <div className="col-span-4 sm:col-span-3">
                <div className={`card h-full text-center py-4 px-3 text-sm border-l-4 ${
                  row.hugo.highlight
                    ? 'border-l-roobet-red bg-roobet-red/5 text-roobet-red-light font-semibold'
                    : 'border-l-roobet-border text-white'
                }`}>
                  {row.hugo.value}
                </div>
              </div>
              <div className="col-span-4 sm:col-span-3">
                <div className="card h-full text-center py-4 px-3 text-sm text-slate-400">
                  {row.public.value}
                </div>
              </div>
              <div className="col-span-4 sm:col-span-3">
                <div className="card h-full text-center py-4 px-3 text-sm text-slate-400">
                  {row.roo.value}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Same casino, same games. Different commercial paperwork. If you're already producing
            volume that justifies a real Whale conversation, leaving it on the table costs four
            figures a week.
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            Talk To Hugo About The Whale Tier ↗
          </a>
        </Reveal>
      </div>
    </section>
  )
}
