'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FONT_SANS = 'var(--font-dm-sans), system-ui, sans-serif'
const FONT_SERIF = 'var(--font-cormorant), Georgia, serif'
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, amount: 0.3 } as const,
  transition: { duration: 0.8, ease: EASE },
}

export default function About() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    const track = trackRef.current
    if (!container || !track) return

    const st = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const maxX = -(track.scrollWidth - window.innerWidth)
        track.style.transform = `translateX(${self.progress * maxX}px)`
      },
    })

    return () => st.kill()
  }, [])

  return (
    <div ref={scrollContainerRef} style={{ height: '500vh', position: 'relative' }}>
      <section style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden',
        background: '#0A0A0A',
      }}>
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            width: '400vw',
            height: '100vh',
            willChange: 'transform',
          }}
        >

          {/* ── Panel 1 — The Origin ── */}
          <div style={{ minWidth: '100vw', height: '100vh', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '50%', padding: '0 80px' }}>
              <motion.div {...fadeUp}>
                <span style={{ display: 'block', fontFamily: FONT_SANS, fontSize: '11px', color: '#C8A97E', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '24px' }}>
                  OUR STORY
                </span>
                <h2 style={{ fontFamily: FONT_SERIF, fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 300, color: '#F5F0E8', lineHeight: 1.1, margin: '0 0 24px 0' }}>
                  Our Cafe is our Temple.
                </h2>
                <p style={{ fontFamily: FONT_SANS, fontSize: '15px', color: '#A09080', lineHeight: 1.9, maxWidth: '420px', margin: 0 }}>
                  Our Customers are Gods, and what we serve, is Prasadam. A premium South Indian chain serving authentic cuisine — fresh, hot, and true to tradition. From early risers to night owls, round the clock, food that feels like home.
                </p>
              </motion.div>
            </div>
            <div style={{ width: '50%', height: '100%', position: 'relative', borderLeft: '1px solid rgba(200,169,126,0.13)', overflow: 'hidden' }}>
              <Image
                src="/about/founders.png"
                alt="Founders"
                fill
                sizes="50vw"
                style={{ objectFit: 'cover', filter: 'grayscale(20%)' }}
              />
            </div>
          </div>

          {/* ── Panel 2 — The Inspiration ── */}
          <div style={{ minWidth: '100vw', height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: 0, top: '5%', height: '90%', width: '40%', opacity: 0.25, overflow: 'hidden' }}>
              <Image
                src="/about/kalam.png"
                alt=""
                fill
                sizes="40vw"
                style={{ objectFit: 'contain', objectPosition: 'right center' }}
                aria-hidden
              />
            </div>
            <div style={{ width: '55%', padding: '0 80px', position: 'relative', zIndex: 1 }}>
              <motion.div {...fadeUp}>
                <span style={{ display: 'block', fontFamily: FONT_SANS, fontSize: '11px', color: '#C8A97E', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '32px' }}>
                  INSPIRED BY
                </span>
                <blockquote style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 'clamp(28px, 3.5vw, 48px)', color: '#F5F0E8', lineHeight: 1.4, margin: '0 0 20px 0' }}>
                  "You have to dream before your dreams can come true."
                </blockquote>
                <p style={{ fontFamily: FONT_SANS, fontSize: '13px', color: '#C8A97E', margin: '0 0 32px 0' }}>
                  — Dr. A.P.J. Abdul Kalam
                </p>
                <p style={{ fontFamily: FONT_SANS, fontSize: '15px', color: '#A09080', lineHeight: 1.8, maxWidth: '480px', margin: 0 }}>
                  The name Rameshwaram was chosen as an homage to Dr. Kalam's birthplace — rooting this brand in heritage, authenticity, and the expansive flavours of South India.
                </p>
              </motion.div>
            </div>
          </div>

          {/* ── Panel 3 — The Philosophy ── */}
          <div style={{ minWidth: '100vw', height: '100vh', display: 'flex', alignItems: 'center', padding: '0 80px', gap: '48px' }}>
            <motion.div style={{ flex: 1 }} {...fadeUp}>
              <div style={{ height: '200px', marginBottom: '24px', position: 'relative', overflow: 'hidden' }}>
                <Image
                  src="/about/bridge.png"
                  alt="Fresh local ingredients"
                  fill
                  sizes="33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ fontFamily: FONT_SERIF, fontSize: '28px', color: '#F5F0E8', margin: '0 0 12px 0' }}>Fresh. Local. Legendary.</h3>
              <p style={{ fontFamily: FONT_SANS, fontSize: '14px', color: '#A09080', lineHeight: 1.8, margin: 0 }}>No refrigeration. Batter and chutneys made fresh in small batches throughout the day. Farm to tawa.</p>
            </motion.div>

            <motion.div style={{ flex: 1 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}>
              <p style={{ fontFamily: FONT_SERIF, fontSize: '80px', fontWeight: 300, color: '#C8A97E', lineHeight: 1, margin: 0 }}>24/7</p>
              <h3 style={{ fontFamily: FONT_SANS, fontSize: '18px', color: '#F5F0E8', margin: '8px 0 0 0' }}>Always Open</h3>
              <p style={{ fontFamily: FONT_SANS, fontSize: '14px', color: '#A09080', lineHeight: 1.8, margin: '12px 0 0 0' }}>Round the clock service — early risers, midnight cravings, and everything in between.</p>
            </motion.div>

            <motion.div style={{ flex: 1 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}>
              <p style={{ fontFamily: FONT_SERIF, fontSize: '80px', fontWeight: 300, color: '#C8A97E', lineHeight: 1, margin: 0 }}>2021</p>
              <h3 style={{ fontFamily: FONT_SANS, fontSize: '18px', color: '#F5F0E8', margin: '8px 0 0 0' }}>Born in Bengaluru</h3>
              <p style={{ fontFamily: FONT_SANS, fontSize: '14px', color: '#A09080', lineHeight: 1.8, margin: '12px 0 0 0' }}>Started as a single outlet in Indiranagar. Today serving across Bengaluru, Hyderabad and beyond.</p>
            </motion.div>
          </div>

          {/* ── Panel 4 — The Founders ── */}
          <div style={{ minWidth: '100vw', height: '100vh', display: 'flex', alignItems: 'center', padding: '0 80px' }}>
            <motion.div style={{ display: 'flex', gap: '80px', width: '100%' }} {...fadeUp}>
              <div style={{ flex: 1, maxWidth: '45%' }}>
                <div style={{ height: '320px', marginBottom: '24px', position: 'relative', overflow: 'hidden' }}>
                  <Image
                    src="/about/founders.png"
                    alt="Raghavendra Rao"
                    fill
                    sizes="22vw"
                    style={{ objectFit: 'cover', objectPosition: 'left top', filter: 'grayscale(15%)' }}
                  />
                </div>
                <h3 style={{ fontFamily: FONT_SERIF, fontSize: '28px', color: '#F5F0E8', margin: '0 0 6px 0' }}>Raghavendra Rao</h3>
                <span style={{ fontFamily: FONT_SANS, fontSize: '12px', color: '#C8A97E', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Co-Founder & CEO</span>
                <p style={{ fontFamily: FONT_SANS, fontSize: '14px', color: '#A09080', lineHeight: 1.8, margin: '12px 0 0 0' }}>20+ years in the food industry. A mechanical engineering graduate dedicated to perfecting operational excellence at The Rameshwaram Cafe.</p>
              </div>
              <div style={{ flex: 1, maxWidth: '45%' }}>
                <div style={{ height: '320px', marginBottom: '24px', position: 'relative', overflow: 'hidden' }}>
                  <Image
                    src="/about/founders.png"
                    alt="Divya Raghavendra Rao"
                    fill
                    sizes="22vw"
                    style={{ objectFit: 'cover', objectPosition: 'right top', filter: 'grayscale(15%)' }}
                  />
                </div>
                <h3 style={{ fontFamily: FONT_SERIF, fontSize: '28px', color: '#F5F0E8', margin: '0 0 6px 0' }}>Divya Raghavendra Rao</h3>
                <span style={{ fontFamily: FONT_SANS, fontSize: '12px', color: '#C8A97E', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Co-Founder & Managing Director</span>
                <p style={{ fontFamily: FONT_SANS, fontSize: '14px', color: '#A09080', lineHeight: 1.8, margin: '12px 0 0 0' }}>Chartered Accountant, IIM-A alumna. 12+ years in finance and management, leading the brand with strategic vision and financial discipline.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  )
}
