'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface MotionSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function MotionSection({ children, className = '', delay = 0 }: MotionSectionProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
