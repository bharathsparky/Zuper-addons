'use client'

import { motion } from 'framer-motion'
import { Sparkles, Mail } from 'lucide-react'
import { Container } from './ui'

export function Footer() {
  return (
    <footer className="relative py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Good luck message */}
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-lg font-medium">Good luck!</span>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-6">
            We&apos;re excited to see<br />
            <span className="gradient-text">your approach</span>
          </h2>

          {/* Contact */}
          <motion.a
            href="mailto:careers@zuper.co"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border hover:border-border-light text-foreground-muted hover:text-foreground transition-all duration-200 mb-12"
          >
            <Mail className="w-4 h-4" />
            <span>Questions? Reach out to us</span>
          </motion.a>

          {/* Footer info */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-foreground-muted">
              Take-home assignment for{' '}
              <span className="text-foreground">Zuper</span>{' '}
              Product Designer role
            </p>
            <p className="text-xs text-foreground-muted/50 mt-2">
              © {new Date().getFullYear()} Zuper. All rights reserved.
            </p>
          </div>
        </motion.div>
      </Container>
    </footer>
  )
}

