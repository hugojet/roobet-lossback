import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadialBarChart, RadialBar, PolarAngleAxis, Legend,
} from 'recharts'

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

// Cumulative recovered cashback over a year, by tier × volume
function buildAreaData() {
  return Array.from({ length: 12 }, (_, i) => {
    const m = i + 1
    return {
      month: `M${m}`,
      'Big Player · $40k/mo': Math.round(40000 * 0.04 * 0.10 * m),
      'Big Player · $100k/mo': Math.round(100000 * 0.04 * 0.10 * m),
      'Whale · $200k/mo': Math.round(200000 * 0.04 * 0.20 * m),
      'Whale · $400k/mo': Math.round(400000 * 0.04 * 0.20 * m),
    }
  })
}

const areaData = buildAreaData()

// RTP-equivalent comparison shown on a radial chart (higher fill = more retained capital)
const radialData = [
  { name: 'No deal', value: 0, fill: '#475569' },
  { name: 'Public promo', value: 20, fill: '#94a3b8' },
  { name: 'Roo Rewards (top tier)', value: 35, fill: '#ff7849' },
  { name: 'Cashback 10% (Big Player)', value: 50, fill: '#ff5470' },
  { name: 'Cashback 20% (Whale)', value: 100, fill: '#ff3358' },
]

type AreaPayload = { name: string; value: number; color: string }
const AreaTooltip = ({ active, payload, label }: { active?: boolean; payload?: AreaPayload[]; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-roobet-card border border-roobet-border rounded-xl p-4 shadow-card text-sm">
        <p className="text-white font-bold mb-2 font-display">Month {label?.slice(1)}</p>
        {payload.map((entry) => (
          <div key={entry.name} className="flex items-center gap-2 mb-1">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-slate-400">{entry.name}:</span>
            <span className="text-white font-semibold num">
              ${entry.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default function Charts() {
  return (
    <section id="the-math" className="py-24 bg-roobet-dark">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="red-badge mb-4">The Maths</span>
            <h2 className="section-heading mt-2">
              Cashback Compounds —{' '}
              <span className="text-roo-gradient">Why The Numbers Justify The Conversation</span>
            </h2>
            <p className="section-subheading mx-auto mt-4">
              The lossback rate doesn't change variance in any one session, but it permanently
              shifts your long-run expected value. Here are the two visualisations every whale
              should sit with before turning down the deal.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Reveal>
            <div className="card h-full">
              <h3 className="text-xl font-bold text-white mb-2 font-display">
                Twelve-month cumulative cashback
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Stacked recovery curves across four representative wager/tier combinations,
                assuming a ~4% blended edge on slots-heavy play.
              </p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={areaData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                    <defs>
                      <linearGradient id="grad-a" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#94a3b8" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#94a3b8" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="grad-b" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ff7849" stopOpacity={0.6} />
                        <stop offset="100%" stopColor="#ff7849" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="grad-c" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ff3358" stopOpacity={0.7} />
                        <stop offset="100%" stopColor="#ff3358" stopOpacity={0.05} />
                      </linearGradient>
                      <linearGradient id="grad-d" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ffd166" stopOpacity={0.85} />
                        <stop offset="100%" stopColor="#ffd166" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2a3349" />
                    <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                    <YAxis tick={{ fill: '#94a3b8', fontSize: 10 }} tickFormatter={v => `$${(v / 1000).toFixed(0)}k`} />
                    <Tooltip content={<AreaTooltip />} />
                    <Legend wrapperStyle={{ color: '#cbd5e1', fontSize: '11px' }} />
                    <Area type="monotone" dataKey="Big Player · $40k/mo" stroke="#94a3b8" strokeWidth={2} fill="url(#grad-a)" />
                    <Area type="monotone" dataKey="Big Player · $100k/mo" stroke="#ff7849" strokeWidth={2} fill="url(#grad-b)" />
                    <Area type="monotone" dataKey="Whale · $200k/mo" stroke="#ff3358" strokeWidth={2.5} fill="url(#grad-c)" />
                    <Area type="monotone" dataKey="Whale · $400k/mo" stroke="#ffd166" strokeWidth={3} fill="url(#grad-d)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card h-full">
              <h3 className="text-xl font-bold text-white mb-2 font-display">
                Relative retained capital by reward path
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Plotted as percentage of the maximum-recovery scenario (Whale Tier 20% set to 100).
                Reads as "how much of the upside each reward structure actually captures".
              </p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    innerRadius="20%"
                    outerRadius="95%"
                    barSize={14}
                    data={radialData}
                    startAngle={180}
                    endAngle={-180}
                  >
                    <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                    <RadialBar
                      background={{ fill: '#1a2235' }}
                      dataKey="value"
                      cornerRadius={6}
                    />
                    <Legend
                      iconSize={10}
                      layout="vertical"
                      verticalAlign="middle"
                      align="right"
                      wrapperStyle={{ color: '#cbd5e1', fontSize: '11px', lineHeight: 1.6 }}
                    />
                    <Tooltip
                      formatter={(value: number) => [`${value}% of max recovery`, '']}
                      contentStyle={{
                        backgroundColor: '#1a2235',
                        border: '1px solid #2a3349',
                        borderRadius: 12,
                      }}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4 font-display">
              Why long-run cashback beats every other Roobet reward — the maths in plain language
            </h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Start with what a deposit bonus actually does. A 100% match with a 35× rollover
                requirement is, in expectation, negative-value the moment you accept it: at
                ~4% blended edge you expect to lose roughly $1.40 in clearing the wagering for
                every dollar of bonus you were granted. The promotion is a customer-acquisition
                tool, not a retention reward for someone already producing volume.
              </p>
              <p>
                Lossback flips the architecture. There is no rollover, no game restriction list,
                no time pressure. If your monthly wager is $150,000 across slots and originals at
                a 4% blended edge, your statistical loss expectation is roughly $6,000 per month.
                A 20% Whale cashback wires $1,200 of that back unconditionally — equivalent to
                playing on a{' '}
                <strong className="text-white num">3.2% effective edge instead of 4%</strong>.
                One simple percentage swap that, on this volume, compounds to roughly{' '}
                <strong className="text-roobet-red-light num">$14,400 of recovered capital per
                year</strong>.
              </p>
              <p>
                The radial visualisation above shows that distance starkly: every other reward
                path (public promo, top-tier Roo Rewards, even a 10% Big Player rate) captures
                only a fraction of what the negotiated 20% Whale structure makes available. The
                area chart shows the same effect in dollars over time — by month twelve a
                $400k/month Whale has accumulated more cashback than most players will ever earn
                in raw winnings from a comparable bankroll.
              </p>
              <p>
                None of this changes individual-session variance — a brutal Crash run is still a
                brutal Crash run. What it changes is the multi-month expectancy on the bankroll
                you bring to Roobet, and that's the only metric that matters when you're playing
                at this volume.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
