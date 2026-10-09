import SectionTitle from './SectionTitle'
import { achievements } from '../data/portfolio'

export default function Achievements() {
  return (
    <div>
      <SectionTitle
        eyebrow="Achievements"
        title="Milestones & Recognition"
        description="Competition results and hackathon nominations."
        center
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {achievements.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.title}
              className="liquid-glass rounded-2xl p-6 shimmer-card flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="p-3 rounded-xl bg-accent/10 text-accent">
                  <Icon size={20} />
                </span>
                <span className="px-2.5 py-1 rounded-full bg-bg/60 border border-border text-[11px] font-medium text-dim whitespace-nowrap">
                  {item.category}
                </span>
              </div>

              <h3 className="text-base font-semibold text-text mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-dim leading-relaxed">
                {item.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
