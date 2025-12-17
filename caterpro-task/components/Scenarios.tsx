'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, DollarSign, Settings, LineChart } from 'lucide-react'
import { AnimatedSection, Container, SectionHeader, Badge } from './ui'

const scenarios = [
  {
    id: 1,
    icon: DollarSign,
    title: 'Event Profitability View',
    tag: 'Core Experience',
    tagVariant: 'primary' as const,
    description: 'The business owner wants to see how profitable a completed event was.',
    needs: [
      'Revenue vs. all costs (labor, food, rentals, vendors, travel)',
      'Final margin calculation',
      'Comparison to estimates vs. actuals',
    ],
    considerations: [
      'How do you present complex financial data clearly?',
      'What comparisons or benchmarks might be useful?',
      'How do you handle events that went over budget?',
    ],
  },
  {
    id: 2,
    icon: Settings,
    title: 'Commission Configuration & Tracking',
    tag: 'System Design',
    tagVariant: 'accent' as const,
    description: 'CaterPro clients have different commission structures.',
    examples: [
      'Sales rep: 5% of event revenue',
      'Event coordinator: $150 flat + 2% bonus if client rates 4+ stars',
      'Senior coordinators: Higher rates than junior',
      'Team leads: Override on team members\' events',
    ],
    considerations: [
      'How are commission rules configured? (admin experience)',
      'How do team members see their earnings? (employee experience)',
      'How do you handle disputes or adjustments?',
    ],
  },
  {
    id: 3,
    icon: LineChart,
    title: 'Profitability Dashboard',
    tag: 'Analytics & Insights',
    tagVariant: 'primary' as const,
    description: 'The owner wants a dashboard showing profitability trends.',
    questions: [
      'Which event types are most profitable?',
      'Which clients bring the best margins?',
      'Are we more profitable this quarter vs. last?',
      'How much did we pay in commissions this month?',
      'Where are we losing money?',
    ],
    considerations: [
      'What\'s the right level of detail vs. overview?',
      'How do you make insights actionable?',
      'What filters or drill-downs are needed?',
    ],
  },
]

export function Scenarios() {
  const [activeScenario, setActiveScenario] = useState(0)

  return (
    <AnimatedSection id="scenarios" className="relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/30 to-background pointer-events-none" />
      
      <Container className="relative z-10">
        <SectionHeader 
          title="The Scenarios" 
          subtitle="Your design should address these three use cases"
        />

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {scenarios.map((scenario, index) => (
            <button
              key={scenario.id}
              onClick={() => setActiveScenario(index)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                activeScenario === index
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-card border border-border text-foreground-muted hover:text-foreground hover:border-border-light'
              }`}
            >
              <scenario.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{scenario.title}</span>
              <span className="sm:hidden">Scenario {scenario.id}</span>
            </button>
          ))}
        </motion.div>

        {/* Scenario content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-border">
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  scenarios[activeScenario].tagVariant === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                }`}>
                  {(() => {
                    const Icon = scenarios[activeScenario].icon
                    return <Icon className={`w-7 h-7 ${
                      scenarios[activeScenario].tagVariant === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                  })()}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {scenarios[activeScenario].title}
                    </h3>
                    <Badge variant={scenarios[activeScenario].tagVariant}>
                      {scenarios[activeScenario].tag}
                    </Badge>
                  </div>
                  <p className="text-foreground-muted text-lg">
                    {scenarios[activeScenario].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
              {/* Left column - Requirements */}
              <div>
                {scenarios[activeScenario].needs && (
                  <>
                    <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-4">
                      They need to see
                    </h4>
                    <ul className="space-y-3">
                      {scenarios[activeScenario].needs.map((need, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-foreground">{need}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </>
                )}

                {scenarios[activeScenario].examples && (
                  <>
                    <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-4">
                      Example structures to support
                    </h4>
                    <ul className="space-y-3">
                      {scenarios[activeScenario].examples.map((example, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-foreground">{example}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </>
                )}

                {scenarios[activeScenario].questions && (
                  <>
                    <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-4">
                      Questions the dashboard should answer
                    </h4>
                    <ul className="space-y-3">
                      {scenarios[activeScenario].questions.map((question, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-foreground">{question}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* Right column - Considerations */}
              <div>
                <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-4">
                  Design Considerations
                </h4>
                <ul className="space-y-4">
                  {scenarios[activeScenario].considerations.map((consideration, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 * i }}
                      className="flex items-start gap-3 p-4 bg-background-secondary rounded-xl border border-border"
                    >
                      <ChevronRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{consideration}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Scenario indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {scenarios.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveScenario(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                activeScenario === index ? 'bg-primary w-6' : 'bg-border hover:bg-border-light'
              }`}
            />
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}

