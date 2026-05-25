'use client'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-[72px] bg-background/80 backdrop-blur-sm border-b border-neutral/30">

      <Link href="/" className="font-worldstar text-2xl text-text hover:text-primary transition-colors">
        Ce
      </Link>

      <div className="flex items-center gap-8">
        <Link href="/about" className="font-switzer text-sm text-muted hover:text-text transition-colors">
          About
        </Link>
        <Link href="/collection" className="font-switzer text-sm text-muted hover:text-text transition-colors">
          Collection
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="font-switzer text-sm px-4 py-2 bg-primary text-background rounded-button hover:opacity-90 transition-opacity"
        >
          Resume
        </a>
      </div>

    </nav>
  )
}