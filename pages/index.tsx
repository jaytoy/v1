import type { NextPage } from 'next'

import Hero from '../components/hero'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Portfolio from '../components/portfolio'
import Header from '../components/header'
import Experience from '../components/experience'

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <Header />

        <main>
          <Hero />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Home
