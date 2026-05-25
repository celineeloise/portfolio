import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'

const allProjects = [
  {
    slug: 'mooring-tension',
    title: 'Mooring Tension System',
    description: 'Real-time predictive safety system — BHP Hackathon · 3rd Place',
    tags: ['Python', 'API', 'Full-Stack'],
    year: '2025',
  },
  {
    slug: 'workforce-analytics',
    title: 'Workforce Analytics',
    description: 'Employee turnover pattern analysis — UBC BOLT Semifinalist',
    tags: ['Data Analysis', 'Visualization'],
    year: '2026',
  },
  {
    slug: 'sillykitty',
    title: 'SillyKitty AI Companion',
    description: 'Desktop AI pet with state-driven personality — SFU SillyHacks',
    tags: ['Electron', 'JavaScript', 'AI'],
    year: '2026',
  },
]

export default function Collection() {
  return (
    <main className="bg-background min-h-screen">
      <Nav />

      <div className="pt-[72px] px-12 py-20">

        <p className="font-switzer text-sm text-primary uppercase tracking-widest mb-4">
          Archive
        </p>
        <h1 className="font-worldstar text-6xl text-text mb-4">
          My Collection
        </h1>
        <p className="font-switzer text-lg text-muted mb-16 max-w-xl">
          Everything I&apos;ve built, researched, and competed in.
        </p>

        <div className="grid grid-cols-3 gap-6">
          {allProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group bg-surface border border-neutral/40 rounded-card p-5 flex flex-col gap-3 hover:border-primary transition-colors"
            >
              <div className="w-full h-44 bg-placeholder rounded-lg flex items-center justify-center">
                <span className="font-switzer text-xs text-primary/60">image coming soon</span>
              </div>

              <div className="flex items-start justify-between">
                <h3 className="font-worldstar text-lg text-text leading-tight">
                  {project.title}
                </h3>
                <span className="font-switzer text-xs text-muted shrink-0 ml-2 mt-1">
                  {project.year}
                </span>
              </div>

              <p className="font-switzer text-sm text-muted leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-switzer text-xs px-3 py-1 bg-accent/20 text-primary rounded-pill"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

      </div>

      <Footer />
    </main>
  )
}
