'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { AnimatedSection, Container, SectionHeader } from './ui'

const assumptions = [
  'CaterPro already has event booking, client management, and invoicing',
  'Cost data (labor, vendors, rentals) is entered into the system',
  'Users are SMB owners and operations managers',
  'Web application, desktop-first (responsive is a plus)',
  'You can invent reasonable data structures',
]

export function Assumptions() {
  return (
    <AnimatedSection className="relative">
      <Container>
        <SectionHeader title="Assumptions You Can Make" />

        <div className="max-w-3xl">
          <ul className="space-y-4">
            {assumptions.map((assumption, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-start gap-4 group"
              >
                <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent/20 transition-colors">
                  <Check className="w-3.5 h-3.5 text-accent" />
                </span>
                <span className="text-lg text-foreground-muted group-hover:text-foreground transition-colors">
                  {assumption}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </AnimatedSection>
  )
}

