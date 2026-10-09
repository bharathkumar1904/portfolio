import { personalInfo, socialLinks } from '../data/portfolio'
import BrandIcon from './BrandIcon'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} {personalInfo.name}
            </p>
            <p className="text-xs text-dim mt-1">
              {personalInfo.degree} · {personalInfo.location}
            </p>
          </div>

          <div className="flex items-center gap-1">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="p-2.5 text-muted hover:text-accent hover:bg-surface rounded-lg transition-colors"
                aria-label={label}
              >
                <BrandIcon name={icon} size={16} title={label} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
