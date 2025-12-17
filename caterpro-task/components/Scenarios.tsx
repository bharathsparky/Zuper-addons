'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DollarSign, Settings, LineChart, User, Building, HelpCircle, Lightbulb } from 'lucide-react'
import { AnimatedSection, Container, SectionHeader, Badge } from './ui'

const scenarios = [
  {
    id: 1,
    icon: DollarSign,
    title: 'Event Profitability View',
    tag: 'Core Experience',
    tagVariant: 'primary' as const,
    userStory: 'As a business owner, I want to see how profitable a completed event was so I can understand my true margins and make better pricing decisions for future events.',
    context: 'After an event is completed, the owner needs a clear breakdown of all the money that came in versus all the money that went out. Currently, they use spreadsheets and often miss hidden costs, leading to inaccurate profit calculations.',
    persona: {
      name: 'Sarah Chen',
      role: 'Owner, Delicious Catering Co.',
      quote: 'I thought the Johnson wedding was our best event this year, but after accounting for the last-minute ice sculpture and overtime staff, we barely broke even.'
    },
    needs: [
      'Total revenue collected from the client (deposits, final payment, add-ons)',
      'All costs itemized: labor (regular & overtime), food & beverages, equipment rentals, vendor subcontracts, transportation, permits & fees',
      'Gross profit and profit margin percentage',
      'Comparison: What we quoted vs. what we actually spent',
      'Timeline of when costs were incurred (to spot patterns)',
    ],
    realWorldExample: 'A corporate holiday party was quoted at $15,000 with an estimated 35% margin. But the client added a dessert station (+$800), the venue required extra staff (+$600), and the rental company charged rush delivery (+$200). The owner needs to see all this clearly.',
    considerations: [
      'How do you present complex financial data without overwhelming the user?',
      'What visual indicators help users quickly spot problems (over budget, low margin)?',
      'How do you show the story of an event — from quote to final profit?',
      'What drill-down capabilities are needed to investigate specific costs?',
    ],
  },
  {
    id: 2,
    icon: Settings,
    title: 'Commission Configuration & Tracking',
    tag: 'System Design',
    tagVariant: 'accent' as const,
    userStory: 'As an admin, I want to set up different commission structures for my team so that everyone is compensated fairly based on their role and performance.',
    context: 'Catering companies have diverse team structures. Sales reps bring in clients, coordinators manage events, and team leads oversee multiple staff. Each role may have different compensation models — percentage of revenue, flat fees, bonuses for ratings, or overrides on their team\'s work.',
    persona: {
      name: 'Marcus Williams',
      role: 'Operations Manager',
      quote: 'Every month I spend hours in Excel calculating commissions. Our senior coordinator gets a different rate than juniors, our sales guy wants 5% of any client he brings in forever, and now we have team leads wanting overrides.'
    },
    examples: [
      'Sales rep: 5% of event revenue for any client they originally brought in',
      'Junior coordinator: $100 flat per event managed',
      'Senior coordinator: $150 flat + 2% of event revenue if client rates 4+ stars',
      'Team lead: 1% override on all events their team members coordinate',
      'Referral bonus: $50 for any team member who refers a new hire that stays 90 days',
    ],
    realWorldExample: 'For a $20,000 wedding: The sales rep who landed the client 2 years ago gets $1,000 (5%). The senior coordinator who managed it gets $150 + $400 bonus (client rated 5 stars). The team lead gets $200 override. Total commissions: $1,750.',
    considerations: [
      'How do admins create and modify commission rules without needing IT support?',
      'How do employees view their pending and paid commissions transparently?',
      'How do you handle edge cases: disputed amounts, retroactive adjustments, split commissions?',
      'What approval workflows might be needed before commissions are finalized?',
    ],
  },
  {
    id: 3,
    icon: LineChart,
    title: 'Profitability Dashboard',
    tag: 'Analytics & Insights',
    tagVariant: 'primary' as const,
    userStory: 'As a business owner, I want to see profitability trends across my business so I can identify what\'s working, what\'s not, and where to focus my efforts.',
    context: 'Business owners need the big picture. They want to know if they\'re making more money this year than last, which types of events they should pursue more aggressively, and which clients are actually worth keeping. This requires aggregating data across many events and time periods.',
    persona: {
      name: 'David Park',
      role: 'CEO, Elite Events Catering',
      quote: 'We did $2M in revenue last year but I have no idea if weddings or corporate events made us more money. I also suspect we have a few clients who always go over scope but I can\'t prove it.'
    },
    questions: [
      'Which event types (weddings, corporate, private parties) have the best margins?',
      'Who are my top 10 most profitable clients? Who are my worst?',
      'Are we more profitable this quarter compared to last quarter? Last year?',
      'How much total commission did we pay out this month? This year?',
      'Which cost categories are growing faster than revenue?',
      'Are there seasonal patterns in our profitability?',
    ],
    realWorldExample: 'The dashboard reveals that while weddings bring 60% of revenue, corporate events have 40% margins vs. weddings at 25%. One "whale" client that seems important actually has negative margin due to constant changes. The owner can now make strategic decisions.',
    considerations: [
      'What\'s the right balance between high-level summary and detailed drill-downs?',
      'How do you make data insights actionable — not just interesting?',
      'What time period comparisons are most valuable (MoM, QoQ, YoY)?',
      'How do you handle data visualization for non-technical business owners?',
      'What alerts or anomaly detection might proactively surface issues?',
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
          subtitle="Your design should address these three use cases. Read each carefully to understand the user needs."
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
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {scenarios[activeScenario].title}
                    </h3>
                    <Badge variant={scenarios[activeScenario].tagVariant}>
                      {scenarios[activeScenario].tag}
                    </Badge>
                  </div>
                  {/* User Story */}
                  <div className="p-4 bg-background-secondary rounded-xl border border-border mb-4">
                    <p className="text-foreground italic">
                      &ldquo;{scenarios[activeScenario].userStory}&rdquo;
                    </p>
                  </div>
                  {/* Context */}
                  <p className="text-foreground-muted">
                    {scenarios[activeScenario].context}
                  </p>
                </div>
              </div>
            </div>

            {/* Persona Quote */}
            <div className="px-6 md:px-8 py-4 bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground-muted italic mb-2">
                    &ldquo;{scenarios[activeScenario].persona.quote}&rdquo;
                  </p>
                  <p className="text-sm">
                    <span className="font-medium text-foreground">{scenarios[activeScenario].persona.name}</span>
                    <span className="text-foreground-muted"> — {scenarios[activeScenario].persona.role}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 grid lg:grid-cols-2 gap-8">
              {/* Left column - Requirements */}
              <div className="space-y-6">
                {scenarios[activeScenario].needs && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      What they need to see
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
                  </div>
                )}

                {scenarios[activeScenario].examples && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      Commission structures to support
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
                  </div>
                )}

                {scenarios[activeScenario].questions && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Questions it should answer
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
                  </div>
                )}

                {/* Real World Example */}
                <div className="p-4 bg-accent/5 rounded-xl border border-accent/20">
                  <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    Real-world example
                  </h4>
                  <p className="text-sm text-foreground-muted">
                    {scenarios[activeScenario].realWorldExample}
                  </p>
                </div>
              </div>

              {/* Right column - Considerations */}
              <div>
                <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Design considerations
                </h4>
                <p className="text-sm text-foreground-muted mb-4">
                  Think about these questions as you design your solution:
                </p>
                <ul className="space-y-4">
                  {scenarios[activeScenario].considerations.map((consideration, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 * i }}
                      className="flex items-start gap-3 p-4 bg-background-secondary rounded-xl border border-border"
                    >
                      <Lightbulb className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
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
