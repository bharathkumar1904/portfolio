import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { personalInfo } from '../data/portfolio'
import BrandIcon from './BrandIcon'

export default function Navbar({ sections }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')
  const { theme, toggleTheme } = useTheme()

  const links = [{ id: 'home', label: 'Home' }, ...sections.map(({ id, label }) => ({ id, label }))]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const ids = links.map((l) => l.id)
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveLink('#' + ids[i])
          break
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const go = (e, id) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const themeButton = (
    <button
      onClick={toggleTheme}
      className="p-2.5 text-muted hover:text-text hover:bg-surface rounded-lg transition-all duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/70 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/10'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#home"
              onClick={(e) => go(e, 'home')}
              className="text-lg font-bold text-text hover:text-accent transition-colors"
            >
              {personalInfo.shortName}
              <span className="text-accent">.</span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => go(e, link.id)}
                  className={`px-2.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeLink === `#${link.id}`
                      ? 'text-accent bg-accent/10'
                      : 'text-muted hover:text-text hover:bg-surface'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2">
              {themeButton}
              <a
                href="#contact"
                onClick={(e) => go(e, 'contact')}
                className="px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent-600 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
              >
                Let&apos;s Talk
              </a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 text-muted hover:text-text rounded-lg"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-muted hover:text-text rounded-lg"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-5">
              {links.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={(e) => go(e, link.id)}
                  className={`text-xl sm:text-2xl font-medium transition-colors ${
                    activeLink === `#${link.id}` ? 'text-accent' : 'text-muted hover:text-text'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-text border border-border rounded-lg hover:border-accent hover:text-accent transition-colors"
              >
                <BrandIcon name="github" size={16} title="GitHub" />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
