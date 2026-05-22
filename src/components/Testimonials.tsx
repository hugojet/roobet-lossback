import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

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

type Testimonial = {
  quote: string
  username: string
  location: string
  flag: string
  tier: 'Big Player' | 'Whale Tier'
  game: string
  stars: number
}

const testimonials: Testimonial[] = [
  {
    quote: `I'd been grinding Crash and Mines on Roobet for the better part of a year before a friend mentioned Hugo's set-up. Took maybe forty minutes from first message to "deal active starting Monday". My first lossback Monday hit $310 in USDT after a rough Sunday — felt like getting half a hand back. Now it's just part of the weekly rhythm.`,
    username: 'J.M.',
    location: 'Toronto, Canada',
    flag: '🇨🇦',
    tier: 'Big Player',
    game: 'Crash + Mines',
    stars: 5,
  },
  {
    quote: `Pure sportsbook player here — heavy on football parlays and tennis live. Most lossback structures don't even cover sportsbook losses, which was a deal-breaker every other time I looked into this. Hugo's whale-tier agreement includes my sportsbook book in the net-loss calc. That detail alone is worth two grand a month for me.`,
    username: 'E.A.',
    location: 'Stockholm, Sweden',
    flag: '🇸🇪',
    tier: 'Whale Tier',
    game: 'Sportsbook',
    stars: 5,
  },
  {
    quote: `What I value is the transparency. Sunday night I get a clean PDF: total wagered, total returned, net loss, exact percentage applied, USDT amount. No "trust me" black box. After eight months on the deal my actual recovered lossback is within 1% of what Hugo originally projected. That kind of accuracy is rare.`,
    username: 'R.G.',
    location: 'Monterrey, Mexico',
    flag: '🇲🇽',
    tier: 'Big Player',
    game: 'Slots + Live blackjack',
    stars: 5,
  },
  {
    quote: `Was burned by a "VIP host" elsewhere last year — basically a glorified referral link with extra steps. Hugo is the opposite. He answered detailed questions about how the rate is set, what happens during downswings, how withdrawals get prioritised. Five months in as whale-tier and the deal has paid for itself many times over. Genuinely changed my long-term math.`,
    username: 'F.B.',
    location: 'Milan, Italy',
    flag: '🇮🇹',
    tier: 'Whale Tier',
    game: 'Slots + Crash + Sportsbook',
    stars: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-roobet-gold' : 'text-slate-600'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length)
    }, 5500)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section id="testimonials" className="py-24 bg-roobet-darker">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="red-badge mb-4">Field Reports</span>
            <h2 className="section-heading mt-2">
              What Hugo's <span className="text-roo-gradient">Whales & Big Players</span> Say
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Unedited feedback from active clients running real volume on Roobet.com.
              Names and exact wager numbers are abbreviated for privacy at each client's request.
            </p>
          </div>
        </Reveal>

        <Reveal className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.97, filter: 'blur(6px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
                transition={{ duration: 0.45 }}
                className="card border-2 border-roobet-border p-8"
              >
                <div className="text-6xl text-roobet-red/25 font-serif leading-none mb-2" aria-hidden="true">"</div>
                <blockquote className="text-slate-200 text-lg leading-relaxed mb-6">
                  {testimonials[active].quote}
                </blockquote>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-roobet-red/10 border border-roobet-red/30 flex items-center justify-center text-2xl" aria-hidden="true">
                      {testimonials[active].flag}
                    </div>
                    <div>
                      <div className="text-white font-bold">{testimonials[active].username}</div>
                      <div className="text-slate-500 text-sm">
                        {testimonials[active].location} · {testimonials[active].game}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <StarRating count={testimonials[active].stars} />
                    <span className="red-badge text-xs mt-2 inline-block">{testimonials[active].tier}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActive(i)
                    if (intervalRef.current) clearInterval(intervalRef.current)
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === active ? 'bg-roobet-red w-8 shadow-red-glow-sm' : 'w-2.5 bg-slate-600 hover:bg-slate-500'
                  }`}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`card tilt-card text-left transition-all duration-300 cursor-pointer ${
                i === active
                  ? 'border-roobet-red/60 shadow-red-glow-sm'
                  : 'hover:border-roobet-border/80'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl" aria-hidden="true">{t.flag}</span>
                <div>
                  <div className="text-white font-semibold text-sm">{t.username}</div>
                  <div className="text-slate-500 text-xs">{t.location}</div>
                </div>
              </div>
              <StarRating count={t.stars} />
              <p className="text-slate-400 text-xs mt-3 leading-relaxed line-clamp-3">
                {t.quote}
              </p>
              <span className="red-badge text-xs mt-3 inline-block">{t.tier}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
