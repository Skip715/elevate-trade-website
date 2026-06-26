import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                </svg>
              </div>
              <span className={styles.logoText}>Elevate Trade</span>
            </div>
            <p className={styles.tagline}>
              Precision sourcing. Institutional pricing.<br />
              Global connectivity. The gold standard<br />
              in industrial procurement.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.social} aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" className={styles.social} aria-label="Twitter / X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Company</h4>
              <a href="#" className={styles.colLink}>About Us</a>
              <a href="#services" className={styles.colLink}>Services</a>
              <a href="#industries" className={styles.colLink}>Industries</a>
            </div>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Resources</h4>
              <a href="#" className={styles.colLink}>Case Studies</a>
              <a href="#insights" className={styles.colLink}>Templates</a>
              <a href="#insights" className={styles.colLink}>Blog</a>
            </div>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Legal</h4>
              <a href="#" className={styles.colLink}>Privacy</a>
              <a href="#" className={styles.colLink}>Terms</a>
              <a href="#" className={`${styles.colLink} ${styles.colLinkOrange}`}>Compliance</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© 2026 Elevate Trade Logistics. All rights reserved.</p>
          <p className={styles.built}>Built for Industrial Precision.</p>
        </div>
      </div>
    </footer>
  )
}
