'use client'

import { Hero, Context, Challenge, Scenarios, Assumptions, Deliverables, Bonus, Presentation, Evaluation, Footer, AudioPlayer, ParticleBackground, DiscoModeProvider } from '@/components'
import { ProgressBar } from '@/components/ProgressBar'

export default function Home() {
  return (
    <DiscoModeProvider>
      <ParticleBackground />
      <ProgressBar />
      <AudioPlayer />
      <main className="relative">
        <Hero />
        <Context />
        <Challenge />
        <Scenarios />
        <Assumptions />
        <Deliverables />
        <Bonus />
        <Presentation />
        <Evaluation />
        <Footer />
      </main>
    </DiscoModeProvider>
  )
}
