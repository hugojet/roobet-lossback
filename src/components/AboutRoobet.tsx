import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function useCounter(target: number, inView: boolean, duration = 2400) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      setCount(Math.floor(target * easeOutCubic(t)))
      if (t < 1) raf = requestAnimationFrame(tick)
      else setCount(target)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])
  return count
}

function AnimatedCounter({ value, prefix = '', suffix, label }: { value: number; prefix?: string; suffix: string; label: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useCounter(value, inView)
  return (
    <div ref={ref} className="card tilt-card text-center py-8">
      <div className="num text-4xl font-extrabold text-roo-gradient">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-slate-400 mt-2 font-medium">{label}</div>
    </div>
  )
}

const cryptos = [
  { name: 'Bitcoin', symbol: 'BTC', color: '#F7931A' },
  { name: 'Ethereum', symbol: 'ETH', color: '#627EEA' },
  { name: 'Tether', symbol: 'USDT', color: '#26A17B' },
  { name: 'USD Coin', symbol: 'USDC', color: '#2775CA' },
  { name: 'Litecoin', symbol: 'LTC', color: '#BFBBBB' },
  { name: 'Solana', symbol: 'SOL', color: '#9945FF' },
  { name: 'Tron', symbol: 'TRX', color: '#EF0027' },
  { name: 'Dogecoin', symbol: 'DOGE', color: '#C2A633' },
]

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

export default function AboutRoobet() {
  return (
    <section id="about-roobet" className="py-24 bg-roobet-card/20">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="red-badge mb-4">The Playground</span>
            <h2 className="section-heading mt-2">
              Roobet.com Is The <span className="text-roo-gradient">Crash-Native Crypto Casino</span>
              <br />Built For Players Who Bet Loud
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Before you accept a single cashback dollar, you should know exactly which platform
              your bankroll is going through — and why Roobet earned its reputation in the first place.
            </p>
          </div>
        </Reveal>

        <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <AnimatedCounter value={2019} suffix="" label="Year Roobet went live" />
          <AnimatedCounter value={1} prefix="$" suffix="B+" label="Annual wagered volume" />
          <AnimatedCounter value={2} suffix="M+" label="Registered players" />
          <AnimatedCounter value={4000} suffix="+" label="Slots, originals & live tables" />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <Reveal>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">
                <strong className="text-white">Roobet.com</strong> launched in 2019 under Raw
                Entertainment N.V., and within eighteen months it had cemented itself as the
                go-to crypto casino for the streamer economy. Where most online casinos chase
                low-stakes traffic, Roobet leaned hard into{' '}
                <strong className="text-white">live broadcasts, big-bet content, and proprietary
                originals</strong> like Crash, Mines, Towers and Plinko — games designed to play
                fast and stream beautifully.
              </p>
              <p>
                The platform runs on a{' '}
                <strong className="text-white">Curacao eGaming licence</strong> and operates
                exclusively in crypto. Bitcoin, Ethereum, Litecoin, USDT, USDC, Solana, Tron and
                Dogecoin all settle on-chain, so deposits and withdrawals cleared by the cashier
                hit your wallet within minutes rather than business days. There is no fiat
                conversion middle layer, no banking choke point, and KYC is held to the bare
                regulatory minimum for VIP-tier players.
              </p>
              <p>
                Roobet's library blends in-house games with thousands of third-party slots from
                providers such as Pragmatic Play, Nolimit City, Hacksaw Gaming, Push Gaming and
                Evolution Live. The proprietary originals are{' '}
                <strong className="text-white">provably fair</strong> — every Crash multiplier,
                every Mines layout, every Plinko drop is cryptographically auditable using the
                seed pair Roobet publishes after each session. For data-driven players, this is
                non-negotiable.
              </p>
              <p>
                The site grew alongside its sportsbook arm and a celebrated streamer partnership
                programme that pulled in some of the biggest gambling personalities on Twitch and
                Kick. Watching those broadcasts is what put Roobet in front of millions of viewers,
                but it's the underlying product — fast cashier, low-friction deposits, deep game
                catalogue — that retained them as long-term players.
              </p>
              <p>
                For high rollers, Roobet's combination of{' '}
                <strong className="text-white">streamer-grade game variety, near-instant crypto
                rails, sportsbook + casino under one wallet, and a VIP affiliate channel that
                actually negotiates</strong> is genuinely rare in the market. The Roobet lossback
                deal Hugo brokers turns that already-strong proposition into something that pencils
                out mathematically for anyone serious about long-term volume.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="space-y-6">
            {[
              { icon: '🧮', title: 'Provably Fair Originals', desc: 'Crash, Mines, Towers, Plinko and Dice all expose their server-seed/client-seed pair so every outcome is verifiable post-roll. No room for opaque RNG.' },
              { icon: '🪙', title: '8 Crypto Networks Native', desc: 'BTC, ETH, USDT, USDC, LTC, SOL, TRX and DOGE settle directly. Withdrawals usually clear under 10 minutes once Hugo unlocks your VIP cashier limits.' },
              { icon: '🎰', title: '4,000+ Games & Sportsbook', desc: 'Slots from Pragmatic, Nolimit City, Hacksaw; live tables from Evolution; a full sportsbook on the same wallet so cashback covers both verticals.' },
              { icon: '🛡️', title: 'Curacao Licensed Operator', desc: 'Operated by Raw Entertainment N.V. under Antillephone licence — recognised throughout the crypto-gambling industry, with responsible-play tools built in.' },
            ].map((feature) => (
              <div key={feature.title} className="card tilt-card flex gap-4">
                <span className="text-3xl flex-shrink-0" aria-hidden="true">{feature.icon}</span>
                <div>
                  <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl overflow-hidden border border-roobet-border">
              <div className="aspect-video bg-roobet-card">
                <iframe
                  src="https://www.youtube.com/embed/2Q1L_w_M9sI?rel=0&modestbranding=1"
                  title="Roobet Platform Walkthrough"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="bg-roobet-card p-3 text-center text-sm text-slate-500">
                Roobet.com — platform tour
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <h3 className="text-center text-lg font-semibold text-slate-300 mb-6 font-display">
            Crypto rails supported on every cashback payout
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {cryptos.map((crypto) => (
              <div
                key={crypto.symbol}
                className="flex items-center gap-3 bg-roobet-card border border-roobet-border px-4 py-3 rounded-xl"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black"
                  style={{ backgroundColor: crypto.color + '33', color: crypto.color }}
                  aria-hidden="true"
                >
                  {crypto.symbol.slice(0, 2)}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{crypto.symbol}</div>
                  <div className="text-slate-500 text-xs">{crypto.name}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
