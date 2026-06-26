import styles from './Mission.module.css'

export default function Mission() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop"
              alt="Global operations centre"
              className={styles.image}
            />
            <div className={styles.statCard}>
              <div className={styles.statNum}>15+</div>
              <div className={styles.statLabel}>Years Experience</div>
              <div className={styles.statSub}>In global procurement</div>
            </div>
          </div>
        </div>

        <div className={styles.textCol}>
          <span className="section-label">Our Mission</span>
          <h2 className={`display-heading ${styles.heading}`}>
            Architecting Resilience<br />
            in Global Supply<br />
            Chains.
          </h2>
          <p className={styles.body}>
            Elevate Trade bridges the gap between massive industrial requirements
            and manufacturers' production lines. Our mission is to mitigate global
            supply chain risks while maximising ROI through precision negotiation.
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <div>
                <h4 className={styles.cardTitle}>Direct Access</h4>
                <p className={styles.cardText}>Strategic relationships with tier-1 manufacturers globally.</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <h4 className={styles.cardTitle}>Risk Mitigation</h4>
                <p className={styles.cardText}>Rigorous supplier vetting and compliance audits.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
