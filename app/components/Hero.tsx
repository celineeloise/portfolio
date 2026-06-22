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
    // Full screen height, content centered vertically, horizontal padding
    <section className="min-h-screen flex flex-col justify-center px-16 pt-[72px]">

      {/* Greeting */}
      <p className="font-switzer text-muted text-lg mb-6">
        Hello! Nice to meet you, I&apos;m
      </p>

      {/* Name + rotating word side by side */}
      <div className="flex items-center justify-between mb-8">

        {/* Big name on the left */}
        <h1 className="font-worldstar text-text leading-[0.88]"
          style={{ fontSize: '11vw' }}>       {/* 11% of screen width — scales perfectly */}
          Celine<br />Eloise
        </h1>

        {/* Rotating descriptor on the right */}
        <p
          className="font-worldstar text-primary text-right leading-tight"
          style={{
            fontSize: '4vw',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.4s ease',
            maxWidth: '40%',
          }}
        >
          {descriptors[current]}
        </p>

      </div>

      {/* Bio text */}
      <p className="font-switzer text-muted text-base max-w-lg leading-relaxed mb-2">
        3rd Year UWA <strong className="text-text">Data Science &amp; Microbiology and
        Immunology</strong> student bridging software, data, and research to build
        impactful solutions.
      </p>

      <p className="font-switzer text-muted text-sm mb-10">
        Currently <strong className="text-text">Research Assistant</strong> @ University of Alberta, Canada.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-3">
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

    </section>
  )
}