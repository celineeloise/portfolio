import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Nav />
      <Hero />
      <Projects />
      <Footer />
    </main>
  )
}