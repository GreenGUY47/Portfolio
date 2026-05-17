import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/index.css'
import Navbar from './Navbar'
import Home from './Home'
import AboutMe from '../../About'
import Projects from './Projects'
import Footer from './Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex flex-col gap-0 w-screen h-screen'>
    <header>
      <Navbar />
    </header>
    <main>
      <section id='home' className='scroll-mt-20'>
        <Home />
      </section>
      <section id='about' className='scroll-mt-0'>
        <AboutMe />
      </section>
      <section id='projects' className='scroll-mt-0'>
        <Projects />
      </section>
    </main>
    <footer>
      <Footer />
    </footer>
    </div>
  </StrictMode>
)