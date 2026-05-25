'use client'
import { useState, useEffect } from 'react'

const descriptors = [
  'Developer',
  'AI & Data Enthusiast',
  'Research Assistant',
  'Computational Bio Explorer',
  'Chronic Hackathoner',
  'Nature Enjoyer',
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % descriptors.length)
        setVisible(true)
      }, 400)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen pt-[72px] flex items-center px-12 gap-16">

      {/* Left column */}
      <div className="flex-1 flex flex-col justify-center">

        <p className="font-switzer text-muted text-lg mb-4 tracking-wide">
          Hello! Nice to meet you, I&apos;m
        </p>

        <h1
          className="font-worldstar text-text leading-[0.88] mb-8"
          style={{ fontSize: 'clamp(80px, 10vw, 140px)' }}
        >
          Celine<br />Eloise
        </h1>

        <p className="font-switzer text-muted text-base max-w-[420px] mb-1 leading-relaxed">
          3rd Year UWA <strong className="text-text">Data Science &amp; Microbiology and
          Immunology</strong> student bridging software, data, and research to build
          impactful solutions.
        </p>

        <p className="font-switzer text-muted text-sm mb-10">
          Currently <strong className="text-text">Research Assistant</strong> @ University of Alberta, Canada.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <a
            href="mailto:your@email.com"
            className="font-switzer text-sm px-6 py-3 bg-primary text-background rounded-button hover:opacity-90 transition-opacity"
          >
            Let&apos;s Connect!
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="font-switzer text-sm px-6 py-3 border border-neutral text-muted rounded-button hover:border-primary hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="font-switzer text-sm px-6 py-3 border border-neutral text-muted rounded-button hover:border-primary hover:text-primary transition-colors"
          >
            Github
          </a>
        </div>
      </div>

      {/* Right column — animated descriptor */}
      <div className="flex-1 flex items-center justify-center">
        <p
          className="font-worldstar text-primary text-center leading-tight transition-opacity duration-500"
          style={{
            fontSize: 'clamp(40px, 5.5vw, 72px)',
            opacity: visible ? 1 : 0,
          }}
        >
          {descriptors[current]}
        </p>
      </div>

    </section>
  )
}