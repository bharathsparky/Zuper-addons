'use client'

import { motion } from 'framer-motion'
import { Building2, Heart, PartyPopper, Users } from 'lucide-react'
import { AnimatedSection, Container, SectionHeader, Card } from './ui'

const eventTypes = [
  { icon: Building2, label: 'Corporate Events' },
  { icon: Heart, label: 'Weddings' },
  { icon: PartyPopper, label: 'Private Parties' },
  { icon: Users, label: 'Large-Scale Catering' },
]

export function Context() {
  return (
    <AnimatedSection id="context" className="relative">
      <Container>
        <SectionHeader title="The Context" />

        {/* Platform intro card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <Card className="relative overflow-hidden" hover={false}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            <div className="p-2 md:p-4">
              <p className="text-lg md:text-xl leading-relaxed">
                You&apos;re designing for <span className="text-primary font-semibold">CaterPro</span> — a SaaS platform helping event and catering companies manage operations. They handle corporate events, weddings, private parties, and large-scale catering.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Event types grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {eventTypes.map((event, index) => (
            <motion.div
              key={event.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background-secondary border border-border hover:border-border-light transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <event.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-foreground-muted text-center">{event.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* The problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full" />
            The Problem
          </h3>
          <p className="text-foreground-muted text-lg leading-relaxed max-w-3xl">
            These businesses struggle with understanding which events are actually profitable. Revenue looks good on paper, but hidden costs — <span className="text-foreground">last-minute vendor charges</span>, <span className="text-foreground">overtime labor</span>, <span className="text-foreground">equipment rentals</span> — eat into margins. Owners need visibility into <span className="text-accent font-medium">real profitability</span>, not just revenue.
          </p>
        </motion.div>
      </Container>
    </AnimatedSection>
  )
}

