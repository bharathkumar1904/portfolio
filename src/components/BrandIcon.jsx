import { getBrandMark, monogramIcons, conceptIcons } from '../data/icons'

export default function BrandIcon({ name, size = 20, className = '', title }) {
  const mark = getBrandMark(name)

  if (mark) {
    return (
      <svg
        role="img"
        aria-label={title || mark.title}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        style={{ fill: `#${mark.hex}`, flexShrink: 0 }}
      >
        <title>{title || mark.title}</title>
        <path d={mark.path} />
      </svg>
    )
  }

  const glyph = monogramIcons[name]

  if (glyph) {
    const long = glyph.text.length > 2
    return (
      <span
        role="img"
        aria-label={title || glyph.label}
        className={`inline-flex shrink-0 items-center justify-center font-bold leading-none ${className}`}
        style={{
          width: size,
          height: size,
          fontSize: long ? Math.max(6, Math.round(size * 0.32)) : Math.max(8, Math.round(size * 0.5)),
          letterSpacing: long ? '-0.04em' : '-0.02em',
          borderRadius: Math.max(3, Math.round(size * 0.22)),
          color: glyph.color,
          background: `${glyph.color}1f`,
          boxShadow: `inset 0 0 0 1px ${glyph.color}45`,
        }}
      >
        {glyph.text}
      </span>
    )
  }

  const Concept = conceptIcons[name]

  if (Concept) {
    return (
      <Concept
        size={size}
        className={className}
        role={title ? 'img' : undefined}
        aria-label={title || undefined}
        aria-hidden={title ? undefined : true}
        style={{ flexShrink: 0 }}
      />
    )
  }

  return null
}
