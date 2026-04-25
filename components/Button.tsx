import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
}

export default function Button({ children, href, variant = 'primary', className = '', onClick }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'
  const variants = {
    primary: 'bg-accent-main text-white hover:bg-accent-main/90 focus-visible:outline-accent-main',
    secondary: 'bg-bg-secondary text-text-main hover:bg-accent-light/20 border border-accent-light/30 focus-visible:outline-accent-light',
  }
  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>
  }
  return <button onClick={onClick} className={classes}>{children}</button>
}
