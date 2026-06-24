'use client'
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-10 pt-[68px] pb-20">

      <p className="font-switzer text-muted text-base mb-8 tracking-wide">
        Hello! Nice to meet you, I&apos;m
      </p>

      {/* Name + Bio side by side */}
      <div className="flex items-center gap-12 mb-12">

        {/* Left — big name */}
        <h1
          className="font-worldstar text-text leading-[0.85] shrink-0"
          style={{ fontSize: 'clamp(72px, 9.5vw, 160px)' }}
        >
          Celine<br />Eloise
        </h1>

        {/* Right — bio */}
        <div className="flex flex-col gap-4 max-w-sm">
          <p className="font-switzer text-sm text-muted leading-relaxed">
            3rd Year UWA <strong className="text-text font-medium">Data Science &amp; Microbiology and Immunology</strong> student
            bridging software, data, and research to build impactful solutions.
          </p>
          <p className="font-switzer text-sm text-muted">
            Currently <strong className="text-text font-medium">Research Intern</strong> @ University of Alberta, Canada.
          </p>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <a
          href="mailto:celineeloisewang@gmail.com"
          className="font-switzer text-sm px-6 py-2.5 bg-primary text-background rounded-button hover:opacity-90 transition-opacity"
        >
          Let&apos;s Connect!
        </a>
        <a
          href="https://linkedin.com/in/celineeloise"
          target="_blank"
          rel="noreferrer"
          className="font-switzer text-sm px-6 py-2.5 border border-neutral/60 text-muted rounded-button hover:border-primary hover:text-primary transition-colors"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/celineeloise"
          target="_blank"
          rel="noreferrer"
          className="font-switzer text-sm px-6 py-2.5 border border-neutral/60 text-muted rounded-button hover:border-primary hover:text-primary transition-colors"
        >
          Github
        </a>
      </div>

    </section>
  )
}