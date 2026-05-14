'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const eyebrowRef = useRef<HTMLSpanElement>(null)
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const sublineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLButtonElement>(null)
  const scrollHintRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

    tl.fromTo(eyebrowRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.8 }, 0.3)
      .fromTo(line1Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.0 }, 0.5)
      .fromTo(line2Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.0 }, 0.65)
      .fromTo(sublineRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, 0.85)
      .fromTo(ctaRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.7 }, 1.0)
      .fromTo(scrollHintRef.current, { opacity: 0 }, { opacity: 1, duration: 1.0 }, 1.6)

    gsap.to(dotRef.current, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: 'none',
      transformOrigin: '50% 50%',
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: '#0A0A0A',
      }}
    >
      {/* Background video */}
      <video
        src="/video/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.75,
        }}
      />

      {/* Dual gradient overlay */}
      <div
        className="hero-content"
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(to right, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.4) 50%, rgba(10,10,10,0.1) 100%),
            linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.5) 35%, rgba(10,10,10,0.0) 65%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Bottom-left content */}
      <div
        style={{
          position: 'absolute',
          bottom: '80px',
          left: 0,
          right: 0,
          padding: '0 80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
        }}
      >
        {/* Eyebrow */}
        <span
          ref={eyebrowRef}
          style={{
            display: 'block',
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            fontSize: '11px',
            color: '#C8A97E',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '24px',
            opacity: 0,
          }}
        >
          EST. 2021 · BENGALURU
        </span>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(48px, 6.5vw, 88px)',
            fontWeight: 300,
            color: '#F5F0E8',
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
            margin: '0 0 28px 0',
          }}
        >
          <span ref={line1Ref} style={{ display: 'block', opacity: 0 }}>
            A taste of
          </span>
          <span ref={line2Ref} style={{ display: 'block', opacity: 0 }}>
            South Indian soul.
          </span>
        </h1>

        {/* Subline */}
        <p
          ref={sublineRef}
          style={{
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            fontSize: '18px',
            color: '#A09080',
            fontWeight: 400,
            margin: '0 0 44px 0',
            maxWidth: '420px',
            opacity: 0,
          }}
        >
          Tradition on a plate. Memories in every bite.
        </p>

        {/* CTA */}
        <button
          ref={ctaRef}
          style={{
            border: '1px solid #F5F0E8',
            color: '#F5F0E8',
            background: 'transparent',
            padding: '14px 32px',
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            letterSpacing: '0.06em',
            cursor: 'pointer',
            transition: 'background 0.4s ease, border-color 0.4s ease, color 0.4s ease',
            opacity: 0,
          }}
          onMouseEnter={(e) => {
            const btn = e.currentTarget as HTMLButtonElement
            btn.style.background = '#C8A97E'
            btn.style.borderColor = '#C8A97E'
            btn.style.color = '#0A0A0A'
          }}
          onMouseLeave={(e) => {
            const btn = e.currentTarget as HTMLButtonElement
            btn.style.background = 'transparent'
            btn.style.borderColor = '#F5F0E8'
            btn.style.color = '#F5F0E8'
          }}
        >
          Explore the menu
        </button>
      </div>

      {/* Scroll hint — bottom right */}
      <div
        className="hero-scroll-hint"
        ref={scrollHintRef}
        style={{
          position: 'absolute',
          bottom: '44px',
          right: '60px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          opacity: 0,
        }}
      >
        {/* Rotating circle with dot */}
        <div
          ref={dotRef}
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: '1px solid rgba(200,169,126,0.38)',
            position: 'relative',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '2px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: '#C8A97E',
            }}
          />
        </div>

        {/* Text block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: '11px',
              color: '#C8A97E',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}
          >
            WARNING
          </span>
          <span
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontStyle: 'italic',
              fontSize: '16px',
              color: '#A09080',
              lineHeight: 1,
            }}
          >
            cravings ahead
          </span>
        </div>
      </div>
    </section>
  )
}
