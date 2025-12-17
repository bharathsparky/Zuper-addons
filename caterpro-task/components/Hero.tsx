'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Clock, BarChart3, Mic, Download } from 'lucide-react'
import { Badge, Button, Container } from './ui'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary gradient orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse-glow" />
        
        {/* Secondary accent orb */}
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-tl from-accent/20 via-accent/5 to-transparent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px'
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="primary" className="mb-8">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              UX Design Challenge
            </Badge>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6"
          >
            Design a{' '}
            <span className="gradient-text">Profitability</span>
            <br />
            <span className="gradient-text">&amp; Commission</span> Module
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-10"
          >
            Show us how you think through complex financial UX for an event &amp; catering platform.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button href="#context" size="lg">
              View the Brief
              <ArrowDown className="w-4 h-4" />
            </Button>
            <Button variant="secondary" size="lg" href="/task.pdf" download="UX-Design-Challenge-CaterPro.pdf">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </motion.div>

          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            <div className="flex items-center gap-2 text-foreground-muted">
              <Clock className="w-5 h-5 text-primary" />
              <span>3-5 days</span>
            </div>
            <div className="flex items-center gap-2 text-foreground-muted">
              <BarChart3 className="w-5 h-5 text-accent" />
              <span>3 scenarios</span>
            </div>
            <div className="flex items-center gap-2 text-foreground-muted">
              <Mic className="w-5 h-5 text-primary" />
              <span>30-min presentation</span>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-1"
        >
          <motion.div className="w-1.5 h-1.5 bg-foreground-muted rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

