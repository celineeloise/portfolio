'use client'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-20 py-10 bg-background">

      <Link href="/" className="ml-6">
        <img
          src="/ce-logo.svg"
          alt="Ce Logo"
          className="w-6 h-auto"
        />
      </Link>

      <div className="flex items-center gap-10">
        <Link
          href="/about"
          className="font-switzer text-sm text-muted hover:text-text transition-colors"
        >
          About
        </Link>

        <Link
          href="/collection"
          className="font-switzer text-sm text-muted hover:text-text transition-colors"
        >
          Collection
        </Link>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="font-switzer text-sm px-8 py-4 bg-primary text-white rounded-xl hover:opacity-90 transition-opacity"
        >
          Resume
        </a>
      </div>

    </nav>
  )
}