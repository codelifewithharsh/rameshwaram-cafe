'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
  fontSize: '14px',
  color: '#A09080',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
}

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = navRef.current
    if (!el) return

    gsap.to(el, {
      backgroundColor: '#111111',
      borderBottomColor: '#2A2A2A',
      borderBottomWidth: '0.5px',
      borderBottomStyle: 'solid',
      duration: 0.4,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: document.body,
        start: 'top -80px',
        end: 'top -81px',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const hoverOn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#F5F0E8'
  }
  const hoverOff = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#A09080'
  }

  return (
    <nav
      className="site-nav"
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '16px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '48px',
        backgroundColor: 'transparent',
        borderBottom: '0.5px solid transparent',
      }}
    >
      {/* Left links */}
      <div className="site-nav__links" style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
        <a href="/" style={linkStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Home</a>
        <a href="#about" style={linkStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>About</a>
      </div>

      {/* Logo */}
      <a className="site-nav__logo" href="/" style={{ display: 'block', cursor: 'pointer' }}>
        <Image
          src="/images/logo-light.png"
          alt="Rameshwaram Cafe"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: 'auto', height: '68px', display: 'block' }}
          priority
        />
      </a>

      {/* Right links */}
      <div className="site-nav__links" style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
        <a href="#menu" style={linkStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Menu</a>
        <a href="#testimonials" style={linkStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Reviews</a>
      </div>
    </nav>
  )
}
