import Nav from '../components/Nav'
import Footer from '../components/Footer'

const experience = [
  {
    role: 'Software Engineer',
    org: 'National Research Council Canada',
    date: 'Jan. 2026 — Present',
    desc: 'Full-stack image management system on Linux — FastAPI, MongoDB, React. Handles 100K+ images in production.',
    tag: 'Research',
  },
  {
    role: 'Software Engineer',
    org: 'LaunchPad UBC',
    date: 'Sep. 2025 — Present',
    desc: 'Built a volunteer scheduling platform for BC Brain Wellness from the ground up — 26K+ lines of TypeScript/Node.js, open source.',
    tag: 'Design Team',
  },
  {
    role: 'AI & Data Consultant Intern',
    org: 'Cavari Australia',
    date: 'Sep. 2025 — Present',
    desc: 'Consulting on AI and data strategy, applying machine learning and data pipeline skills in a professional setting.',
    tag: 'Industry',
  },
  {
    role: 'Research Intern',
    org: 'University of Alberta',
    date: 'May 2026 — Jul. 2026',
    desc: 'Collaborated with senior researchers applying molecular biology and data collection skills. Strengthened adaptability and independent learning.',
    tag: 'Research',
  },
]

const education = [
  {
    degree: 'BSc Data Science & Microbiology and Immunology',
    school: 'University of Western Australia',
    date: 'Jul. 2024 — Jul. 2027',
  },
  {
    degree: 'Exchange — Bachelor of Science',
    school: 'University of British Columbia',
    date: 'Jan. 2026 — Apr. 2026',
  },
]

const skills = {
  Languages: ['Python', 'TypeScript', 'JavaScript', 'R', 'SQL'],
  Frameworks: ['React', 'Next.js', 'FastAPI', 'Node.js', 'Electron'],
  'Data & ML': ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'MongoDB'],
  Tools: ['Figma', 'Git', 'Linux', 'Vercel', 'Illustrator'],
}

export default function About() {
  return (
    <main className="bg-background min-h-screen">
      <Nav />

      <div className="pt-[72px] px-12 py-20">

        {/* Hero */}
        <p className="font-switzer text-sm text-primary uppercase tracking-widest mb-4">
          About
        </p>
        <h1 className="font-worldstar text-6xl text-text mb-6 leading-tight">
          Hey there! I&apos;m Celine.
        </h1>
        <p className="font-switzer text-lg text-muted max-w-2xl leading-relaxed mb-20">
          3rd year Data Science &amp; Microbiology student at UWA, currently on exchange at UBC.
          I build things at the intersection of data, software, and research — from hackathon
          prototypes to production systems.
        </p>

        {/* Experience */}
        <p className="font-switzer text-sm text-primary uppercase tracking-widest mb-2">
          Experience
        </p>
        <h2 className="font-worldstar text-5xl text-text mb-12">
          Where I&apos;ve been building.
        </h2>

        <div className="flex flex-col">
          {experience.map((item, i) => (
            <div key={i}>
              {i > 0 && <div className="border-t border-neutral/40 my-0" />}
              <div className="grid grid-cols-[200px_1fr_120px] gap-8 py-10 items-start">
                <span className="font-switzer text-sm text-muted">{item.date}</span>
                <div>
                  <h3 className="font-worldstar text-2xl text-text mb-1">{item.org}</h3>
                  <p className="font-switzer text-sm text-muted mb-3">{item.role}</p>
                  <p className="font-switzer text-sm text-muted leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
                <span className="font-switzer text-xs px-3 py-1 border border-neutral text-muted rounded-pill text-center">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-20 mb-16">
          <p className="font-switzer text-sm text-primary uppercase tracking-widest mb-6">
            Education
          </p>
          <div className="flex flex-col gap-6">
            {education.map((edu, i) => (
              <div key={i} className="flex justify-between items-start border-t border-neutral/40 pt-6">
                <div>
                  <h3 className="font-worldstar text-xl text-text">{edu.degree}</h3>
                  <p className="font-switzer text-sm text-muted mt-1">{edu.school}</p>
                </div>
                <span className="font-switzer text-sm text-muted shrink-0 ml-8">{edu.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <p className="font-switzer text-sm text-primary uppercase tracking-widest mb-8">
          Skills
        </p>
        <div className="flex flex-col gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <div key={i} className="flex items-start gap-8 border-t border-neutral/40 pt-6">
              <span className="font-switzer text-sm text-muted w-32 shrink-0">{category}</span>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span
                    key={skill}
                    className="font-switzer text-xs px-3 py-1 bg-accent/20 text-primary rounded-pill"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </main>
  )
}
