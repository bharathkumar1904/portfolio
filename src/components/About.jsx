import { useState } from 'react'
import SectionTitle from './SectionTitle'
import { stats, focusAreas, personalInfo } from '../data/portfolio'

export default function About() {
  const [imgFailed, setImgFailed] = useState(false)
  const initials = personalInfo.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <div>
      <SectionTitle
        eyebrow="About Me"
        title="A quick introduction"
        description="Computer science student focused on building real, scalable products."
      />

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-accent/20 via-accent-pink/10 to-accent-cyan/20 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

            <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden border border-border/50 group-hover:border-accent/40 transition-colors duration-300 bg-gradient-to-br from-accent/20 to-accent-pink/10 flex items-center justify-center">
              {!imgFailed && (
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  width="288"
                  height="320"
                  loading="lazy"
                  decoding="async"
                  onError={() => setImgFailed(true)}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <span
                className={`text-6xl font-bold text-accent/30 ${imgFailed ? '' : 'hidden'}`}
                aria-hidden={!imgFailed}
              >
                {initials}
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="space-y-4 text-muted leading-relaxed">
            <p>{personalInfo.summary}</p>
            <p>
              I build across the whole stack and am particularly interested in{' '}
              <span className="text-text font-medium">AI and machine learning</span>,{' '}
              <span className="text-text font-medium">backend development</span> and{' '}
              <span className="text-text font-medium">scalable systems</span>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="liquid-glass rounded-xl p-5 text-center shimmer-card"
              >
                <div className="text-2xl font-bold text-text mb-1">{stat.value}</div>
                <div className="text-sm text-dim">{stat.label}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text mb-3">Currently focused on</h3>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 text-xs font-medium text-muted bg-surface border border-border rounded-lg hover:border-accent/40 hover:text-accent transition-colors duration-200 cursor-default"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
