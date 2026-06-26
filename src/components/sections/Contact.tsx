'use client'
import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.leftCol}>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.45)' }}>Get In Touch</span>
            <h2 className={`display-heading ${styles.heading}`}>
              Ready To Optimise<br />Your<br />
              <span className={styles.accent}>Procurement?</span>
            </h2>
            <p className={styles.sub}>
              Submit your requirements and our specialists will initiate our outreach
              process. Expected response time: &lt; 24 hours.
            </p>

            <div className={styles.contactDetails}>
              <a href="mailto:info@elevate-trade.com" className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLabel}>Inquiries</div>
                  <div className={styles.contactValue}>info@elevate-trade.com</div>
                </div>
              </a>

              <a href="tel:03330540423" className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .98h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLabel}>Global Desk</div>
                  <div className={styles.contactValue}>0333 054 0423</div>
                </div>
              </a>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLabel}>Registered Address</div>
                  <div className={styles.contactValue}>1 &amp; 2 Studley Court Mews, Guildford Road, Surrey, GU24 8EB</div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLabel}>Opening Hours</div>
                  <div className={styles.contactValue}>Mon–Fri, 8:00am – 6:00pm</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>Message Sent!</h3>
                <p className={styles.successText}>
                  Thank you — a specialist will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>First Name</label>
                    <input className={styles.input} type="text" placeholder="First Name" />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Last Name</label>
                    <input className={styles.input} type="text" placeholder="Last Name" />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>
                    Email <span className={styles.required}>*</span>
                  </label>
                  <input className={styles.input} type="email" placeholder="Email Address" required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Subject</label>
                  <input className={styles.input} type="text" placeholder="Subject" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>
                    Project Requirements <span className={styles.required}>*</span>
                  </label>
                  <textarea className={styles.textarea} placeholder="Your Message" rows={5} required />
                </div>
                <button type="submit" className={`btn-primary ${styles.submit}`} disabled={loading}>
                  {loading ? 'Sending…' : 'Submit Form'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
