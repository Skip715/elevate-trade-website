import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.bg} />

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          B2B Procurement Excellence
        </div>

        <h1 className={`display-heading ${styles.heading}`}>
          Global Partners<br />
          For<br />
          <span className={styles.accent}>Smart Buying.</span>
        </h1>

        <p className={styles.sub}>
          We source, negotiate, and manage discounts with manufacturers to<br />
          deliver faster lead times and better terms. Your strategic bridge<br />
          to global markets.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className={`btn-primary ${styles.btnLarge}`}>
            Get a Free Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contact" className={`btn-outline ${styles.btnLarge}`}>
            Consultation
          </a>
        </div>
      </div>

      <div className={styles.trustedBar}>
        <div className="container">
          <p className={styles.trustedLabel}>Trusted by Industry Leaders</p>
          <div className={styles.logos}>
            {['HP', 'Canon', 'Dell', 'Lenovo'].map(brand => (
              <span key={brand} className={styles.brandName}>{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
