'use client'
import { useState } from 'react'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: 'What are typical lead times for factory-direct orders?',
    a: 'Depending on configuration, typical lead times range from 2–6 weeks for IT hardware and 4–8 weeks for specialised industrial equipment from China.',
  },
  {
    q: 'Do you handle Minimum Order Quantities (MOQs)?',
    a: 'Yes. While we specialise in high-volume enterprise orders, we have relationships that allow for flexible MOQs for strategic partners.',
  },
  {
    q: 'What payment terms do you typically offer?',
    a: 'For established enterprise clients, we can negotiate Net-30 to Net-60 terms. Initial pilot projects or specialised custom factory runs may require structured milestone payments.',
  },
  {
    q: 'Are you a reseller or a procurement agent?',
    a: 'We act as a strategic procurement partner. We manage the bidding and relationship, ensuring you buy at institutional prices rather than retail markups.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={`display-heading ${styles.heading}`}>FAQ</h2>
          <p className={styles.sub}>Common questions about our procurement process.</p>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}>
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <div className={`${styles.chevron} ${open === i ? styles.chevronOpen : ''}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </button>
              {open === i && (
                <div className={styles.answer}>
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
