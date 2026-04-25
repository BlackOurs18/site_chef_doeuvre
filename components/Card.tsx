import Link from 'next/link'

interface CardProps {
  title: string
  description?: string
  tags?: string[]
  href?: string
  children?: React.ReactNode
  className?: string
  accent?: boolean
}

export default function Card({ title, description, tags, href, children, className = '', accent = false }: CardProps) {
  const inner = (
    <div className={`bg-bg-secondary rounded-3xl p-6 shadow-sm transition-shadow duration-200 ${href ? 'hover:shadow-md' : ''} ${accent ? 'border-l-4 border-accent-main' : ''} ${className}`}>
      <h3 className={`text-xl font-semibold mb-2 ${accent ? 'text-accent-main' : 'text-text-main'}`}>{title}</h3>
      {description && <p className="text-text-main/70 text-sm mb-4 leading-relaxed">{description}</p>}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-bg-primary text-accent-light border border-accent-light/30 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}
      {children}
    </div>
  )

  if (href) {
    return <Link href={href} className="block focus-visible:outline-2 focus-visible:outline-accent-main rounded-3xl">{inner}</Link>
  }
  return inner
}
