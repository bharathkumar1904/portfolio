import SectionTitle from './SectionTitle'
import BrandIcon from './BrandIcon'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <div>
      <SectionTitle
        eyebrow="Technical Skills"
        title="Technologies I work with"
        description="Languages, frameworks, databases and core computer science fundamentals."
        center
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group) => (
          <div
            key={group.category}
            className="liquid-glass rounded-xl p-6 shimmer-card group"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="p-2 rounded-lg bg-accent/10 text-accent">
                <BrandIcon name={group.icon} size={16} title={group.category} />
              </span>
              <h3 className="text-sm font-semibold text-text">
                {group.category}
              </h3>
            </div>

            <ul className="flex flex-col gap-2">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-2.5 text-sm text-muted"
                >
                  <BrandIcon name={item.icon} size={16} title={item.name} />
                  <span className="transition-colors duration-200 group-hover:text-text">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
