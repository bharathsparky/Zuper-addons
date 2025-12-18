'use client'

import { motion } from 'framer-motion'
import { Sparkles, Mail, PartyPopper } from 'lucide-react'
import { Container } from './ui'
import { useDiscoMode } from './DiscoModeProvider'

export function Footer() {
  const { isDiscoMode } = useDiscoMode()

  return (
    <footer className="relative py-20 md:py-32">
      {/* Background gradient */}
      <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${
        isDiscoMode 
          ? 'bg-gradient-to-t from-purple-500/10 via-pink-500/5 to-transparent' 
          : 'bg-gradient-to-t from-primary/5 via-transparent to-transparent'
      }`} />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Good luck message */}
          <div className={`inline-flex items-center gap-2 mb-6 ${isDiscoMode ? 'disco-bounce' : ''}`}>
            {isDiscoMode ? (
              <PartyPopper className="w-5 h-5 disco-text" />
            ) : (
              <Sparkles className="w-5 h-5 text-accent" />
            )}
            <span className={`text-lg font-medium ${isDiscoMode ? 'disco-text' : ''}`}>
              {isDiscoMode ? 'Keep Dancing!' : 'Good luck!'}
            </span>
            {isDiscoMode ? (
              <PartyPopper className="w-5 h-5 disco-text" style={{ transform: 'scaleX(-1)' }} />
            ) : (
              <Sparkles className="w-5 h-5 text-primary" />
            )}
          </div>
          
          <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-6 ${
            isDiscoMode ? 'disco-shake' : ''
          }`}>
            {isDiscoMode ? (
              <>
                <span className="disco-text neon-glow">Thanks for</span><br />
                <span className="disco-text neon-glow">partying with us!</span> 🪩
              </>
            ) : (
              <>
                We&apos;re excited to see<br />
                <span className="gradient-text">your approach</span>
              </>
            )}
          </h2>

          {/* Contact */}
          <motion.a
            href="mailto:careers@zuper.co"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-200 mb-12 ${
              isDiscoMode 
                ? 'disco-border bg-black/50 backdrop-blur-sm disco-scale-pulse' 
                : 'bg-card border border-border hover:border-border-light text-foreground-muted hover:text-foreground'
            }`}
          >
            <Mail className={`w-4 h-4 ${isDiscoMode ? 'disco-text' : ''}`} />
            <span className={isDiscoMode ? 'disco-text' : ''}>
              {isDiscoMode ? 'Drop us a beat 🎵' : 'Questions? Reach out to us'}
            </span>
          </motion.a>

          {/* Footer info */}
          <div className={`pt-8 border-t ${isDiscoMode ? 'border-purple-500/30' : 'border-border'}`}>
            <p className={`text-sm ${isDiscoMode ? 'disco-text' : 'text-foreground-muted'}`}>
              {isDiscoMode ? (
                <>
                  Secret disco mode by{' '}
                  <span className="font-bold">Zuper</span>{' '}
                  🕺💃
                </>
              ) : (
                <>
                  Take-home assignment for{' '}
                  <span className="text-foreground">Zuper</span>{' '}
                  Product Designer role
                </>
              )}
            </p>
            <p className={`text-xs mt-2 ${isDiscoMode ? 'text-purple-400/50' : 'text-foreground-muted/50'}`}>
              © {new Date().getFullYear()} Zuper. All rights reserved.
            </p>
          </div>
        </motion.div>
      </Container>
    </footer>
  )
}
