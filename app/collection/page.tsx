import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'

const projects = [
  { slug: 'mooring-tension', span: 'col-span-2' },
  { slug: 'workforce-analytics', span: 'col-span-2' },
  { slug: 'sillykitty', span: 'col-span-3' },
  { slug: 'ru-okay', span: 'col-span-1' },
  { slug: 'engineered-probiotics', span: 'col-span-3' },
  { slug: 'emergency-service-analysis', span: 'col-span-2' },
  { slug: 'hrt-hypothesis', span: 'col-span-1' },
  { slug: 'hope4homes', span: 'col-span-2' },
  { slug: 'road-safety', span: 'col-span-1' },
  { slug: 'ecommerce-ab-testing', span: 'col-span-2' },
]

export default function Collection() {
  return (
    <main className="bg-background min-h-screen">
      <Nav />

      <div className="pt-[68px] px-10 py-16">

        <h1 className="font-worldstar text-[clamp(40px,6vw,80px)] text-text mb-16">
          My Collection
        </h1>

        {/* Masonry-style grid — 6 columns */}
        <div className="grid grid-cols-6 gap-4">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className={`${p.span} aspect-square bg-neutral/25 rounded-xl hover:bg-neutral/40 transition-colors overflow-hidden`}
            />
          ))}
        </div>

      </div>

      <Footer />
    </main>
  )
}