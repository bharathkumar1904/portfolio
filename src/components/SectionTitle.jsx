export default function SectionTitle({ eyebrow, title, description, center }) {
  return (
    <div className={`max-w-2xl mb-12 ${center ? 'mx-auto text-center' : ''}`}>
      <p className={`text-sm font-medium text-accent mb-2 uppercase tracking-wider ${center ? 'text-center' : ''}`}>
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3">{title}</h2>
      {description && <p className="text-dim leading-relaxed">{description}</p>}
    </div>
  )
}
