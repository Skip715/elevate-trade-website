.section {
  padding: var(--section-pad) 0;
  background: var(--navy);
}

.inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.leftCol {
  position: sticky;
  top: 100px;
}

.heading {
  font-size: clamp(40px, 5vw, 64px);
  color: var(--white);
  margin-bottom: 20px;
  line-height: 1.0;
}

.accent {
  color: var(--orange);
}

.body {
  font-size: 15px;
  color: rgba(255,255,255,0.65);
  line-height: 1.75;
  margin-bottom: 40px;
  max-width: 380px;
}

.stat {
  display: inline-flex;
  flex-direction: column;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 16px;
  padding: 24px 32px;
}

.statNum {
  font-family: var(--font-display);
  font-size: 52px;
  font-weight: 800;
  color: var(--white);
  line-height: 1;
}

.statLabel {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--orange);
  margin-top: 4px;
}

.rightCol {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 24px;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.card:hover {
  background: rgba(255,255,255,0.09);
  border-color: rgba(255,255,255,0.2);
}

.cardIcon {
  font-size: 28px;
  margin-bottom: 14px;
  display: block;
}

.cardTitle {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--white);
  margin-bottom: 10px;
}

.cardDesc {
  font-size: 13px;
  color: rgba(255,255,255,0.6);
  line-height: 1.6;
}

@media (max-width: 900px) {
  .inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .leftCol {
    position: static;
  }
}

@media (max-width: 500px) {
  .rightCol {
    grid-template-columns: 1fr;
  }
}
