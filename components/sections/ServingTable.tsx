'use client'

import Image from 'next/image'

const dishes = [
  // {
  //   id: '01',
  //   file: 'Butter-idli.png',
  //   name: 'Butter Idli',
  //   tagline: 'Soft. Pure. Morning.',
  //   description: 'Steamed to cloud-like perfection and crowned with a generous knob of white butter. The kind of idli that melts before you can think.',
  //   tags: ['Rice', 'White Butter', 'Coconut Chutney', 'Sambar'],
  //   label: 'Morning Essential',
  //   accentColor: '#D4C8A8',
  //   glowColor: 'rgba(212, 200, 168, 0.12)',
  // },
  {
    id: '02',
    file: 'Butter-masala-dosa.png',
    name: 'Butter Masala Dosa',
    tagline: 'Crispy. Golden. Iconic.',
    description: 'A paper-thin dosa, lacquered in butter, crisped to a perfect fold. Inside: spiced potato masala, slow-cooked with mustard and curry leaf.',
    tags: ['Fermented Rice Batter', 'Potato Masala', 'Butter', 'Three Chutneys'],
    label: 'Signature Dish',
    accentColor: '#D4841A',
    glowColor: 'rgba(212, 132, 26, 0.12)',
  },
  {
    id: '03',
    file: 'Open-Butter-Masala-Dosa.png',
    name: 'Open Butter Masala Dosa',
    tagline: 'Bold. Layered. Unfolded.',
    description: 'The masala dosa, reimagined open-face. Pudi, butter, shredded coconut, and fresh herbs crown every inch. A dosa that demands to be seen.',
    tags: ['Ghee Pudi', 'Coconut', 'Herb Garnish', 'Potato Masala'],
    label: "Chef's Pride",
    accentColor: '#C4621A',
    glowColor: 'rgba(196, 98, 26, 0.12)',
  },
  {
    id: '04',
    file: 'Ghee-onion-dosa.png',
    name: 'Ghee Onion Dosa',
    tagline: 'Lacy. Aromatic. Irresistible.',
    description: 'Two delicate dosas, thin as lace, crisped in pure ghee with caramelised onions. Served with three chutneys — each bite lighter than the last.',
    tags: ['Ghee', 'Caramelised Onion', 'Coconut Chutney', 'Sambar'],
    label: 'Light & Crisp',
    accentColor: '#D4C090',
    glowColor: 'rgba(212, 192, 144, 0.12)',
  },
  {
    id: '05',
    file: 'Poori-sagu.png',
    name: 'Poori Saagu',
    tagline: 'Puffed. Golden. Nostalgic.',
    description: 'Two golden pooris, puffed to perfection in hot oil, served with a thick, aromatic vegetable saagu. A Sunday morning memory on a plate.',
    tags: ['Wheat', 'Potato Saagu', 'Sagu Masala', 'Three Chutneys'],
    label: 'Weekend Classic',
    accentColor: '#C8A030',
    glowColor: 'rgba(200, 160, 48, 0.12)',
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
    glowColor: 'rgba(184, 72, 32, 0.12)',
  },
  {
    id: '07',
    file: 'Bisi-Bele-Bath.png',
    name: 'Bisi Bele Bath',
    tagline: 'Hearty. Spiced. Soulful.',
    description: "Karnataka's most beloved one-pot comfort. Rice, lentils, and vegetables slow-cooked with an 18-spice powder, finished with ghee. Served with raita and crunchy boondi.",
    tags: ['Rice', 'Toor Dal', '18-Spice Powder', 'Ghee', 'Raita'],
    label: 'Karnataka Heritage',
    accentColor: '#8B3A1C',
    glowColor: 'rgba(139, 58, 28, 0.12)',
  },
  {
    id: '08',
    file: 'kesari-bath.png',
    name: 'Kesari Bath',
    tagline: 'Sweet. Saffron. Closing.',
    description: 'Semolina slow-roasted in ghee, perfumed with saffron, studded with plump cashews and raisins. The only ending a South Indian meal deserves.',
    tags: ['Semolina', 'Saffron', 'Cashews', 'Pure Ghee', 'Cardamom'],
    label: 'The Sweet Finale',
    accentColor: '#D4780C',
    glowColor: 'rgba(212, 120, 12, 0.12)',
  },
]

const FONT_SANS = 'var(--font-dm-sans), system-ui, sans-serif'
const FONT_SERIF = 'var(--font-cormorant), Georgia, serif'

export default function ServingTable() {
  const dish = dishes[0]

  return (
    <section
      style={{
        width: '100%',
        height: '100vh',
        background: '#0A0A0A',
        display: 'flex',
        alignItems: 'center',
        padding: '0 80px',
        overflow: 'hidden',
      }}
    >
      {/* LEFT — Text */}
      <div
        style={{
          width: '45%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingRight: '60px',
        }}
      >
        <span
          style={{
            display: 'block',
            fontFamily: FONT_SANS,
            fontSize: '11px',
            color: '#C8A97E',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}
        >
          {dish.id}
        </span>

        <h2
          style={{
            fontFamily: FONT_SERIF,
            fontSize: 'clamp(42px, 5vw, 72px)',
            fontWeight: 400,
            color: '#F5F0E8',
            lineHeight: 1.0,
            margin: '0 0 16px 0',
          }}
        >
          {dish.name}
        </h2>

        <p
          style={{
            fontFamily: FONT_SERIF,
            fontStyle: 'italic',
            fontSize: '20px',
            color: '#C8A97E',
            margin: '0 0 20px 0',
          }}
        >
          {dish.tagline}
        </p>

        <p
          style={{
            fontFamily: FONT_SANS,
            fontSize: '15px',
            color: '#A09080',
            lineHeight: 1.8,
            maxWidth: '380px',
            margin: '0 0 28px 0',
          }}
        >
          {dish.description}
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '32px',
          }}
        >
          {dish.tags.map((tag) => (
            <span
              key={tag}
              style={{
                border: '0.5px solid #2A2A2A',
                color: '#A09080',
                fontFamily: FONT_SANS,
                fontSize: '11px',
                letterSpacing: '0.08em',
                padding: '5px 12px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          style={{
            fontFamily: FONT_SANS,
            fontSize: '11px',
            color: '#C8A97E',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          ✦ {dish.label}
        </span>
      </div>

      {/* RIGHT — Image */}
      <div
        style={{
          width: '55%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '480px',
            height: '480px',
          }}
        >
          <Image
            src={`/dishes/${dish.file}`}
            alt={dish.name}
            fill
            sizes="480px"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </section>
  )
}
