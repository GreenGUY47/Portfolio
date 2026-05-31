import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/index.css'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import AboutMe from './About.jsx'
import Projects from './Projects.jsx'
import CV from './CV.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'


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
      <section id='cv' className='scroll-mt-0'>
        <CV />
      </section>
      <section id='contact' className='scroll-mt-0'>
        <Contact />
      </section>
    </main>
    <footer>
      <Footer />
    </footer>
    </div>
  </StrictMode>
)