'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import gsap from 'gsap'

const FONT_SANS = 'var(--font-dm-sans), system-ui, sans-serif'
const FONT_SERIF = 'var(--font-cormorant), Georgia, serif'
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const RING_SIZE = 580
const RING_RADIUS = RING_SIZE / 2
const SATELLITE_SIZE = 64
const SATELLITE_ANGLES = [300, 180, 60]

const dishes = [
  {
    id: '01',
    file: 'Butter-masala-dosa.png',
    name: 'Butter Masala Dosa',
    tagline: 'Crispy. Golden. Iconic.',
    description: 'A paper-thin dosa, lacquered in butter, crisped to a perfect fold. Inside: spiced potato masala, slow-cooked with mustard and curry leaf.',
    tags: ['Fermented Rice Batter', 'Potato Masala', 'Butter', 'Three Chutneys'],
    label: 'Signature Dish',
    accentColor: '#D4841A',
    glowColor: 'rgba(212, 132, 26, 0.15)',
  },
  {
    id: '02',
    file: 'Open-Butter-Masala-Dosa.png',
    name: 'Open Butter Masala Dosa',
    tagline: 'Bold. Layered. Unfolded.',
    description: 'The masala dosa, reimagined open-face. Pudi, butter, shredded coconut, and fresh herbs crown every inch. A dosa that demands to be seen.',
    tags: ['Ghee Pudi', 'Coconut', 'Herb Garnish', 'Potato Masala'],
    label: "Chef's Pride",
    accentColor: '#C4621A',
    glowColor: 'rgba(196, 98, 26, 0.15)',
  },
  {
    id: '03',
    file: 'Poori-sagu.png',
    name: 'Poori Saagu',
    tagline: 'Puffed. Golden. Nostalgic.',
    description: 'Two golden pooris, puffed to perfection in hot oil, served with a thick, aromatic vegetable saagu. A Sunday morning memory on a plate.',
    tags: ['Wheat', 'Potato Saagu', 'Sagu Masala', 'Three Chutneys'],
    label: 'Weekend Classic',
    accentColor: '#C8A030',
    glowColor: 'rgba(200, 160, 48, 0.15)',
  },
  {
    id: '04',
    file: 'Bisi-Bele-Bath.png',
    name: 'Bisi Bele Bath',
    tagline: 'Hearty. Spiced. Soulful.',
    description: "Karnataka's most beloved one-pot comfort. Rice, lentils, and vegetables slow-cooked with an 18-spice powder, finished with ghee. Served with raita and crunchy boondi.",
    tags: ['Rice', 'Toor Dal', '18-Spice Powder', 'Ghee', 'Raita'],
    label: 'Karnataka Heritage',
    accentColor: '#8B3A1C',
    glowColor: 'rgba(139, 58, 28, 0.15)',
  },
  {
    id: '05',
    file: 'kesari-bath.png',
    name: 'Kesari Bath',
    tagline: 'Sweet. Saffron. Closing.',
    description: 'Semolina slow-roasted in ghee, perfumed with saffron, studded with plump cashews and raisins. The only ending a South Indian meal deserves.',
    tags: ['Semolina', 'Saffron', 'Cashews', 'Pure Ghee', 'Cardamom'],
    label: 'The Sweet Finale',
    accentColor: '#D4780C',
    glowColor: 'rgba(212, 120, 12, 0.15)',
  },
  {
    id: '06',
    file: 'Bhajji.png',
    name: 'Bajji Platter',
    tagline: 'Crispy. Fiery. Irresistible.',
    description: 'Stuffed bajjis, golden-fried in a spiced chickpea batter, served with mint chutney and fresh onion salad. The bite that starts a craving.',
    tags: ['Chickpea Batter', 'Stuffed Filling', 'Mint Chutney', 'Onion Salad'],
    label: 'Street Soul',
    accentColor: '#B84820',
    glowColor: 'rgba(184, 72, 32, 0.15)',
  },
  {
    id: '07',
    file: 'Butter-idli.png',
    name: 'Butter Idli',
    tagline: 'Soft. Pure. Morning.',
    description: 'Steamed to cloud-like perfection and crowned with a generous knob of white butter. The kind of idli that melts before you can think.',
    tags: ['Rice', 'White Butter', 'Coconut Chutney', 'Sambar'],
    label: 'Morning Essential',
    accentColor: '#D4C8A8',
    glowColor: 'rgba(212, 200, 168, 0.15)',
  },
  {
    id: '08',
    file: 'Ghee-onion-dosa.png',
    name: 'Ghee Onion Dosa',
    tagline: 'Lacy. Aromatic. Irresistible.',
    description: 'Two delicate dosas, thin as lace, crisped in pure ghee with caramelised onions. Served with three chutneys — each bite lighter than the last.',
    tags: ['Ghee', 'Caramelised Onion', 'Coconut Chutney', 'Sambar'],
    label: 'Light & Crisp',
    accentColor: '#D4C090',
    glowColor: 'rgba(212, 192, 144, 0.15)',
  },
]

