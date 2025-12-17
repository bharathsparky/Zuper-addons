'use client'

import { Hero, Context, Challenge, Scenarios, Assumptions, Deliverables, Presentation, Evaluation, Footer } from '@/components'
import { ProgressBar } from '@/components/ProgressBar'

export default function Home() {
  return (
    <>
      <ProgressBar />
      <main className="relative">
        <Hero />
        <Context />
        <Challenge />
        <Scenarios />
        <Assumptions />
        <Deliverables />
        <Presentation />
        <Evaluation />
        <Footer />
      </main>
    </>
  )
}
