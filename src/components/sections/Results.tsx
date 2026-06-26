import styles from './Results.module.css'

const cases = [
  {
    category: 'IT Refresh',
    title: 'Fortune 500 Data Centre Overhaul',
    desc: 'Procured 500+ custom-configured Dell servers directly from the factory, resulting in an 18% cost reduction and 4-week lead time improvement.',
    result: 'Result: $1.2M Saved',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format&fit=crop',
  },
  {
    category: 'China Sourcing',
    title: 'Global Retailer Supply Chain Hub',
    desc: 'Established a secure sourcing bridge for high-value office equipment with localised QC teams in Shenzhen.',
    result: '30% Margin Increase',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80&auto=format&fit=crop',
  },
]

export default function Results() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={`display-heading ${styles.heading}`}>Proven Results</h2>
          <a href="#contact" className={styles.viewAll}>
            View Case Studies
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <div className={styles.grid}>
          {cases.map((c, i) => (
            <div key={i} className={styles.card}>
              <img src={c.image} alt={c.title} className={styles.image} />
              <div className={styles.body}>
                <span className={styles.category}>{c.category}</span>
                <h3 className={styles.title}>{c.title}</h3>
                <p className={styles.desc}>{c.desc}</p>
                <div className={styles.result}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M23 6l-9.5 9.5-5-5L1 18"/>
                    <path d="M17 6h6v6"/>
                  </svg>
                  {c.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
