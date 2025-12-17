'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({ title, subtitle, align = 'left', className = '' }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''} ${className}`}
    >
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-foreground-muted max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

