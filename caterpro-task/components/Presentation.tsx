'use client'

import { motion } from 'framer-motion'
import { Search, Target, Scale, Rocket } from 'lucide-react'
import { AnimatedSection, Container, SectionHeader, Card } from './ui'

const guidelines = [
  {
    icon: Search,
    title: 'How you approached the problem',
    description: 'Research, breakdown, prioritization',
  },
  {
    icon: Target,
    title: 'Your design decisions',
    description: 'Key screens and the reasoning behind them',
  },
  {
    icon: Scale,
    title: 'Challenges & tradeoffs',
    description: 'What was hard? What alternatives existed?',
  },
  {
    icon: Rocket,
    title: 'Future iterations',
    description: 'What would you do with more time?',
  },
]

export function Presentation() {
  return (
    <AnimatedSection className="relative">
      <Container>
        <SectionHeader 
          title="Presentation Day" 
          subtitle="Walk us through your thinking. We care about process as much as output."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {guidelines.map((guideline, index) => (
            <motion.div
              key={guideline.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <Card hover={true} className="h-full">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <guideline.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{guideline.title}</h3>
                    <p className="text-sm text-foreground-muted">{guideline.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}

