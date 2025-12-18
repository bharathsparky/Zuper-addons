'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Clock, BarChart3, Mic, Download, Sparkles } from 'lucide-react'
import { Badge, Button, Container } from './ui'
import { useDiscoMode } from './DiscoModeProvider'

export function Hero() {
  const { isDiscoMode } = useDiscoMode()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary gradient orb */}
        <div 
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full blur-3xl transition-all duration-500 ${
            isDiscoMode 
              ? 'bg-gradient-to-br from-pink-500/40 via-purple-500/30 to-cyan-500/40 animate-pulse' 
              : 'bg-gradient-to-br from-primary/30 via-primary/10 to-transparent animate-pulse-glow'
          }`}
        />
        
        {/* Secondary accent orb */}
        <div 
          className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full blur-3xl transition-all duration-500 ${
            isDiscoMode
              ? 'bg-gradient-to-tl from-yellow-500/30 via-green-500/20 to-cyan-500/30 animate-pulse'
              : 'bg-gradient-to-tl from-accent/20 via-accent/5 to-transparent animate-pulse-glow'
          }`}
          style={{ animationDelay: '2s' }} 
        />
        
        {/* Grid pattern overlay */}
        <div 
          className={`absolute inset-0 transition-opacity duration-500 ${isDiscoMode ? 'opacity-[0.05]' : 'opacity-[0.02]'}`}
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
            <Badge 
              variant="primary" 
              className={`mb-8 ${isDiscoMode ? 'disco-border disco-bounce' : ''}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isDiscoMode ? 'bg-yellow-400 animate-ping' : 'bg-primary animate-pulse'}`} />
              {isDiscoMode ? '🪩 Party Mode Activated' : 'UX Design Challenge'}
            </Badge>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6 ${
              isDiscoMode ? 'disco-shake' : ''
            }`}
          >
            {isDiscoMode ? (
              <>
                <span className="disco-text neon-glow">Design</span>{' '}
                <span className="disco-text neon-glow" style={{ animationDelay: '0.3s' }}>With</span>
                <br />
                <span className="disco-text neon-glow" style={{ animationDelay: '0.6s' }}>Good Beats</span>{' '}
                <span className="inline-block animate-spin-slow">🪩</span>
              </>
            ) : (
              <>
                Design a{' '}
                <span className="gradient-text">Profitability</span>
                <br />
                <span className="gradient-text">&amp; Commission</span> Module
              </>
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 ${
              isDiscoMode 
                ? 'text-white/90 disco-text' 
                : 'text-foreground-muted'
            }`}
            style={isDiscoMode ? { animationDuration: '4s' } : {}}
          >
            {isDiscoMode 
              ? '✨ You found the secret mode! Designing with good vibes & great beats. Click the hidden zone again to turn it off 🎧'
              : 'Show us how you think through complex financial UX for an event & catering platform.'
            }
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button 
              href="#context" 
              size="lg"
              className={isDiscoMode ? 'disco-border disco-scale-pulse !bg-black/50' : ''}
            >
              {isDiscoMode && <Sparkles className="w-4 h-4" />}
              {isDiscoMode ? 'Keep Designing' : 'View the Brief'}
              {!isDiscoMode && <ArrowDown className="w-4 h-4" />}
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              href="/task.pdf" 
              download="UX-Design-Challenge-CaterPro.pdf"
              className={isDiscoMode ? 'disco-border !bg-black/50' : ''}
            >
              <Download className={`w-4 h-4 ${isDiscoMode ? 'disco-text' : ''}`} />
              {isDiscoMode ? 'Download Brief' : 'Download PDF'}
            </Button>
          </motion.div>

          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            <div className={`flex items-center gap-2 ${isDiscoMode ? 'disco-bounce' : ''}`} style={isDiscoMode ? { animationDelay: '0s' } : {}}>
              <Clock className={`w-5 h-5 ${isDiscoMode ? 'disco-text' : 'text-primary'}`} />
              <span className={isDiscoMode ? 'disco-text' : 'text-foreground-muted'}>
                {isDiscoMode ? '∞ creative hours' : '3-5 days'}
              </span>
            </div>
            <div className={`flex items-center gap-2 ${isDiscoMode ? 'disco-bounce' : ''}`} style={isDiscoMode ? { animationDelay: '0.1s' } : {}}>
              <BarChart3 className={`w-5 h-5 ${isDiscoMode ? 'disco-text' : 'text-accent'}`} />
              <span className={isDiscoMode ? 'disco-text' : 'text-foreground-muted'}>
                {isDiscoMode ? '🎨 good vibes' : '3 scenarios'}
              </span>
            </div>
            <div className={`flex items-center gap-2 ${isDiscoMode ? 'disco-bounce' : ''}`} style={isDiscoMode ? { animationDelay: '0.2s' } : {}}>
              <Mic className={`w-5 h-5 ${isDiscoMode ? 'disco-text' : 'text-primary'}`} />
              <span className={isDiscoMode ? 'disco-text' : 'text-foreground-muted'}>
                {isDiscoMode ? '🎵 design beats' : '30-min presentation'}
              </span>
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
          className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-1 ${
            isDiscoMode ? 'disco-border' : 'border-border'
          }`}
        >
          <motion.div 
            className={`w-1.5 h-1.5 rounded-full ${isDiscoMode ? 'bg-pink-500' : 'bg-foreground-muted'}`}
            animate={isDiscoMode ? { 
              backgroundColor: ['#ff0080', '#00ffff', '#ffff00', '#00ff00', '#ff00ff', '#ff0080']
            } : {}}
            transition={isDiscoMode ? { duration: 2, repeat: Infinity } : {}}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
