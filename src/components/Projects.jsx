import { useState } from 'react'
import { ExternalLink, Github, Plus, Minus, Check } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { projects, featuredProject } from '../data/portfolio'

function LinkButton({ href, children, primary = false }) {
  if (!href || href === '#') return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        primary
          ? 'inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent-600 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/20'
          : 'inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-text border border-border hover:border-accent hover:text-accent rounded-lg transition-colors'
      }
    >
      {children}
    </a>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col liquid-glass rounded-2xl overflow-hidden shimmer-card">
      <div className="relative h-40 bg-gradient-to-br from-accent/10 via-accent-pink/5 to-transparent flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <span className="relative text-3xl font-bold text-white/10 group-hover:text-accent/20 transition-colors duration-300">
          {project.title}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-text mb-1 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-accent-pink font-medium mb-3">{project.subtitle}</p>
        <p className="text-sm text-dim leading-relaxed mb-4">{project.description}</p>

        {project.features?.length > 0 && (
          <ul className="flex flex-col gap-2 mb-4">
            {project.features.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-sm text-muted">
                <Icon size={14} className="text-accent shrink-0" />
                {text}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-xs text-muted bg-bg/50 border border-border/50 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="flex flex-col gap-2 mb-5">
          {project.highlights?.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-dim leading-relaxed">
              <Check size={13} className="text-accent shrink-0 mt-0.5" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex gap-3 mt-auto">
          <LinkButton href={project.liveUrl} primary>
            <ExternalLink size={14} /> Live Demo
          </LinkButton>
          <LinkButton href={project.github}>
            <Github size={14} /> GitHub
          </LinkButton>
        </div>
      </div>
    </div>
  )
}

function FeaturedProject() {
  const [open, setOpen] = useState(false)

  return (
    <div className="liquid-glass rounded-2xl overflow-hidden mb-8 glow-border">
      <div className="grid lg:grid-cols-2">
        <div className="p-8 sm:p-10">
          <span className="inline-flex px-3 py-1 mb-4 text-xs font-semibold text-accent bg-accent/10 rounded-full">
            Featured Project
          </span>
          <h3 className="text-2xl font-bold text-text mb-2">{featuredProject.title}</h3>
          <p className="text-sm text-accent-pink font-medium mb-6">
            {featuredProject.subtitle}
          </p>

          <div className="space-y-4 text-muted text-sm leading-relaxed mb-6">
            <div>
              <h4 className="font-semibold text-text mb-1">Problem</h4>
              <p>{featuredProject.problem}</p>
            </div>
            <div>
              <h4 className="font-semibold text-text mb-1">Solution</h4>
              <p>{featuredProject.solution}</p>
            </div>
          </div>

          <ul className="flex flex-col gap-2.5 mb-6">
            {featuredProject.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
                <Check size={14} className="text-accent shrink-0 mt-1" />
                {h}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-6">
            {featuredProject.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs text-accent bg-accent/10 border border-accent/20 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <LinkButton href={featuredProject.liveUrl} primary>
              <ExternalLink size={15} /> Live Demo
            </LinkButton>
            {(featuredProject.repos?.length
              ? featuredProject.repos
              : [{ label: 'GitHub', url: featuredProject.github }]
            )
              .filter((repo) => repo.url)
              .map((repo) => (
                <LinkButton key={repo.url} href={repo.url}>
                  <Github size={15} /> {repo.label}
                </LinkButton>
              ))}
          </div>
        </div>

        <div className="p-8 sm:p-10 bg-surface/40 border-t lg:border-t-0 lg:border-l border-border">
          <h4 className="text-sm font-semibold text-accent mb-4">Key Features</h4>
          <ul className="space-y-2.5 mb-6">
            {featuredProject.features.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-muted">
                <span className="p-1.5 text-accent bg-accent/10 rounded-md shrink-0">
                  <Icon size={14} />
                </span>
                {text}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-600 transition-colors"
          >
            {open ? <Minus size={15} /> : <Plus size={15} />}
            {open ? 'Hide' : 'My contribution'}
          </button>
          {open && (
            <p className="mt-3 text-sm text-muted leading-relaxed animate-fade-up">
              {featuredProject.contribution}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <div>
      <SectionTitle
        eyebrow="Projects"
        title="Selected work"
        description="A few projects that demonstrate my approach: problem → solution → technology → result."
      />

      <FeaturedProject />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
