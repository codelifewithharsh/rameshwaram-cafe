'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const FONT_SANS = 'var(--font-dm-sans), system-ui, sans-serif'
const FONT_SERIF = 'var(--font-cormorant), Georgia, serif'
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/therameshwaramcafe',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1DBpCtL2mM/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@TheRameshwaramCafe',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/rameshwaramcafe',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

const exploreLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Timeline', href: '#timeline' },
]
const discoverLinks = [
  { label: 'Awards', href: '#awards' },
  { label: 'Reviews', href: '#testimonials' },
]
const cities = ['Bengaluru', 'Hyderabad', 'Pune']

export default function Footer() {
  return (
    <footer className="site-footer" style={{ background: '#0A0A0A', borderTop: '0.5px solid #1A1A1A' }}>
      {/* ROW 1 — Big Statement */}
      <motion.div
        className="site-footer__statement"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: EASE }}
        style={{ padding: '100px 80px 80px' }}
      >
        <h2 style={{ fontFamily: FONT_SERIF, fontSize: 'clamp(52px, 7vw, 100px)', fontWeight: 300, color: '#F5F0E8', lineHeight: 0.95, letterSpacing: '-0.02em', margin: 0 }}>
          Rooted in Rameshwaram.
          <br />
          Served with soul.
        </h2>
      </motion.div>

      {/* ROW 2 — Main Grid */}
      <div className="site-footer__grid" style={{ borderTop: '0.5px solid #1A1A1A', padding: '60px 80px', display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', gap: '60px', alignItems: 'start' }}>
        {/* Column 1 — Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0, duration: 0.7, ease: EASE }}
        >
          <a href="/" style={{ display: 'inline-block', marginBottom: '20px' }}>
            <Image src="/images/name-logo.svg" height={48} width={200} alt="Logo" />
          </a>
          <p style={{ fontFamily: FONT_SANS, fontSize: '13px', color: '#A09080', lineHeight: 1.8, maxWidth: '200px', margin: '0 0 28px 0' }}>
            A taste of South Indian soul.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  border: '0.5px solid #2A2A2A',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#A09080',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#C8A97E'
                  el.style.color = '#C8A97E'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#2A2A2A'
                  el.style.color = '#A09080'
                }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Column 2 — Explore */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
        >
          <span style={{ display: 'block', fontFamily: FONT_SANS, fontSize: '11px', color: '#C8A97E', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '24px' }}>
            EXPLORE
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {exploreLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: '14px',
                  color: '#A09080',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = '#F5F0E8'
                  el.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = '#A09080'
                  el.style.transform = 'translateX(0px)'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Column 3 — Discover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
        >
          <span style={{ display: 'block', fontFamily: FONT_SANS, fontSize: '11px', color: '#C8A97E', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '24px' }}>
            DISCOVER
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {discoverLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: '14px',
                  color: '#A09080',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = '#F5F0E8'
                  el.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = '#A09080'
                  el.style.transform = 'translateX(0px)'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Column 4 — Find Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
            {cities.map((city, i) => (
              <span key={i} style={{ fontFamily: FONT_SANS, fontSize: '14px', color: '#F5F0E8' }}>
                {city}
              </span>
            ))}
          </div>
          <div style={{ width: '32px', height: '0.5px', background: '#2A2A2A', marginBottom: '24px' }} />
          <span style={{ display: 'block', fontFamily: FONT_SANS, fontSize: '11px', color: '#C8A97E', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>
            HOURS
          </span>
          <span style={{ fontFamily: FONT_SANS, fontSize: '13px', color: '#A09080' }}>
            Open 24 hours · 7 days
          </span>
        </motion.div>
      </div>

      {/* ROW 4 — Bottom Bar */}
      <div className="site-footer__bottom" style={{ borderTop: '0.5px solid #1A1A1A', padding: '20px 80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: FONT_SANS, fontSize: '11px', color: '#3A3A3A' }}>
          © 2026 The Rameshwaram Cafe. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: '20px', fontFamily: FONT_SANS, fontSize: '11px', color: '#3A3A3A' }}>
          {['Privacy Policies', 'Terms & Conditions', "FAQ's"].map((item, i) => (
            <a
              key={i}
              href="#"
              style={{
                color: '#3A3A3A',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = '#A09080'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = '#3A3A3A'
              }}
            >
              {item}
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontFamily: FONT_SANS, fontSize: '11px', color: '#3A3A3A' }}>
          Designed & Developed by
          <a
            href="https://codelifewithharsh.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: FONT_SANS,
              fontSize: '11px',
              color: '#C8A97E',
              letterSpacing: '0.06em',
              marginLeft: '6px',
              borderBottom: '0.5px solid #C8A97E44',
              paddingBottom: '1px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.color = '#F5F0E8'
              el.style.borderBottomColor = '#F5F0E8'
              const strong = el.querySelector('span')
              if (strong) strong.style.color = '#C8A97E'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.color = '#C8A97E'
              el.style.borderBottomColor = '#C8A97E44'
              const strong = el.querySelector('span')
              if (strong) strong.style.color = '#F5F0E8'
            }}
          >
            codelifewith<span style={{ color: '#F5F0E8', transition: 'color 0.3s ease' }}>harsh</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
