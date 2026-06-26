import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Mission from '@/components/sections/Mission'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Benefits from '@/components/sections/Benefits'
import Results from '@/components/sections/Results'
import Insights from '@/components/sections/Insights'
import Industries from '@/components/sections/Industries'
import Contact from '@/components/sections/Contact'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Services />
        <Process />
        <Benefits />
        <Results />
        <Insights />
        <Industries />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
