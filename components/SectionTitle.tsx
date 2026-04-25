interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
  level?: 'h1' | 'h2'
}

export default function SectionTitle({ title, subtitle, className = '', level = 'h2' }: SectionTitleProps) {
  const Tag = level as React.ElementType
  return (
    <div className={`mb-10 ${className}`}>
      <Tag className="text-3xl font-bold text-accent-main mb-3">{title}</Tag>
      {subtitle && (
        <p className="text-lg text-text-main/70 max-w-2xl">{subtitle}</p>
      )}
    </div>
  )
}
