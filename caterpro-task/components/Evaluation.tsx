'use client'

import { motion } from 'framer-motion'
import { AnimatedSection, Container, SectionHeader } from './ui'

const criteria = [
  {
    title: 'Research & Discovery',
    description: 'How you approach understanding a new domain',
    number: '01',
  },
  {
    title: 'Information Architecture',
    description: 'How you structure complex financial data',
    number: '02',
  },
  {
    title: 'UX for Complexity',
    description: 'How you simplify without oversimplifying',
    number: '03',
  },
  {
    title: 'Visual Design',
    description: 'Clarity, hierarchy, and professional polish',
    number: '04',
  },
  {
    title: 'Communication',
    description: 'How clearly you articulate your thinking',
    number: '05',
  },
]

export function Evaluation() {
  return (
    <AnimatedSection className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary/50 pointer-events-none" />
      
      <Container className="relative z-10">
        <SectionHeader title="What We're Looking For" />

        <div className="space-y-4">
          {criteria.map((criterion, index) => (
            <motion.div
              key={criterion.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group"
            >
              <div className="flex items-center gap-6 p-5 rounded-xl bg-card border border-border hover:border-border-light hover:bg-card-hover transition-all duration-200">
                <span className="text-3xl font-bold text-border group-hover:text-primary/50 transition-colors font-mono">
                  {criterion.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    {criterion.title}
                  </h3>
                  <p className="text-foreground-muted text-sm">{criterion.description}</p>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}

