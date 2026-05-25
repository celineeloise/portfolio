import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'

const projects: Record<string, {
  title: string
  year: string
  tags: string[]
  award?: string
  overview: string
  problem: string
  solution: string
  outcomes: { value: string; label: string }[]
  links: { label: string; url: string }[]
}> = {
  'mooring-tension': {
    title: 'Real-Time Mooring Tension Optimization System',
    year: '2025',
    tags: ['Python', 'API', 'Full-Stack', 'Hackathon'],
    award: 'UWAYE x BHP Hackathon — 3rd Place',
    overview: 'Engineered a predictive safety system integrating real-time weather APIs and dynamic tension modeling to optimize mooring loads. Demonstrated full-stack rapid prototyping under hackathon conditions.',
    problem: 'Mooring systems in offshore environments are subject to dynamic weather conditions that can cause dangerous tension overloads. Existing systems lacked real-time predictive capability, making proactive safety adjustments impossible.',
    solution: 'Built a full-stack system that pulls live weather data via APIs, runs dynamic tension models, and surfaces alerts and optimization recommendations in real time. The system was prototyped and demonstrated within 48 hours.',
    outcomes: [
      { value: '3rd', label: 'Place — BHP Hackathon' },
      { value: '48hrs', label: 'Build time' },
      { value: 'Live', label: 'Weather API integration' },
    ],
    links: [
      { label: 'View Presentation', url: 'https://www.canva.com/design/DAG4mMiUfeI/GMyWOTB-BJMMdeQQpGUnsg/edit' },
    ],
  },
  'workforce-analytics': {
    title: 'Workforce Data Analytics Project',
    year: '2026',
    tags: ['Data Analysis', 'Python', 'Visualization'],
    award: 'UBC BOLT Case Competition — Semifinalist',
    overview: 'Performed multidimensional data analysis on workforce datasets to identify patterns driving employee turnover, using data integration, exploration, and visualization to generate actionable insights.',
    problem: 'High employee turnover is costly and disruptive. Organizations often lack the analytical tools to identify the root causes driving attrition, relying instead on intuition rather than data.',
    solution: 'Conducted a full data analysis pipeline — integrating multiple datasets, performing exploratory analysis, and building visualizations that surfaced key turnover drivers. Delivered findings as actionable strategic recommendations.',
    outcomes: [
      { value: 'Semi', label: 'finalist — UBC BOLT' },
      { value: '3+', label: 'Datasets integrated' },
      { value: 'Clear', label: 'Actionable insights' },
    ],
    links: [
      { label: 'View Slides', url: 'https://docs.google.com/presentation/d/1EE2nOqxNMVr4Qb71WUElAvxjzQBfFYvRhy-iMfN6pSA/edit' },
    ],
  },
  'sillykitty': {
    title: 'SillyKitty: Interactive AI Desktop Companion',
    year: '2026',
    tags: ['Electron', 'JavaScript', 'HTML/CSS', 'AI'],
    award: 'SFU Surge SillyHacks Hackathon',
    overview: 'Built an interactive desktop pet using Electron featuring state-driven behaviors and a lightweight AI personality system, delivering real-time user interaction and an emotionally driven user experience.',
    problem: 'Most productivity tools are impersonal and transactional. We wanted to explore what it would look like to add genuine personality and emotional responsiveness to a desktop companion — something that felt alive.',
    solution: 'Used Electron to build a cross-platform desktop app with a state machine managing the cat\'s behaviors (idle, happy, hungry, sleeping). Integrated a lightweight AI personality layer that responds to user interactions with dynamic dialogue.',
    outcomes: [
      { value: '24hrs', label: 'Build time' },
      { value: 'Cross', label: 'Platform — Electron' },
      { value: 'AI', label: 'Personality system' },
    ],
    links: [
      { label: 'View on Devpost', url: 'https://devpost.com/software/cat-fj3dx4' },
    ],
  },
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    return (
      <main className="bg-background min-h-screen">
        <Nav />
        <div className="pt-[72px] px-12 py-20">
          <h1 className="font-worldstar text-4xl text-text">Project not found.</h1>
          <Link href="/#projects" className="font-switzer text-sm text-primary mt-4 block">← Back home</Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="bg-background min-h-screen">
      <Nav />

      <div className="pt-[72px]">

        {/* Hero banner */}
        <div className="px-12 py-20 border-b border-neutral/30">
          <Link href="/#projects" className="font-switzer text-sm text-muted hover:text-primary transition-colors mb-8 block">
            ← Back to projects
          </Link>

          {project.award && (
            <p className="font-switzer text-sm text-primary uppercase tracking-widest mb-4">
              {project.award}
            </p>
          )}

          <h1 className="font-worldstar text-5xl text-text leading-tight max-w-3xl mb-6">
            {project.title}
          </h1>

          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-switzer text-sm text-muted">{project.year}</span>
            {project.tags.map(tag => (
              <span key={tag} className="font-switzer text-xs px-3 py-1 bg-accent/20 text-primary rounded-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image placeholder */}
        <div className="px-12 py-12">
          <div className="w-full h-[480px] bg-placeholder rounded-card flex items-center justify-center">
            <span className="font-switzer text-sm text-primary/50">project media coming soon</span>
          </div>
        </div>

        {/* Overview */}
        <div className="px-12 py-12 border-t border-neutral/30">
          <p className="font-switzer text-sm text-primary uppercase tracking-widest mb-4">Overview</p>
          <p className="font-switzer text-lg text-muted leading-relaxed max-w-2xl">
            {project.overview}
          </p>
        </div>

        {/* Problem / Solution */}
        <div className="px-12 py-12 border-t border-neutral/30 grid grid-cols-2 gap-16">
          <div>
            <p className="font-worldstar text-2xl text-text mb-4">The Problem</p>
            <p className="font-switzer text-base text-muted leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <p className="font-worldstar text-2xl text-text mb-4">The Solution</p>
            <p className="font-switzer text-base text-muted leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Outcomes */}
        <div className="px-12 py-12 border-t border-neutral/30">
          <p className="font-switzer text-sm text-primary uppercase tracking-widest mb-8">Outcomes</p>
          <div className="grid grid-cols-3 gap-8">
            {project.outcomes.map((item, i) => (
              <div key={i} className="bg-primary/10 rounded-card p-8 text-center">
                <p className="font-worldstar text-4xl text-primary mb-2">{item.value}</p>
                <p className="font-switzer text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="px-12 py-12 border-t border-neutral/30 flex gap-4">
          {project.links.map(link => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="font-switzer text-sm px-6 py-3 bg-primary text-background rounded-button hover:opacity-90 transition-opacity"
            >
              {link.label} ↗
            </a>
          ))}
        </div>

      </div>

      <Footer />
    </main>
  )
}