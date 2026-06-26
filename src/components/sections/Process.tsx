import styles from './Process.module.css'

const steps = [
  { num: '01', title: 'Discovery', desc: 'Deep dive into technical specs and volume requirements.' },
  { num: '02', title: 'Outreach', desc: 'Tapping our global network of tier-1 manufacturers.' },
  { num: '03', title: 'Negotiation', desc: 'Multi-round bidding to drive down pricing and lead times.' },
  { num: '04', title: 'Agreement', desc: 'Formalising terms and securing factory allocation.' },
  { num: '05', title: 'Aftercare', desc: 'Delivery logistics, warranty support, and QC checks.' },
]

export default function Process() {
  return (
    <section className={styles.section} id="process">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">How It Works</span>
          <h2 className={`display-heading ${styles.heading}`}>The Workflow</h2>
          <p className={styles.sub}>A systematic approach to global procurement.</p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepTop}>
                <span className={styles.num}>{step.num}</span>
                {i < steps.length - 1 && <div className={styles.line} />}
              </div>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.desc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