const textContainer: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EASE,
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.35 },
  },
}

const textItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export default function ServingTable() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % dishes.length)
    if (!hasInteracted) setHasInteracted(true)
  }
  const ringRef = useRef<HTMLDivElement>(null)
  const satelliteImageRefs = useRef<(HTMLDivElement | null)[]>([null, null, null])
  const stickyRef = useRef<HTMLElement>(null)
  const moveCountRef = useRef(0)

  useEffect(() => {
    if (!ringRef.current) return
    gsap.set(ringRef.current, { xPercent: -50, yPercent: -50 })
    return () => {}
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!ringRef.current) return
    gsap.to(ringRef.current, {
      rotation: currentIndex * (360 / dishes.length),
      duration: 0.8,
      ease: 'power2.inOut',
      overwrite: 'auto',
    })
  }, [currentIndex])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    moveCountRef.current++
    if (moveCountRef.current % 2 === 0) {
      createPodi(e.clientX, e.clientY)
    }
  }

  const satelliteIndices = [1, 2, 3].map(
    (offset) => (currentIndex + offset) % dishes.length
  )
  const ringSize = isMobile ? 320 : RING_SIZE
  const ringRadius = ringSize / 2
  const satelliteSize = isMobile ? 46 : SATELLITE_SIZE
  const mainDishSize = isMobile ? 280 : 480
  const centeredOffset = -(mainDishSize / 2)
  const enterX = isMobile ? 170 : 330
  const enterY = isMobile ? -140 : -230
  const glowSize = isMobile ? 430 : 750

  const createPodi = (x: number, y: number) => {
    const el = document.createElement('div')
    const size = Math.random() * 4 + 2
    const angle = Math.random() * 360
    const spread = (Math.random() - 0.5) * 80
    const vx = (Math.random() - 0.5) * 2
    const vy = Math.random() * 0.5 + 0.5
    const duration = 1800 + Math.random() * 800

    const colors = [
      '#8B3A1C',
      '#C4621A',
      '#6B2D0E',
      '#D4841A',
      '#4A1A08',
    ]
    const color = colors[Math.floor(Math.random() * colors.length)]

    let posX = x + spread
    let posY = y + spread
    let startTime = Date.now()

    el.style.cssText = `
      position: fixed;
      left: ${posX}px;
      top: ${posY}px;
      width: ${size}px;
      height: ${size * (Math.random() * 0.5 + 0.7)}px;
      background: ${color};
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      pointer-events: none;
      z-index: 99;
      opacity: 0.85;
      transform: rotate(${angle}deg);
      transition: none;
    `

    stickyRef.current?.appendChild(el)

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      posX += vx
      posY += vy * (progress * 2 + 1)

      const opacity = 0.85 - progress * 0.7

      el.style.left = `${posX}px`
      el.style.top = `${posY}px`
      el.style.opacity = `${opacity}`

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        el.remove()
      }
    }

    requestAnimationFrame(animate)
  }

  return (
    <section
      className="serving-section"
      id="menu"
      ref={stickyRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      style={{
        height: '100vh',
        overflow: 'hidden',
        background: '#0A0A0A',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 80px 0 80px',
        position: 'relative',
        cursor: 'pointer',
      }}
    >
        {/* Section label */}
        <span style={{
          position: 'absolute',
          top: '44px',
          right: '80px',
          fontFamily: FONT_SANS,
          fontSize: '11px',
          color: '#2A2A2A',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          zIndex: 10,
        }}>
          OUR MENU
        </span>

        {/* ── LEFT COLUMN — Text ── */}
        <div className="serving-text" style={{ width: '42%', position: 'relative', zIndex: 3, paddingRight: '60px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={textContainer}
              initial="hidden"
              animate="show"
              exit="exit"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <motion.h2 variants={textItem} style={{
                fontFamily: FONT_SERIF,
                fontSize: 'clamp(42px, 5vw, 72px)',
                fontWeight: 400,
                color: '#F5F0E8',
                lineHeight: 1.0,
                margin: '0 0 16px 0',
              }}>
                {dishes[currentIndex].name}
              </motion.h2>

              <motion.p variants={textItem} style={{
                fontFamily: FONT_SERIF,
                fontStyle: 'italic',
                fontSize: '20px',
                color: '#C8A97E',
                margin: '0 0 20px 0',
              }}>
                {dishes[currentIndex].tagline}
              </motion.p>

              <motion.p variants={textItem} style={{
                fontFamily: FONT_SANS,
                fontSize: '15px',
                color: '#A09080',
                lineHeight: 1.8,
                maxWidth: '380px',
                margin: '0 0 28px 0',
              }}>
                {dishes[currentIndex].description}
              </motion.p>

              <motion.div variants={textItem} style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '32px',
              }}>
                {dishes[currentIndex].tags.map((tag) => (
                  <span key={tag} style={{
                    border: '0.5px solid #2A2A2A',
                    color: '#A09080',
                    fontFamily: FONT_SANS,
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    padding: '5px 12px',
                  }}>
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.span variants={textItem} style={{
                fontFamily: FONT_SANS,
                fontSize: '11px',
                color: '#C8A97E',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span>✦</span>
                {dishes[currentIndex].label}
              </motion.span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="serving-visual" style={{
          width: '58%',
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>

          {/* Element C — Ambient glow */}
          <motion.div
            className="serving-glow"
            animate={{
              background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${dishes[currentIndex].glowColor} 0%, transparent 70%)`,
            }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: `${glowSize}px`,
              height: `${glowSize}px`,
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* Element A — Orbital ring */}
          <div
            className="serving-ring"
            ref={ringRef}
            style={{
              position: 'absolute',
              width: `${ringSize}px`,
              height: `${ringSize}px`,
              top: '50%',
              left: '50%',
              zIndex: 1,
            }}
          >
            {/* Dashed ring border */}
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '1px dashed rgba(200,169,126,0.3)',
            }} />

            {/* Satellites */}
            {SATELLITE_ANGLES.map((angle, i) => {
              const rad = (angle * Math.PI) / 180
              const x = Math.cos(rad) * ringRadius
              const y = Math.sin(rad) * ringRadius
              const left = ringRadius + x - satelliteSize / 2
              const top = ringRadius + y - satelliteSize / 2

              return (
                <div
                  className="serving-satellite"
                  key={i}
                  onClick={() => setCurrentIndex(satelliteIndices[i])}
                  style={{
                    position: 'absolute',
                    width: `${satelliteSize}px`,
                    height: `${satelliteSize}px`,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '1px solid rgba(200,169,126,0.25)',
                    left: `${left}px`,
                    top: `${top}px`,
                    cursor: 'pointer',
                    zIndex: 3,
                  }}
                >
                  {/* Counter-rotation wrapper keeps image upright */}
                  <div
                    ref={(el) => { satelliteImageRefs.current[i] = el }}
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    <AnimatePresence>
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ position: 'absolute', inset: 0 }}
                      >
                        <Image
                          src={`/dishes/${dishes[satelliteIndices[i]].file}`}
                          alt=""
                          fill
                          sizes={`${satelliteSize}px`}
                          style={{ objectFit: 'cover' }}
                          aria-hidden
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Element B — Main dish */}
          <AnimatePresence mode="popLayout">
            <motion.div
              className="serving-main-dish"
              key={currentIndex}
              style={{
                position: 'absolute',
                width: `${mainDishSize}px`,
                height: `${mainDishSize}px`,
                top: '50%',
                left: '50%',
                zIndex: 2,
              }}
              initial={{ x: enterX, y: enterY, rotate: 12, scale: 0.75, opacity: 0 }}
              animate={{ x: centeredOffset, y: centeredOffset, rotate: 0, scale: 1, opacity: 1 }}
              exit={{ x: enterX, y: enterY, rotate: 12, scale: 0.75, opacity: 0 }}
              transition={{
                x: { type: 'spring', stiffness: 35, damping: 18, mass: 1.5 },
                y: { type: 'spring', stiffness: 30, damping: 16, mass: 1.5 },
                rotate: { type: 'spring', stiffness: 40, damping: 18 },
                scale: { type: 'spring', stiffness: 45, damping: 18 },
                opacity: { duration: 0.6, ease: 'easeOut' },
              }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [-1.2, 1.2, -1.2],
                  scale: [1, 1.015, 1],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  transformOrigin: '50% 55%',
                }}
              >
                <Image
                  src={`/dishes/${dishes[currentIndex].file}`}
                  alt={dishes[currentIndex].name}
                  fill
                  sizes={isMobile ? '280px' : '480px'}
                  style={{ objectFit: 'contain' }}
                  priority={currentIndex === 0}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>


        {/* Click hint */}
        <motion.div
          className="serving-click-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'absolute',
            bottom: '44px',
            right: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            pointerEvents: 'none',
          }}
        >
          <motion.span
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#C8A97E',
              display: 'block',
            }}
          />
          <span style={{
            fontFamily: FONT_SANS,
            fontSize: '11px',
            color: '#C8A97E',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            Click to explore menu
          </span>
        </motion.div>
    </section>
  )
}
