'use client'

import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

interface DiscoContextType {
  isDiscoMode: boolean
  toggleDiscoMode: () => void
  clickCount: number
}

const DiscoContext = createContext<DiscoContextType>({
  isDiscoMode: false,
  toggleDiscoMode: () => {},
  clickCount: 0,
})

export const useDiscoMode = () => useContext(DiscoContext)

// Disco ball emoji array for floating effect (using cat.gif instead of hearts/party poppers)
const DISCO_EMOJIS = ['🪩', '✨', '💜', '💙', '💚', '💛', '🧡', '/cat.gif', '/cat.gif', '/cat.gif', '⭐', '🌟', '💫', '🔮']

// Generate random position for emojis/gifs
const generateEmojiProps = (index: number) => ({
  left: `${Math.random() * 100}%`,
  animationDelay: `${Math.random() * 5}s`,
  animationDuration: `${4 + Math.random() * 6}s`,
  emoji: DISCO_EMOJIS[index % DISCO_EMOJIS.length],
  size: Math.random() * 1.5 + 1,
  isGif: DISCO_EMOJIS[index % DISCO_EMOJIS.length].startsWith('/'),
})

export function DiscoModeProvider({ children }: { children: React.ReactNode }) {
  const [isDiscoMode, setIsDiscoMode] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [floatingEmojis, setFloatingEmojis] = useState<ReturnType<typeof generateEmojiProps>[]>([])
  const confettiIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Regenerate floating emojis when disco mode activates
  useEffect(() => {
    if (isDiscoMode) {
      const emojis = [...Array(25)].map((_, i) => generateEmojiProps(i))
      setFloatingEmojis(emojis)
    }
  }, [isDiscoMode])

  // Fire confetti cannons continuously during disco mode
  const startConfettiCannons = useCallback(() => {
    // Initial big burst
    const count = 200
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999,
    }

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      })
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#ff0080', '#ff00ff', '#00ffff'],
    })
    fire(0.2, {
      spread: 60,
      colors: ['#ffff00', '#00ff00', '#ff7700'],
    })
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff'],
    })
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#ff0080', '#00ffff', '#00ff00'],
    })
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ['#ff00ff', '#ffff00', '#ff7700'],
    })

    // Continuous side cannons
    confettiIntervalRef.current = setInterval(() => {
      // Left cannon
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.65 },
        colors: ['#ff0080', '#00ffff', '#ffff00'],
        zIndex: 9999,
      })
      // Right cannon
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.65 },
        colors: ['#ff00ff', '#00ff00', '#ff7700'],
        zIndex: 9999,
      })
    }, 400)
  }, [])

  const stopConfettiCannons = useCallback(() => {
    if (confettiIntervalRef.current) {
      clearInterval(confettiIntervalRef.current)
      confettiIntervalRef.current = null
    }
    // Reset confetti
    confetti.reset()
  }, [])

  const toggleDiscoMode = useCallback(() => {
    const newState = !isDiscoMode
    setIsDiscoMode(newState)
    setClickCount((prev) => prev + 1)

    if (newState) {
      startConfettiCannons()
    } else {
      stopConfettiCannons()
    }
  }, [isDiscoMode, startConfettiCannons, stopConfettiCannons])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopConfettiCannons()
    }
  }, [stopConfettiCannons])

  return (
    <DiscoContext.Provider value={{ isDiscoMode, toggleDiscoMode, clickCount }}>
      {/* Disco overlay effects */}
      <AnimatePresence>
        {isDiscoMode && (
          <>
            {/* Animated gradient background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-[1] pointer-events-none"
            >
              {/* Rainbow gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-cyan-500 via-green-500 via-yellow-500 to-red-500 animate-disco-gradient opacity-15" />
              
              {/* Disco ball light rays */}
              <div className="absolute inset-0 disco-rays opacity-30" />
              
              {/* Pulsing strobe effect */}
              <div className="absolute inset-0 bg-white animate-strobe" />
            </motion.div>

            {/* Floating emojis and gifs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 pointer-events-none overflow-hidden z-[60]"
            >
              {floatingEmojis.map((props, i) => (
                <div
                  key={`${i}-${clickCount}`}
                  className="absolute animate-float-up"
                  style={{
                    left: props.left,
                    animationDelay: props.animationDelay,
                    animationDuration: props.animationDuration,
                    fontSize: props.isGif ? undefined : `${props.size}rem`,
                    width: props.isGif ? `${props.size * 3}rem` : undefined,
                    height: props.isGif ? `${props.size * 3}rem` : undefined,
                  }}
                >
                  {props.isGif ? (
                    <img 
                      src={props.emoji} 
                      alt="Disco cat" 
                      className="w-full h-full object-contain"
                      style={{ imageRendering: 'auto' }}
                    />
                  ) : (
                    props.emoji
                  )}
                </div>
              ))}
            </motion.div>

            {/* Disco Mode indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-3 rounded-full disco-border bg-black/80 backdrop-blur-xl"
            >
              <span className="text-2xl animate-spin-slow">🪩</span>
              <span className="font-bold disco-text text-lg tracking-wider">DISCO MODE</span>
              <span className="text-2xl animate-spin-slow" style={{ animationDirection: 'reverse' }}>🪩</span>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main content with disco class for cursor */}
      <div className={isDiscoMode ? 'disco-mode' : ''}>
        {children}
      </div>
    </DiscoContext.Provider>
  )
}

