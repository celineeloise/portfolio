'use client'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-6 bg-background">

      <Link href="/" className="ml-6">
        <img
          src="/ce-logo.svg"
          alt="ce Logo"
          className="w-8 h-auto"
        />
      </Link>

      <div className="flex items-center gap-10">
        <Link
          href="/about"
          className="font-switzer text-sm text-muted hover:text-text"
        >
          About
        </Link>

        <Link
          href="/collection"
          className="font-switzer text-sm text-muted hover:text-text"
        >
          Collection
        </Link>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="font-switzer text-sm px-6 py-3 bg-primary text-white rounded-xl"
        >
          Resume
        </a>
      </div>
    </nav>
  )
}