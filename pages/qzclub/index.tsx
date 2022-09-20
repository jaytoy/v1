import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'

function Index() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <Header />

        <main>
          <div>
            <h2>QZCLUB</h2>
            <p>QZCLUB a sidehustle project that a. It is a React Application built for football club management as well as training courses.</p>
          </div>

          <div>
            <div>Stack</div>
            <ul>
              <li>React</li>
              <li></li>
            </ul>
          </div>
          
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Index