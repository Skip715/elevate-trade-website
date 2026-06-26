import styles from './Services.module.css'

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Manufacturer Procurement',
    desc: 'Direct bidding and negotiation with top-tier hardware manufacturers. We leverage volume to secure preferential lead times and institutional pricing.',
    tags: ['Volume Discounts', 'Custom Configs'],
    dark: false,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    title: 'China Sourcing',
    desc: 'Localised expertise in the world\'s largest manufacturing hub. We handle vetting, QC, and export logistics.',
    tags: ['Factory Vetting', 'Export Logistics'],
    dark: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-10 2a2 2 0 100 4 2 2 0 000-4z"/>
      </svg>
    ),
    title: 'Bid Management',
    desc: 'Competitive RFQ management that forces manufacturers to compete for your business, ensuring market-bottom pricing.',
    tags: ['RFQ Management', 'Market Pricing'],
    dark: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 17H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v5"/>
        <path d="M9 11l3 3L22 4"/>
        <path d="M16 19h6M19 16v6"/>
      </svg>
    ),
    title: 'Logistics & Global Compliance',
    desc: 'Seamless door-to-door delivery with full customs brokerage and international trade compliance management.',
    stat: '99%',
    statLabel: 'SUCCESS',
    tags: ['Customs Brokerage', 'Trade Compliance'],
    dark: true,
    accent: true,
  },
]

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">What We Do</span>
          <h2 className={`display-heading ${styles.heading}`}>
            Strategic Sourcing<br />Capabilities
          </h2>
          <p className={styles.sub}>
            End-to-end procurement solutions designed for industrial scale,<br />
            precision, and bottom-line impact.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div
              key={i}
              className={`${styles.card} ${s.dark ? styles.cardDark : styles.cardLight} ${s.accent ? styles.cardAccent : ''}`}
            >
              {s.image && !s.dark && (
                <div className={styles.cardImageWrap}>
                  <img src={s.image} alt={s.title} className={styles.cardImage} />
                </div>
              )}
              <div className={`${styles.cardBody} ${s.image ? styles.cardBodyWithImage : ''}`}>
                <div className={`${styles.iconWrap} ${s.dark ? styles.iconWrapDark : ''}`}>
                  {s.icon}
                </div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                {s.stat && (
                  <div className={styles.statRing}>
                    <span className={styles.statNum}>{s.stat}</span>
                    <span className={styles.statLabel}>{s.statLabel}</span>
                  </div>
                )}
                <div className={styles.tags}>
                  {s.tags.map(tag => (
                    <span key={tag} className={`${styles.tag} ${s.dark ? styles.tagDark : ''}`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
