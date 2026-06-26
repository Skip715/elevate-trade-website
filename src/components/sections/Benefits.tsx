import styles from './Benefits.module.css'

const benefits = [
  {
    icon: '💰',
    title: 'Institutional Pricing',
    desc: 'Access negotiated rates typically reserved for Fortune 500 corporations through our collective buying power.',
  },
  {
    icon: '⚡',
    title: 'Accelerated Lead Times',
    desc: 'Our manufacturer relationships allow us to bypass standard queues and secure priority production slots.',
  },
  {
    icon: '🛡️',
    title: 'Ironclad Compliance',
    desc: 'Full visibility into ethical sourcing and regulatory compliance across every step of the supply chain.',
  },
  {
    icon: '📊',
    title: 'Data-Driven Sourcing',
    desc: 'Real-time market analytics to identify the optimal time to strike a deal with global suppliers.',
  },
]

export default function Benefits() {
  return (
    <section className={styles.section} id="benefits">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.leftCol}>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.45)' }}>Why Elevate Trade</span>
            <h2 className={`display-heading ${styles.heading}`}>
              Engineer A<br />Competitive<br />
              <span className={styles.accent}>Advantage.</span>
            </h2>
            <p className={styles.body}>
              We don't just find suppliers; we act as an extension of your procurement
              department, leveraging aggregate data to secure the best possible outcomes.
            </p>
            <div className={styles.stat}>
              <span className={styles.statNum}>22%</span>
              <span className={styles.statLabel}>Average Client Savings</span>
            </div>
          </div>

          <div className={styles.rightCol}>
            {benefits.map((b, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardIcon}>{b.icon}</div>
                <div>
                  <h3 className={styles.cardTitle}>{b.title}</h3>
                  <p className={styles.cardDesc}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
