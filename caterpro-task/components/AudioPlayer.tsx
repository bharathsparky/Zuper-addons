'use client'

import { useRef, useEffect } from 'react'
import { useDiscoMode } from './DiscoModeProvider'

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const { isDiscoMode, toggleDiscoMode } = useDiscoMode()

  // Control audio based on disco mode state
  useEffect(() => {
    if (audioRef.current) {
      if (isDiscoMode) {
        audioRef.current.play().catch(() => {
          // Autoplay blocked, will play on next user interaction
          console.log('Audio play blocked by browser')
        })
      } else {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [isDiscoMode])

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/edm.mp3"
      />

      {/* SECRET DISCO TRIGGER - The only way to activate music & party mode */}
      {/* A mysterious tiny dot that reveals the hidden party */}
      <button
        onClick={toggleDiscoMode}
        className={`fixed bottom-6 right-6 z-[100] rounded-full transition-all duration-500 ${
          isDiscoMode 
            ? 'w-12 h-12 opacity-100 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-spin-slow shadow-lg shadow-purple-500/50' 
            : 'w-2 h-2 opacity-[0.15] hover:opacity-40 hover:scale-[3] hover:shadow-lg hover:shadow-white/20 bg-white cursor-pointer'
        }`}
        aria-label="Secret disco mode"
        title={isDiscoMode ? "🪩 Party Mode ON" : ""}
      >
        {isDiscoMode && (
          <span className="text-xl">🪩</span>
        )}
      </button>
    </>
  )
}
