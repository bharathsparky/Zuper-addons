'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Coins, Search, BarChart } from 'lucide-react'
import { AnimatedSection, Container, SectionHeader, Card } from './ui'

const features = [
  {
    icon: TrendingUp,
    title: 'Understand Margins',
    description: 'Profit visibility at event, client, and company level',
    color: 'primary',
  },
  {
    icon: Coins,
    title: 'Track Commissions',
    description: 'Calculate and manage team earnings',
    color: 'accent',
  },
  {
    icon: Search,
    title: 'Identify Patterns',
    description: 'Find most and least profitable segments',
    color: 'primary',
  },
  {
    icon: BarChart,
    title: 'Make Better Decisions',
    description: 'Data-driven pricing and staffing',
    color: 'accent',
  },
]

export function Challenge() {
  return (
    <AnimatedSection className="relative">
      <Container>
        <SectionHeader 
          title="Your Challenge" 
          subtitle="Design a Profitability & Commission Management module that helps catering business owners:"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card glow className="h-full">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    feature.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                  }`}>
                    <feature.icon className={`w-6 h-6 ${
                      feature.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-foreground-muted">{feature.description}</p>
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

