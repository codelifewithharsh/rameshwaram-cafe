'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
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

const values = [
  { letter: 'R', value: 'Reliable' },
  { letter: 'A', value: 'Authentic' },
  { letter: 'M', value: 'Meticulous Techniques' },
  { letter: 'E', value: 'Economical' },
  { letter: 'S', value: 'Sustainable' },
  { letter: 'H', value: 'Hygienic' },
  { letter: 'W', value: 'Warm Hospitality' },
  { letter: 'A', value: 'Accountable' },
  { letter: 'R', value: 'Responsible' },
  { letter: 'A', value: 'Aspirational' },
  { letter: 'M', value: 'Mission Driven' },
]

export default function About() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeValue, setActiveValue] = useState<number | null>(null)

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
    <div id="about" ref={scrollContainerRef} style={{ height: '300vh', position: 'relative' }}>
      <section style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden',
        background: '#0A0A0A',
        clipPath: 'inset(0)',
        paddingTop: '80px',
      }}>
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            width: '300vw',
            height: '100vh',
            willChange: 'transform',
            overflow: 'visible',
          }}
        >

          {/* ── Panel 1 — The Inspiration ── */}
          <div style={{ minWidth: '100vw', height: '100vh', display: 'flex', alignItems: 'stretch', overflow: 'visible', padding: 0 }}>
            <div style={{ position: 'relative', width: '40%', height: '100vh', marginLeft: 0, paddingLeft: 0, flexShrink: 0, overflow: 'visible' }}>
              <Image
                src="/about/kalam.png"
                alt="Dr. A.P.J. Abdul Kalam"
                fill
                sizes="40vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  color: 'transparent',
                }}
              />
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '120px',
                height: '100%',
                background: 'linear-gradient(to right, transparent 0%, #0A0A0A 100%)',
                pointerEvents: 'none',
              }} />
            </div>
            <div style={{ flex: 1, padding: '80px 80px 80px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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

          {/* ── Panel 2 — The Origin ── */}
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
            <div style={{ width: '50%', height: '100%', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image
                src="/about/founders.png"
                alt="Founders"
                fill
                sizes="50vw"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center top',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '120px',
                background: 'linear-gradient(to top, #0A0A0A 0%, transparent 100%)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>

          {/* ── Panel 3 — Our Values ── */}
          <div style={{ minWidth: '100vw', height: '100vh', background: '#0A0A0A', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            {/* Top bar header */}
            <div style={{ position: 'absolute', top: '44px', left: 0, right: 0, display: 'flex', justifyContent: 'space-between', padding: '0 60px', zIndex: 10 }}>
              <span style={{ fontFamily: FONT_SANS, fontSize: '11px', color: '#C8A97E', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                OUR VALUES
              </span>
              <span style={{ fontFamily: FONT_SANS, fontSize: '11px', color: '#2A2A2A', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                11 PRINCIPLES
              </span>
            </div>

            {/* TOP HALF — Horizontal Letters */}
            <div style={{ width: '100%', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 60px', position: 'relative' }}>
              {values.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    delay: index * 0.04,
                    duration: 0.6,
                    ease: EASE,
                  }}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    cursor: 'default',
                    position: 'relative',
                  }}
                  onMouseEnter={() => setActiveValue(index)}
                  onMouseLeave={() => setActiveValue(null)}
                >
                  <span style={{ fontFamily: FONT_SERIF, fontSize: 'clamp(52px, 6.5vw, 96px)', fontWeight: 300, color: activeValue === index ? '#F5F0E8' : '#2A2A2A', transition: 'color 0.4s', userSelect: 'none' }}>
                    {item.letter}
                  </span>
                  {activeValue === index && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: 'absolute',
                        bottom: '20%',
                        left: '10%',
                        right: '10%',
                        height: '1px',
                        background: '#C8A97E',
                        transformOrigin: 'left',
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* DIVIDER LINE */}
            <div style={{ width: '100%', height: '0.5px', background: 'linear-gradient(to right, transparent 0%, #2A2A2A 20%, #2A2A2A 80%, transparent 100%)' }} />

            {/* BOTTOM HALF — Value Reveal */}
            <div style={{ width: '100%', height: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <AnimatePresence mode="wait">
                {activeValue === null ? (
                  <motion.div
                    key="hint"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span style={{ fontFamily: FONT_SANS, fontSize: '11px', color: '#2A2A2A', letterSpacing: '0.2em', textTransform: 'uppercase', userSelect: 'none' }}>
                      HOVER A LETTER
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeValue}
                    initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -30, filter: 'blur(4px)' }}
                    transition={{ duration: 0.45, ease: EASE }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '16px',
                      position: 'relative',
                    }}
                  >
                    {/* Active letter — large faint background */}
                    <span style={{
                      position: 'absolute',
                      fontFamily: FONT_SERIF,
                      fontSize: 'clamp(160px, 22vw, 280px)',
                      fontWeight: 300,
                      color: 'rgba(200,169,126,0.04)',
                      lineHeight: 1,
                      userSelect: 'none',
                      pointerEvents: 'none',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}>
                      {values[activeValue].letter}
                    </span>

                    {/* Value name — centred, large */}
                    <span style={{
                      fontFamily: FONT_SERIF,
                      fontSize: 'clamp(36px, 5.5vw, 80px)',
                      fontWeight: 300,
                      color: '#F5F0E8',
                      letterSpacing: '-0.01em',
                      lineHeight: 1,
                      position: 'relative',
                      zIndex: 1,
                      textAlign: 'center',
                    }}>
                      {values[activeValue].value}
                    </span>

                    {/* Gold line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
                      style={{
                        width: '48px',
                        height: '1px',
                        background: '#C8A97E',
                        transformOrigin: 'left',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
