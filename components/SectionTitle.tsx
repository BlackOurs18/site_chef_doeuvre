interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`mb-10 ${className}`}>
      <h2 className="text-3xl font-bold text-accent-main mb-3">{title}</h2>
      {subtitle && (
        <p className="text-lg text-text-main/70 max-w-2xl">{subtitle}</p>
      )}
    </div>
  )
}
