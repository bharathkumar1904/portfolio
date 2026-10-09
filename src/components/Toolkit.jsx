import SectionTitle from './SectionTitle'
import BrandIcon from './BrandIcon'
import { toolGroups } from '../data/portfolio'

export default function Toolkit() {
  return (
    <div>
      <SectionTitle
        eyebrow="Tools & Platforms"
        title="Everything I build with"
        description="The AI, cloud, database and deployment tooling behind my projects."
        center
      />

      <div className="flex flex-col gap-4">
        {toolGroups.map((group) => (
          <div
            key={group.label}
            className="liquid-glass rounded-2xl p-5 sm:p-6"
          >
            <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">
              {group.label}
            </h3>

            <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
              {group.items.map((tool) => (
                <li
                  key={tool.name}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-bg/50 border border-border/50 hover:border-accent/40 transition-colors duration-200"
                >
                  <BrandIcon name={tool.icon} size={18} title={tool.name} />
                  <span className="text-sm text-muted truncate" title={tool.name}>
                    {tool.name}
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
