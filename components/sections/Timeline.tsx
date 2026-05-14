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

const milestones = [
  {
    year: '2012',
    title: 'Street Food, Bengaluru',
    description: 'It all began on the bustling streets of Bengaluru — piping-hot idlis and crispy dosas, the foundation of what would become a beloved institution.',
    image: '/timeline/street-food.jpg',
    side: 'right' as const,
  },
  {
    year: '2014',
    title: 'IDC, Bengaluru',
    description: 'With growing love and loyal customers, the journey scaled up into IDC — celebrating South Indian flavours with consistency and authenticity.',
    image: '/timeline/idc.jpg',
    side: 'left' as const,
  },
  {
    year: '2021',
    title: 'The Rameshwaram Cafe',
    description: 'Inspired by Dr. A.P.J. Abdul Kalam, The Rameshwaram Cafe was born. A name embodying tradition, humility, and excellence.',
    image: '/timeline/2021.jpg',
    side: 'right' as const,
  },
  {
    year: '2021',
    title: 'Indiranagar & JP Nagar',
    description: 'The flagship hub of flavours. Buzzing with energy, aroma, and the famous midnight dosas that Bengaluru fell in love with.',
    image: '/timeline/indiranagar.jpg',
    side: 'left' as const,
  },
  {
    year: '2024',
    title: 'Bengaluru Airport',
    description: 'Taking the taste of South India to travellers from across the world. The journey that started on a street corner now greets you at 35,000 feet.',
    image: '/timeline/airport.jpg',
    side: 'right' as const,
  },
]

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeline = timelineRef.current
    const line = lineRef.current
    if (!timeline || !line) return

    const st = ScrollTrigger.create({
      trigger: timeline,
      start: 'top 60%',
      end: 'bottom 40%',
      onUpdate: (self) => {
        line.style.height = `${self.progress * 100}%`
      },
    })

    return () => st.kill()
  }, [])

  return (
    <section
      className="timeline-section"
      id="timeline"
      ref={sectionRef}
      style={{ background: '#0A0A0A', padding: '120px 80px' }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: EASE }}
        style={{ textAlign: 'center', marginBottom: '80px' }}
      >
        <span style={{ display: 'block', fontFamily: FONT_SANS, fontSize: '11px', color: '#C8A97E', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '20px' }}>
          OUR JOURNEY
        </span>
        <h2 style={{ fontFamily: FONT_SERIF, fontSize: 'clamp(36px, 4.5vw, 60px)', fontWeight: 300, color: '#F5F0E8', maxWidth: '600px', margin: '0 auto', lineHeight: 1.15 }}>
          From a street corner to the heart of India.
        </h2>
      </motion.div>

      {/* Timeline */}
      <div
        className="timeline-list"
        ref={timelineRef}
        style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}
      >
        {/* Base line (always visible, dark) */}
        <div style={{
          position: 'absolute',
          left: 'calc(50% - 0.5px)',
          top: 0,
          bottom: 0,
          width: '1px',
          background: '#2A2A2A',
        }} />

        {/* Animated gold line */}
        <div
          ref={lineRef}
          style={{
            position: 'absolute',
            left: 'calc(50% - 0.5px)',
            top: 0,
            width: '1px',
            height: '0%',
            background: '#C8A97E',
            zIndex: 1,
          }}
        />

        {/* Milestones */}
        {milestones.map((m, i) => (
          <div
            className="timeline-item"
            key={i}
            style={{
              display: 'flex',
              justifyContent: m.side === 'right' ? 'flex-end' : 'flex-start',
              marginBottom: '80px',
              position: 'relative',
            }}
          >
            {/* Centre dot */}
            <div style={{
              position: 'absolute',
              left: 'calc(50% - 5px)',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#0A0A0A',
              border: '1.5px solid #C8A97E',
              zIndex: 2,
            }} />

            {/* Card */}
            <motion.div
              className="timeline-card"
              initial={{ opacity: 0, x: m.side === 'right' ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: EASE }}
              style={{
                width: '42%',
                border: '0.5px solid #2A2A2A',
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#111111',
              }}
            >
              <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  sizes="42vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <span style={{ display: 'block', fontFamily: FONT_SANS, fontSize: '11px', color: '#C8A97E', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  {m.year}
                </span>
                <h3 style={{ fontFamily: FONT_SERIF, fontSize: '26px', color: '#F5F0E8', margin: '0 0 10px 0' }}>
                  {m.title}
                </h3>
                <p style={{ fontFamily: FONT_SANS, fontSize: '14px', color: '#A09080', lineHeight: 1.8, margin: 0 }}>
                  {m.description}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
