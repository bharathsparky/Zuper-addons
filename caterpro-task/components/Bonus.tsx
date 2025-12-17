'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
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
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            
            <span className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">Bonus Points</span>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">AI Integration</h3>

            <p className="text-lg text-foreground-muted">
              If you integrate <span className="text-foreground font-medium">AI</span> into your workflow design, 
              it will earn you <span className="text-accent font-medium">bonus points</span>. 
              Show us how you think about intelligent features!
            </p>
          </div>
        </motion.div>
      </Container>
    </AnimatedSection>
  )
}
