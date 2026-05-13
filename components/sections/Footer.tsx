'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const FONT_SANS = 'var(--font-dm-sans), system-ui, sans-serif'
const FONT_SERIF = 'var(--font-cormorant), Georgia, serif'
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const linkStyle: React.CSSProperties = {
  fontFamily: FONT_SANS,
  fontSize: '13px',
  color: '#A09080',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  padding: 0,
}

export default function Footer() {
  const hoverOn = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.color = '#F5F0E8'
  }
  const hoverOff = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.color = '#A09080'
  }
  const goldHoverOn = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.color = '#C8A97E'
  }

  return (
    <footer style={{
      background: '#0A0A0A',
      borderTop: '0.5px solid #2A2A2A',
      padding: '100px 80px 60px',
    }}>

      {/* Top row — statement */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: EASE }}
        style={{ marginBottom: '80px' }}
      >
        <h2 style={{
          fontFamily: FONT_SERIF,
          fontSize: 'clamp(44px, 6vw, 88px)',
          fontWeight: 300,
          color: '#F5F0E8',
          lineHeight: 0.95,
          margin: 0,
        }}>
          Rooted in Rameshwaram.<br />
          Served with soul.
        </h2>
      </motion.div>

      {/* Middle row — 3 columns */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderTop: '0.5px solid #2A2A2A',
        paddingTop: '48px',
        marginBottom: '48px',
        gap: '40px',
      }}>

        {/* Column 1 — Logo + tagline */}
        <div style={{ flex: 1 }}>
          <Image
            src="/images/logo-light.png"
            alt="The Rameshwaram Cafe"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: '40px', display: 'block', marginBottom: '16px' }}
          />
          <p style={{ fontFamily: FONT_SANS, fontSize: '13px', color: '#A09080', lineHeight: 1.8, maxWidth: '200px', margin: 0 }}>
            A taste of South Indian soul.
          </p>
        </div>

        {/* Column 2 — Navigation */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontFamily: FONT_SANS, fontSize: '11px', color: '#C8A97E', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>
            EXPLORE
          </span>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
            {['Home', 'About', 'Menu', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                style={linkStyle}
                onMouseEnter={hoverOn}
                onMouseLeave={hoverOff}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Column 3 — Find Us */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <span style={{ fontFamily: FONT_SANS, fontSize: '11px', color: '#C8A97E', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>
            FIND US
          </span>
          <p style={{ fontFamily: FONT_SANS, fontSize: '13px', color: '#A09080', marginBottom: '20px', textAlign: 'right' }}>
            Bengaluru · Hyderabad
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a
              href="https://www.instagram.com/therameshwaramcafe"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={goldHoverOn}
              onMouseLeave={hoverOff}
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/1DBpCtL2mM/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={goldHoverOn}
              onMouseLeave={hoverOff}
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '0.5px solid #2A2A2A',
        paddingTop: '24px',
      }}>
        <span style={{ fontFamily: FONT_SANS, fontSize: '11px', color: '#A09080' }}>
          © 2025 The Rameshwaram Cafe. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#" style={{ ...linkStyle, fontSize: '11px' }} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
            Privacy Policy
          </a>
          <a href="#" style={{ ...linkStyle, fontSize: '11px' }} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
            Terms &amp; Conditions
          </a>
        </div>
      </div>

    </footer>
  )
}
