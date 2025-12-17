'use client'

import { motion } from 'framer-motion'
import { FileText, Palette, MessageSquare } from 'lucide-react'
import { AnimatedSection, Container, SectionHeader, Card } from './ui'

const deliverables = [
  {
    icon: FileText,
    title: 'Research Summary',
    description: 'What you explored, patterns you found, assumptions you validated',
    color: 'primary',
  },
  {
    icon: Palette,
    title: 'Design Screens',
    description: 'Mid-to-high fidelity covering all three scenarios',
    color: 'accent',
  },
  {
    icon: MessageSquare,
    title: 'Presentation',
    description: '30-min walkthrough + 15-min Q&A',
    color: 'primary',
  },
]

export function Deliverables() {
  return (
    <AnimatedSection className="relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/20 to-background pointer-events-none" />
      
      <Container className="relative z-10">
        <SectionHeader title="What to Deliver" />

        <div className="grid md:grid-cols-3 gap-6">
          {deliverables.map((deliverable, index) => (
            <motion.div
              key={deliverable.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card glow className="h-full text-center">
                <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-5 ${
                  deliverable.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                }`}>
                  <deliverable.icon className={`w-8 h-8 ${
                    deliverable.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{deliverable.title}</h3>
                <p className="text-foreground-muted">{deliverable.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}

