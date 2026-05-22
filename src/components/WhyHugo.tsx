import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TELEGRAM_URL, TELEGRAM_HANDLE } from '../seo/siteMeta'

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

const advantages = [
  { icon: '🔗', title: 'Hard line to Roobet VIP ops', desc: 'Hugo doesn\'t hand-off to general support. He pings the Roobet VIP desk directly — cashier holds, account flags, deposit issues get sorted by name, not ticket queue.' },
  { icon: '🪪', title: 'Verified Roobet affiliate manager', desc: 'This is not a re-skinned referral link. Hugo runs an authorised campaign account inside the Roobet partner programme, which is what unlocks negotiated rate ceilings in the first place.' },
  { icon: '🚀', title: 'Activation under 48 hours', desc: 'Forget twelve weeks of public-tier grinding. Once volume is verified, your cashback rate goes live the following Monday — most clients are settled within two business days.' },
  { icon: '🧩', title: 'Rate tuned to your mix', desc: 'A pure sportsbook bettor and a Crash-only player don\'t need the same structure. Hugo negotiates the cashback rate, the included verticals and any bet-cap relaxations to match your real wagering pattern.' },
  { icon: '📈', title: 'Cap lifts on request', desc: 'Per-bet limits on originals and slots can be raised, in some cases removed entirely, for verified VIPs working under Hugo\'s book. Standard players never get this conversation.' },
  { icon: '🔁', title: 'Quarterly rate reviews', desc: 'Volume grows, your rate grows. Every quarter Hugo revisits the percentage with the VIP team — there is genuine upside in playing through one campaign manager long-term.' },
]

export default function WhyHugo() {
  return (
    <section id="why-hugo" className="py-24 bg-roobet-card/20">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="red-badge mb-4">Why Through Hugo</span>
            <h2 className="section-heading mt-2">
              The Quiet Reason A <span className="text-roo-gradient">Campaign Manager</span> Beats
              <br />A Public Referral Link
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Public links pay one flat structure to everyone. Campaign managers negotiate. For a
              high-volume player that distinction is worth four-figure sums every single week.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <Reveal className="lg:col-span-1">
            <div className="card tilt-card border-2 border-roobet-red/40 text-center sticky top-8 shadow-red-glow-sm">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-roobet-red/30 to-roobet-gold/20 border-2 border-roobet-red/40 flex items-center justify-center mx-auto mb-4">
                <svg className="w-14 h-14 text-roobet-red glow-red" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-1 font-display">Hugo</h3>
              <div className="red-badge mb-4 mx-auto w-fit">Roobet VIP affiliate manager</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Operator of an authorised Roobet campaign account with a direct line to the VIP
                desk. Specialises in onboarding high-rolling Crash, originals and sportsbook
                players under negotiated weekly cashback structures.
              </p>
              <div className="space-y-3 text-sm text-left">
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-roobet-red-light">✓</span>
                  Authorised Roobet affiliate
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-roobet-red-light">✓</span>
                  120+ whales onboarded to date
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-roobet-red-light">✓</span>
                  Avg first-reply time under 2 hours
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-roobet-red-light">✓</span>
                  Speaks EN / FR / ES / IT
                </div>
              </div>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full mt-6 justify-center"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
                </svg>
                {TELEGRAM_HANDLE}
              </a>
            </div>
          </Reveal>

          <div className="lg:col-span-2 space-y-6">
            <Reveal className="text-slate-300 leading-relaxed space-y-4">
              <p className="text-lg">
                Tap a generic Roobet referral link and you land in exactly the same onboarding
                bucket as a casual depositor — public welcome promo, public Roo Rewards ramp,
                public support queue. There is no human reviewing your account, no one negotiating
                on your behalf, and no path to a meaningful cashback percentage in your first
                ninety days.
              </p>
              <p>
                A Roobet campaign manager sits one rung up the operator's commercial stack. It is
                a B2B partner role: the manager produces high-quality volume for Roobet, and in
                exchange Roobet's VIP team grants negotiated terms on their players' accounts.
                Hugo's relationship is with the VIP operations desk specifically — the same desk
                that signs off rate ceilings, cap lifts and reload boosts.
              </p>
              <p>
                For a player burning $200,000+ per month on Crash, slots and the sportsbook, the
                gap between public-tier rewards (effectively a 4–6% blended rebate at best) and a
                negotiated 20% lossback works out to roughly{' '}
                <strong className="text-white">$2,000–$3,000 of recovered net loss every single
                week</strong>. Over a calendar year that's not a rounding error — it's a meaningful
                portion of a year's bankroll.
              </p>
              <p>
                The non-monetary part matters too. Hugo treats each whale account like an
                independent client portfolio: weekly statements, proactive issue resolution before
                tickets even fire, and rate reviews tied to actual volume trajectory. This is what
                a real campaign-manager relationship looks like — not a referral link wearing a
                blazer.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((adv, i) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="card tilt-card hover:border-roobet-red/30 transition-colors duration-300"
                >
                  <div className="flex gap-3">
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">{adv.icon}</span>
                    <div>
                      <h4 className="font-bold text-white mb-1 font-display">{adv.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{adv.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
