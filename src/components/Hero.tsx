import { motion } from 'framer-motion'
import { TELEGRAM_URL, TELEGRAM_HANDLE } from '../seo/siteMeta'

function MeshBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="blob animate-blob-drift-1"
        style={{
          width: '520px',
          height: '520px',
          top: '-120px',
          left: '-100px',
          background: 'radial-gradient(circle at 30% 30%, #ff3358 0%, rgba(255,51,88,0.0) 65%)',
        }}
      />
      <div
        className="blob animate-blob-drift-2"
        style={{
          width: '460px',
          height: '460px',
          top: '20%',
          right: '-120px',
          background: 'radial-gradient(circle at 60% 40%, #ffd166 0%, rgba(255,209,102,0.0) 65%)',
          opacity: 0.4,
        }}
      />
      <div
        className="blob animate-blob-drift-3"
        style={{
          width: '420px',
          height: '420px',
          bottom: '-140px',
          left: '40%',
          background: 'radial-gradient(circle at 50% 50%, #ff7849 0%, rgba(255,120,73,0.0) 60%)',
          opacity: 0.45,
        }}
      />
    </div>
  )
}

const trustBadges = [
  { icon: '🦘', label: 'Curacao Licensed' },
  { icon: '🔥', label: 'Streamer Favorite' },
  { icon: '⚡', label: 'Instant Crypto Cashout' },
  { icon: '🎲', label: 'Provably Fair Originals' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-roobet-darker"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-roobet-hero" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,209,102,0.5) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />
      <MeshBlobs />

      <div className="relative z-10 section-container py-24 sm:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: -16, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.55 }}
          className="mb-6 flex justify-center"
        >
          <span className="red-badge text-base px-5 py-2">
            🦘 Roobet VIP Cashback — Whitelist Open This Week
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] font-display"
        >
          Reclaim Up To{' '}
          <span className="text-roo-gradient">20% Of Your</span>
          <br />
          Roobet Losses —
          <br />
          <span className="text-roo-gradient">Every Single Week</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          High-volume players on Roobet.com can now claw back as much as{' '}
          <strong className="text-white">20% of their net weekly losses</strong> — crypto-paid,
          zero rollover, no clawback clauses. It's the private cashback line Hugo opens for whales
          who burn serious volume on Crash, Mines, Plinko and live tables.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg animate-red-pulse w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
            </svg>
            Lock In My Roobet Cashback ↗
          </a>
          <a
            href="#how-it-works"
            className="btn-secondary text-lg w-full sm:w-auto justify-center"
          >
            Walk Me Through It ↓
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 bg-roobet-card/60 border border-roobet-border px-4 py-2 rounded-full text-sm text-slate-300 backdrop-blur-sm"
            >
              <span aria-hidden="true">{badge.icon}</span>
              {badge.label}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-roobet-border shadow-[0_0_60px_rgba(255,51,88,0.18)]">
            <div className="aspect-video bg-roobet-card flex items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/2Q1L_w_M9sI?autoplay=0&mute=1&controls=1&rel=0"
                title="Roobet Casino Walkthrough"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-500 text-center">
            Roobet.com — crash, mines, crypto casino loved by the world's biggest streamers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ duration: 1.6, delay: 1.1, repeat: Infinity }}
          className="mt-16 flex justify-center"
          aria-hidden="true"
        >
          <svg className="w-6 h-6 text-roobet-red glow-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>

        <p className="sr-only">
          Contact Hugo, Roobet VIP affiliate manager, on Telegram: {TELEGRAM_HANDLE}
        </p>
      </div>
    </section>
  )
}
