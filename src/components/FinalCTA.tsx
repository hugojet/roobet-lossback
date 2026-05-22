import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TELEGRAM_URL, TELEGRAM_HANDLE } from '../seo/siteMeta'

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="claim" className="py-24 relative overflow-hidden bg-roobet-darker">
      <div className="absolute inset-0 gold-shimmer-bg opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 bg-roobet-red-glow opacity-25" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,209,102,0.6) 1px, transparent 1px)`,
          backgroundSize: '34px 34px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 section-container text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.75 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-roobet-red/15 border border-roobet-red/40 text-roobet-red-light px-5 py-2 rounded-full text-sm font-semibold font-display">
              <span className="w-2 h-2 rounded-full bg-roobet-red animate-pulse" aria-hidden="true" />
              Whitelist closes when this week's slot quota fills
            </span>
          </div>

          <h2 className="section-heading mb-6">
            One Telegram Message Stands Between You And A{' '}
            <span className="text-roo-gradient">Roobet Whale Tier Deal</span>
          </h2>

          <p className="text-slate-200 text-lg leading-relaxed mb-8">
            If you're regularly clearing $15,000+ in monthly wager on Roobet — across Crash,
            Mines, slots or the sportsbook — every week you spend without a negotiated cashback
            structure is a week of recoverable losses left on the table. That math doesn't change
            because you haven't sent the first message yet.
          </p>
          <p className="text-slate-200 text-lg leading-relaxed mb-10">
            Hugo's programme returns up to 20% of your net weekly losses in crypto, with no
            rollover, no game restrictions and no clawback. Add a dedicated VIP host, cap lifts
            on request, a transparent Sunday-night statement and a 48-hour activation — and
            you've got the cleanest commercial structure available to a serious Roobet player.
            The only thing left to do is open the chat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xl px-10 py-5 animate-red-pulse"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
              </svg>
              Lock In My Roobet Cashback ↗
            </a>
          </div>

          <p className="text-slate-300 text-sm">
            Questions before you reach out?{' '}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-roobet-red-light hover:text-roobet-gold underline transition-colors font-semibold"
            >
              Open a chat with Hugo at {TELEGRAM_HANDLE}
            </a>
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-12 text-sm text-slate-300">
            {[
              '✓ Zero rollover, ever',
              '✓ Full privacy on tier & volume',
              '✓ Active Monday of next week',
              '✓ Crypto-only weekly payouts',
            ].map(item => (
              <span key={item} className="font-display">{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
