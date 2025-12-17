'use client'

import { motion } from 'framer-motion'
import { Sparkles, Bot, Zap } from 'lucide-react'
import { AnimatedSection, Container } from './ui'

export function Bonus() {
  return (
    <AnimatedSection className="relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 md:p-12"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Bonus Challenge</span>
                <h3 className="text-2xl md:text-3xl font-semibold">AI Integration</h3>
              </div>
            </div>

            <p className="text-lg text-foreground-muted mb-8 max-w-2xl">
              Want to stand out? Consider how <span className="text-foreground font-medium">AI and intelligent automation</span> could enhance 
              the profitability and commission workflows. This is optional but will earn you bonus points!
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border">
                <Bot className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">AI-Powered Insights</h4>
                  <p className="text-sm text-foreground-muted">Predictive analytics, anomaly detection, or smart recommendations</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border">
                <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Intelligent Automation</h4>
                  <p className="text-sm text-foreground-muted">Auto-categorization, smart alerts, or workflow optimization</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </AnimatedSection>
  )
}

