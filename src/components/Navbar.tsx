'use client'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Industries', href: '#industries' },
  { label: 'Insights', href: '#insights' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={scrolled ? styles.navScrolled : styles.nav}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <span className={styles.logoText}>Elevate Trade</span>
        </a>
        <div className={styles.links}>
          {links.map(l => (
            <a key={l.href} href={l.href} className={styles.link}>{l.label}</a>
          ))}
        </div>
        <a href="#contact" className={styles.cta}>Get a Quote</a>
        <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={open ? styles.burgerLineOpen1 : styles.burgerLine} />
          <span className={open ? styles.burgerLineOpen2 : styles.burgerLine} />
          <span className={open ? styles.burgerLineOpen3 : styles.burgerLine} />
        </button>
      </div>
      {open && (
        <div className={styles.mobileMenu}>
          {links.map(l => (
            <a key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className={styles.mobileCta} onClick={() => setOpen(false)}>Get a Quote</a>
        </div>
      )}
    </nav>
  )
}
