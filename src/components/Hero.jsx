import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { personalInfo, socialLinks, allTools } from '../data/portfolio'
import BrandIcon from './BrandIcon'

const firstName = 'Bharath'
const lastName = 'Kumar Peddireddy'

const roles = [
  'Full-Stack Developer',
  'AI / ML Enthusiast',
  'Backend Engineer',
  'CSE Undergrad at KL University',
]

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout
    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        )
      }, isDeleting ? 40 : 80)
    }
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden aurora-bg">
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/6 w-[300px] h-[300px] bg-accent-pink/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/6 w-[250px] h-[250px] bg-accent-cyan/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm font-medium text-accent mb-4 uppercase tracking-widest"
          >
            Hi, I'm
          </motion.p>

          <div className="mb-4">
            <div>
              <span className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
                {firstName.split('').map((letter, i) => (
                  <motion.span
                    key={`f-${i}`}
                    initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block text-accent"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </div>

            <div className="-mt-1">
              <span className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-text">
                {lastName.split('').map((letter, i) => {
                  const idx = i + firstName.length + 1
                  return (
                    <motion.span
                      key={`l-${i}`}
                      initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + idx * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="inline-block"
                      style={{ width: letter === ' ' ? '0.25em' : undefined }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  )
                })}
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl sm:text-3xl font-semibold mb-6 h-10"
          >
            <span className="gradient-text">{displayText}</span>
            <span className="typing-cursor" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-lg text-dim leading-relaxed mb-8 max-w-2xl"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-6 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-600 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
            >
              View Projects
            </button>
            <a
              href={personalInfo.resumeUrl}
              download
              className="px-6 py-3.5 text-sm font-semibold text-text border border-border hover:border-accent hover:text-accent rounded-lg transition-all duration-200"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex items-center gap-3 mb-10"
          >
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="p-3 text-muted hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-200 liquid-glass"
                aria-label={label}
              >
                <BrandIcon name={icon} size={20} title={label} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 pt-8 border-t border-border/50"
        >
          <p className="text-xs text-dim uppercase tracking-wider mb-4">
            Tools &amp; platforms I use
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {allTools.map((tool) => (
              <li
                key={tool.name}
                className="flex items-center gap-2 text-sm text-muted"
                title={tool.name}
              >
                <BrandIcon name={tool.icon} size={16} title={tool.name} />
                <span>{tool.name}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
