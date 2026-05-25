import Link from 'next/link'

const projects = [
  {
    slug: 'mooring-tension',
    title: 'Mooring Tension System',
    description: 'Real-time predictive safety system integrating weather APIs and dynamic tension modeling — BHP Hackathon · 3rd Place',
    tags: ['Python', 'API', 'Full-Stack'],
    year: '2025',
  },
  {
    slug: 'workforce-analytics',
    title: 'Workforce Analytics',
    description: 'Multidimensional data analysis identifying patterns driving employee turnover — UBC BOLT Semifinalist',
    tags: ['Data Analysis', 'Visualization'],
    year: '2026',
  },
  {
    slug: 'sillykitty',
    title: 'SillyKitty AI Companion',
    description: 'Interactive desktop pet with state-driven behaviors and AI personality system — SFU SillyHacks',
    tags: ['Electron', 'JavaScript', 'AI'],
    year: '2026',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-12 py-24">

      <h2 className="font-worldstar text-5xl text-text mb-12">
        My Projects
      </h2>

      <div className="grid grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group bg-surface border border-neutral/40 rounded-card p-6 flex flex-col gap-4 hover:border-primary transition-colors"
          >
            <div className="w-full h-52 bg-placeholder rounded-lg flex items-center justify-center">
              <span className="font-switzer text-xs text-primary/60">image coming soon</span>
            </div>

            <div className="flex items-start justify-between">
              <h3 className="font-worldstar text-xl text-text leading-tight">
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

      <div className="mt-12 text-center">
        <Link
          href="/collection"
          className="font-switzer text-sm text-primary border border-primary px-6 py-3 rounded-button hover:bg-primary hover:text-background transition-colors"
        >
          View my Collection
        </Link>
      </div>

    </section>
  )
}