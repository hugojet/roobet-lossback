import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { faqs, type FaqItem } from '../data/faqs'

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

function FAQItem({ faq, index }: { faq: FaqItem; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      viewport={{ once: true }}
      className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
        open ? 'border-roobet-red/50 bg-roobet-red/5' : 'border-roobet-border'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left bg-roobet-card/80 hover:bg-roobet-card transition-colors duration-200"
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="font-semibold text-white pr-2 font-display">{faq.q}</span>
        <span
          className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg transition-all duration-300 ${
            open
              ? 'bg-roobet-red text-white rotate-45 shadow-red-glow-sm'
              : 'border border-roobet-border text-roobet-red-light'
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="region"
          >
            <div className="px-6 pb-6 text-slate-300 leading-relaxed border-t border-roobet-border/50 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-roobet-card/15">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <span className="red-badge mb-4">FAQ</span>
            <h2 className="section-heading mt-2">
              Honest Answers To The{' '}
              <span className="text-roo-gradient">Eleven Questions Whales Always Ask First</span>
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Everything that comes up in a typical first Telegram exchange — rates, eligibility,
              payout mechanics, sportsbook coverage, privacy. Answered before you have to type
              the question.
            </p>
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
