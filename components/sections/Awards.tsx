'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const FONT_SANS = 'var(--font-dm-sans), system-ui, sans-serif'
const FONT_SERIF = 'var(--font-cormorant), Georgia, serif'
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const awardsRow1 = [
  'Best New QSR — South Awards',
  'Food Connoisseurs Award',
  'Radio City Business Icon',
  'Best Restaurant Award',
  'Best Emerging Brand',
  'The New Indian Express',
  'Best Quick Service Restaurant',
  'Iconic Traditional Vegetarian Cafe',
]

const awardsRow2 = [...awardsRow1].reverse()

function AwardItem({ text }: { text: string }) {
  return (
    <span style={{
      fontFamily: FONT_SANS,
      fontSize: '13px',
      color: '#A09080',
      letterSpacing: '0.06em',
      padding: '0 48px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '16px',
      whiteSpace: 'nowrap',
      flexShrink: 0,
    }}>
      <span style={{ color: 'rgba(200,169,126,0.22)', fontSize: '10px' }}>✦</span>
      {text}
    </span>
  )
}

export default function Awards() {
  const [row1Paused, setRow1Paused] = useState(false)
  const [row2Paused, setRow2Paused] = useState(false)

  return (
    <section id="awards" className="awards-section" style={{ background: '#0A0A0A', padding: '120px 0' }}>
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      {/* Header */}
      <motion.div
        className="awards-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: EASE }}
        style={{ padding: '0 80px', marginBottom: '80px' }}
      >
        <span style={{ display: 'block', fontFamily: FONT_SANS, fontSize: '11px', color: '#C8A97E', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '20px' }}>
          RECOGNITION
        </span>
        <h2 style={{ fontFamily: FONT_SERIF, fontSize: 'clamp(36px, 4.5vw, 60px)', fontWeight: 300, color: '#F5F0E8', margin: 0 }}>
          Recognition beyond borders.
        </h2>
      </motion.div>

      {/* Row 1 — scrolls left */}
      <div
        style={{ overflow: 'hidden', marginBottom: '24px' }}
        onMouseEnter={() => setRow1Paused(true)}
        onMouseLeave={() => setRow1Paused(false)}
      >
        <div style={{
          display: 'inline-flex',
          animation: 'marquee-left 28s linear infinite',
          animationPlayState: row1Paused ? 'paused' : 'running',
        }}>
          {[...awardsRow1, ...awardsRow1].map((award, i) => (
            <AwardItem key={i} text={award} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div
        style={{ overflow: 'hidden' }}
        onMouseEnter={() => setRow2Paused(true)}
        onMouseLeave={() => setRow2Paused(false)}
      >
        <div style={{
          display: 'inline-flex',
          animation: 'marquee-right 28s linear infinite',
          animationPlayState: row2Paused ? 'paused' : 'running',
        }}>
          {[...awardsRow2, ...awardsRow2].map((award, i) => (
            <AwardItem key={i} text={award} />
          ))}
        </div>
      </div>
    </section>
  )
}
