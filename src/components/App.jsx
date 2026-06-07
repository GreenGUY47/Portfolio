import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Analytics } from '@vercel/analytics/react'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import AboutMe from './About.jsx'
import Projects from './Projects.jsx'
import CV from "./CVPORTFOLIO.jsx";
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import ThemeToggle from './ThemeToggle.jsx';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir  = i18n.language === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className='flex flex-col gap-0 w-screen h-screen'>
      <header><Navbar /></header>
      <main>
        <section id='home' className='scroll-mt-20'><Home /></section>
        <section id='about' className='scroll-mt-0'><AboutMe /></section>
        <section id='projects' className='scroll-mt-0'><Projects /></section>
        <section id='cv' className='scroll-mt-0'><CV /></section>
        <section id='contact' className='scroll-mt-0'><Contact /></section>
        <div className="fixed bottom-12 right-6 z-50 shadow-lg hover:scale-110 transition-transform duration-300">
          <ThemeToggle />
        </div>
      </main>
      <footer><Footer /></footer>
      <Analytics />
    </div>
  );
}

export default App;