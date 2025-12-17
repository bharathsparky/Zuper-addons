'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, Music } from 'lucide-react'

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPrompt, setShowPrompt] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Hide prompt after 10 seconds
    const timer = setTimeout(() => {
      setShowPrompt(false)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
        setShowPrompt(false)
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/lofi-music.mp3"
      />

      {/* Floating music control */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Prompt tooltip */}
        <AnimatePresence>
          {showPrompt && !isPlaying && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-card border border-border rounded-xl px-4 py-2 shadow-lg"
            >
              <p className="text-sm text-foreground-muted whitespace-nowrap">
                🎵 Enable lo-fi music?
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Music button */}
        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPlaying 
              ? 'bg-primary text-white shadow-lg shadow-primary/30' 
              : 'bg-card border border-border text-foreground-muted hover:text-foreground hover:border-border-light'
          }`}
        >
          {isPlaying ? (
            <>
              {/* Sound wave animation */}
              <div className="absolute inset-0 flex items-center justify-center gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-white rounded-full"
                    animate={{
                      height: ['8px', '16px', '8px'],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>
              <Volume2 className="w-5 h-5 opacity-0" />
            </>
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
        </motion.button>
      </div>

      {/* Music playing indicator - top corner */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-3 py-1.5"
          >
            <Music className="w-3 h-3 text-primary" />
            <span className="text-xs text-foreground-muted">Lo-fi playing</span>
            <div className="flex items-center gap-0.5">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-0.5 bg-primary rounded-full"
                  animate={{
                    height: ['4px', '10px', '4px'],
                  }}
                  transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

