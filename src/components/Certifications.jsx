import { Award } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { certifications } from '../data/portfolio'

export default function Certifications() {
  return (
    <div>
      <SectionTitle
        eyebrow="Certifications"
        title="Licenses & Certifications"
        description="Professional certifications and courses I have completed."
        center
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {certifications.map((cert, i) => (
          <div
            key={cert.title}
            className="group liquid-glass rounded-xl p-6 shimmer-card"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <span className="inline-flex p-2.5 text-accent bg-accent/10 rounded-lg mb-4">
              <Award size={18} />
            </span>
            <h3 className="text-sm font-semibold text-text group-hover:text-accent transition-colors leading-snug">
              {cert.title}
            </h3>
            <p className="text-xs text-muted mt-2">
              {cert.issuer} · {cert.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
