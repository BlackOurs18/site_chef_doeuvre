'use client'

import { useState, useEffect } from 'react'

interface ScrollSpyItem {
  id: string
  label: string
}

interface ScrollSpyProps {
  items: ScrollSpyItem[]
}

export default function ScrollSpy({ items }: ScrollSpyProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  return (
    <nav aria-label="Navigation dans la page" className="sticky top-24">
      <p className="text-xs uppercase tracking-widest text-text-main/40 mb-4 font-semibold">Sommaire</p>
      <ul className="flex flex-col gap-1" role="list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-sm py-1.5 px-3 rounded-xl transition-all duration-150 focus-visible:outline-2 focus-visible:outline-accent-main ${
                activeId === item.id
                  ? 'text-accent-main bg-accent-main/10 font-medium'
                  : 'text-text-main/60 hover:text-text-main hover:bg-bg-secondary'
              }`}
              aria-current={activeId === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
