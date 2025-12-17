'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, Music } from 'lucide-react'

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [showEnablePrompt, setShowEnablePrompt] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Try to autoplay when component mounts
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play()
          setIsPlaying(true)
          setHasInteracted(true)
        } catch (error) {
          // Autoplay was prevented by browser
          console.log('Autoplay prevented, waiting for user interaction')
          setIsPlaying(false)
          setShowEnablePrompt(true)
          
          // Hide prompt after 8 seconds
          setTimeout(() => {
            setShowEnablePrompt(false)
          }, 8000)
        }
      }
    }

    playAudio()
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
        setHasInteracted(true)
        setShowEnablePrompt(false)
      }
    }
  }

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/lofi.mp3"
      />

      {/* Floating music control */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Prompt tooltip - only show if autoplay was blocked */}
        <AnimatePresence>
          {showEnablePrompt && !isPlaying && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-card border border-border rounded-xl px-4 py-2 shadow-lg"
            >
              <p className="text-sm text-foreground-muted whitespace-nowrap">
                🎵 Click to enable lo-fi music
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
          title={isPlaying ? 'Mute music' : 'Play music'}
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
