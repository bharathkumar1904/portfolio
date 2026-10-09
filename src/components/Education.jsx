import SectionTitle from './SectionTitle'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <div>
      <SectionTitle
        eyebrow="Education"
        title="Academic journey"
        description="My formal education and academic achievements."
      />

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent-pink to-accent-cyan" />

        <div className="space-y-8 pl-12">
          {education.map((edu) => (
            <div key={edu.degree} className="relative">
              <div className="absolute -left-12 top-1 flex items-center justify-center w-8 h-8 bg-bg border-2 border-accent rounded-full">
                <div className="w-2.5 h-2.5 bg-accent rounded-full" />
              </div>

              <div className="liquid-glass rounded-xl p-6 shimmer-card">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-2.5 py-1 text-xs font-medium text-accent bg-accent/10 rounded-md">
                    {edu.period}
                  </span>
                  <span className="text-xs text-dim">{edu.location}</span>
                </div>

                <h3 className="text-base font-semibold text-text mb-1">{edu.degree}</h3>
                <p className="text-sm text-muted mb-2">{edu.institution}</p>
                {edu.score && (
                  <p className="text-sm font-medium text-accent mb-3">{edu.score}</p>
                )}

                {edu.highlights?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2 py-1 text-xs text-muted bg-bg/50 border border-border/50 rounded-md"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
