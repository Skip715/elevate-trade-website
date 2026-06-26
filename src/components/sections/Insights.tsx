import styles from './Insights.module.css'

export default function Insights() {
  return (
    <section className={styles.section} id="insights">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Resources</span>
          <h2 className={`display-heading ${styles.heading}`}>Procurement Insights</h2>
          <p className={styles.sub}>
            Expert guides and tools to help you streamline your global sourcing strategy
            and prepare for successful factory-direct negotiations.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.cardDark}`}>
            <div className={styles.darkIconWrap}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </div>
            <h3 className={styles.darkTitle}>Free RFQ Templates</h3>
            <p className={styles.darkDesc}>
              Provided by Smartsheet, download comprehensive Excel and PDF templates
              to ensure you never miss a critical detail.
            </p>
            
              href="https://www.smartsheet.com/content/rfq-templates"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.darkBtn}
            >
              Get Templates
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.tag}>Guide</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Gartner: Sourcing Leaders</h3>
            <p className={styles.cardDesc}>
              Insights and actionable advice for procurement leaders evaluating top-tier IT manufacturers.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.tag}>Market Insight</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>McKinsey: Supply Chains</h3>
            <p className={styles.cardDesc}>
              Navigating global export regulations, risk mitigation, and emerging tech manufacturing hubs.
            </p>
          </div>
        </div>

        <div className={styles.proTip}>
          <div className={styles.tipIcon}>💡</div>
          <div>
            <h4 className={styles.tipTitle}>Pro Tip: Timing Your RFQ</h4>
            <p className={styles.tipText}>
              Submitting bids at the end of a manufacturer's fiscal quarter can often yield up to 8% deeper
              discounts as global representatives look to hit their final sales quotas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
