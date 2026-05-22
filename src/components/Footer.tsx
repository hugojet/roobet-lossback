import { TELEGRAM_URL, TELEGRAM_HANDLE } from '../seo/siteMeta'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about-roobet', label: 'About Roobet' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#calculator', label: 'Cashback Calculator' },
  { href: '#the-math', label: 'The Maths' },
  { href: '#faq', label: 'FAQ' },
  { href: TELEGRAM_URL, label: 'Contact Hugo', external: true },
]

const cryptos = ['BTC', 'ETH', 'USDT', 'USDC', 'LTC', 'SOL', 'TRX', 'DOGE']

export default function Footer() {
  return (
    <footer className="bg-roobet-darker border-t border-roobet-border" role="contentinfo">
      <div className="section-container py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-roobet-red/15 border border-roobet-red/30 flex items-center justify-center relative">
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-roobet-gold" aria-hidden="true" />
                <span className="text-roobet-red-light font-black text-base font-display" aria-hidden="true">R</span>
              </div>
              <span className="text-white font-extrabold text-lg font-display">roobet-lossback.com</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Negotiated cashback structures for serious Roobet.com players. Up to 20% of weekly
              net losses returned in crypto, with zero rollover, brokered by Hugo, authorised
              Roobet affiliate manager.
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-roobet-red-light text-sm hover:text-roobet-gold transition-colors font-semibold"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
              </svg>
              {TELEGRAM_HANDLE}
            </a>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-display">Sections</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-slate-400 hover:text-roobet-red-light text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-display">Crypto rails</h3>
            <div className="flex flex-wrap gap-2">
              {cryptos.map(c => (
                <span key={c} className="bg-roobet-card border border-roobet-border px-2.5 py-1 rounded-md text-xs text-slate-300 font-mono">
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <span className="red-badge text-xs">Curacao Licensed Operator</span>
            </div>
          </div>
        </div>

        <div className="border-t border-roobet-border pt-8">
          <p className="text-xs text-slate-500 leading-relaxed max-w-4xl mx-auto text-center">
            <strong className="text-slate-300">Legal notice:</strong> roobet-lossback.com is an
            independent referral resource and is not owned, operated or endorsed by Roobet.com,
            Raw Entertainment N.V., or any of their affiliated entities. This website facilitates
            introductions between high-volume players and an authorised independent Roobet affiliate
            campaign manager. Gambling carries real financial risk and is not appropriate for
            everyone. You must be of legal gambling age (18+ in most jurisdictions, 21+ where
            required) and act within the laws of your country of residence. If gambling stops
            feeling like entertainment, seek help — organisations such as GamCare
            (gamcare.org.uk), Gambling Therapy (gamblingtherapy.org) and BeGambleAware
            (begambleaware.org) offer confidential support. roobet-lossback.com accepts no
            liability for losses incurred through gambling activity on Roobet.com or any other
            platform.
          </p>
          <p className="text-xs text-slate-600 text-center mt-4">
            © {new Date().getFullYear()} roobet-lossback.com · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
