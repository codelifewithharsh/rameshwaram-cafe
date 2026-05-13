'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FONT_SANS = 'var(--font-dm-sans), system-ui, sans-serif'
const FONT_SERIF = 'var(--font-cormorant), Georgia, serif'
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const testimonials = [
  {
    quote: "The Rameshwaram Cafe has completely changed the way I look at South Indian dining. The moment you step in, you're welcomed with the aroma of fresh filter coffee and sizzling dosas. My personal favourite is the Ghee Pudi Idli — soft, fluffy, coated with the right amount of ghee and spice.",
    name: 'Ananya R',
    title: 'Food Enthusiast',
  },
  {
    quote: "The perfect balance between tradition and modernity. Authentic flavours just like your grandmother's kitchen, but in a premium, hygienic environment. The Ghee Masala Dosa is unmatched — crispy on the outside, soft on the inside, piping hot. This place has become part of my daily routine.",
    name: 'Ramesh K',
    title: 'Tech Professional',
  },
  {
    quote: "I've tasted dosas and idlis in countless places across India. But there's something special about The Rameshwaram Cafe. You don't just eat here, you feel the culture and care in every dish. Their focus on hygiene, consistency in taste, and warmth in service make it stand out from everything else.",
    name: 'Meera S',
    title: 'Entrepreneur',
  },
  {
    quote: "A truly deserving 5-star cafe. Outstanding food, quick service even late at night, generous ghee, top hygiene, and quality that makes it one of the best South Indian spots you'll want to revisit anytime.",
    name: 'Sagar Khurana',
    title: 'Regular Guest',
  },
]

function getCardAnimate(i: number, activeIndex: number) {
  if (i > activeIndex) {
    return { opacity: 0, y: 80, scale: 0.95 }
  }
  const depth = activeIndex - i
  return {
    opacity: Math.max(0.5, 1 - depth * 0.18),
    y: -depth * 12,
    scale: 1 - depth * 0.04,
  }
}

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const prevIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const st = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const n = testimonials.length
        const newIndex = Math.min(Math.floor(self.progress * n), n - 1)
        if (newIndex !== prevIndexRef.current) {
          setActiveIndex(newIndex)
          prevIndexRef.current = newIndex
        }
      },
    })

    return () => st.kill()
  }, [])

  return (
    <div
      ref={scrollContainerRef}
      style={{ height: `${(testimonials.length + 1) * 100}vh`, position: 'relative' }}
    >
      <section style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        background: '#0A0A0A',
        overflow: 'hidden',
      }}>
        {/* Heading */}
        <div style={{ padding: '60px 80px 0', position: 'relative', zIndex: 10 }}>
          <span style={{ display: 'block', fontFamily: FONT_SANS, fontSize: '11px', color: '#C8A97E', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
            WHAT GUESTS SAY
          </span>
          <h2 style={{ fontFamily: FONT_SERIF, fontSize: 'clamp(36px, 4.5vw, 60px)', fontWeight: 300, color: '#F5F0E8', margin: 0 }}>
            Voices of our guests.
          </h2>
        </div>

        {/* Card stack */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              animate={getCardAnimate(i, activeIndex)}
              initial={{ opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 80 }}
              transition={{ duration: 0.7, ease: EASE }}
              style={{
                position: 'absolute',
                width: 'min(680px, 85vw)',
                background: '#111111',
                border: '0.5px solid #2A2A2A',
                borderRadius: '12px',
                padding: '56px 60px',
                zIndex: i + 1,
              }}
            >
              {/* Opening quote mark */}
              <span style={{
                display: 'block',
                fontFamily: FONT_SERIF,
                fontSize: '120px',
                fontWeight: 300,
                color: 'rgba(200,169,126,0.12)',
                lineHeight: 0,
                marginBottom: '-20px',
              }}>
                &ldquo;
              </span>

              <p style={{
                fontFamily: FONT_SERIF,
                fontStyle: 'italic',
                fontSize: 'clamp(18px, 2.2vw, 26px)',
                color: '#F5F0E8',
                lineHeight: 1.7,
                margin: '0 0 40px 0',
              }}>
                {t.quote}
              </p>

              <div style={{ width: '40px', height: '0.5px', background: '#2A2A2A', marginBottom: '24px' }} />

              <p style={{ fontFamily: FONT_SANS, fontSize: '14px', fontWeight: 500, color: '#F5F0E8', margin: 0 }}>
                {t.name}
              </p>
              <p style={{ fontFamily: FONT_SANS, fontSize: '12px', color: '#A09080', letterSpacing: '0.06em', margin: '4px 0 0 0' }}>
                {t.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
