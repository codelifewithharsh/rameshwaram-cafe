import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import ServingTable from '@/components/sections/ServingTable'
import About from '@/components/sections/About'
import Timeline from '@/components/sections/Timeline'
import Awards from '@/components/sections/Awards'
import Testimonials from '@/components/sections/Testimonials'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServingTable />
        <About />
        <Timeline />
        <Awards />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
