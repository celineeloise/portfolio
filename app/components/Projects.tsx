import Link from 'next/link'

const featured = [
  {
    slug: 'mooring-tension',
    title: 'Real Time Mooring Tension Optimization System',
    achievement: 'BHP Hackathon 3rd Place 2025',
    tags: ['Full Stack', 'API'],
  },
  {
    slug: 'workforce-analytics',
    title: 'Workforce Data Analytics',
    achievement: 'UBC BOLT Semifinalist 2026',
    tags: ['Python', 'Data Viz'],
  },
  {
    slug: 'sillykitty',
    title: 'SillyKitty AI Companion',
    achievement: 'SFU SillyHacks 2026',
    tags: ['Electron', 'JavaScript'],
  },
  {
    slug: 'ru-okay',
    title: 'R U Okay?',
    achievement: 'cmd-f UBC Hackathon 2026',
    tags: ['Full Stack', 'AI'],
  },
]

export default function Projects() {
  return (
    <section className="px-10 py-20 border-t border-neutral/20">

      <h2 className="font-worldstar text-[clamp(36px,4vw,56px)] text-text mb-12">
        My Projects
      </h2>

      {/* 2×2 grid */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-12">
        {featured.map((p) => (
          <Link key={p.slug} href={`/work/${p.slug}`} className="group flex flex-col gap-4">

            {/* Image placeholder */}
            <div className="w-full aspect-[4/3] bg-neutral/30 rounded-xl overflow-hidden group-hover:opacity-90 transition-opacity" />

            {/* Text */}
            <div>
              <h3 className="font-worldstar text-xl text-text leading-tight mb-2">
                {p.title}
              </h3>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-switzer text-xs text-muted">{p.achievement}</span>
                <span className="text-neutral/60 text-xs">|</span>
                {p.tags.map(tag => (
                  <span key={tag} className="font-switzer text-xs px-2.5 py-0.5 border border-neutral/50 text-muted rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16">
        <Link
          href="/collection"
          className="font-switzer text-sm px-6 py-3 bg-primary text-background rounded-button hover:opacity-90 transition-opacity inline-flex items-center gap-2"
        >
          More of My Collection —
        </Link>
      </div>

    </section>
  )
}