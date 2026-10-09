import { useState, useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import SplashScreen from './components/SplashScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Toolkit from './components/Toolkit'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SECTIONS = [
  { id: 'about', label: 'About', Component: About },
  { id: 'skills', label: 'Skills', Component: Skills },
  { id: 'toolkit', label: 'Tools', Component: Toolkit },
  { id: 'projects', label: 'Projects', Component: Projects },
  { id: 'achievements', label: 'Achievements', Component: Achievements },
  { id: 'certifications', label: 'Certificates', Component: Certifications },
  { id: 'education', label: 'Education', Component: Education },
  { id: 'contact', label: 'Contact', Component: Contact },
]

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [loading])

  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <SplashScreen onComplete={() => setLoading(false)} />

        {!loading && (
          <div className="min-h-screen bg-bg text-text">
            <Navbar sections={SECTIONS} />

            <main>
              <Hero />

              {SECTIONS.map(({ id, Component }, i) => (
                <div key={id}>
                  {i > 0 && <div className="section-divider" />}
                  <section id={id} className="py-20 sm:py-28 scroll-mt-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="reveal">
                        <Component />
                      </div>
                    </div>
                  </section>
                </div>
              ))}
            </main>

            <Footer />
          </div>
        )}
      </ThemeProvider>
    </MotionConfig>
  )
}
