import LightnDark from './components/LightnDark'
import About from './components/sections/about'
import Contact from './components/sections/contact'
import Experience from './components/sections/experience'
import Hero from './components/sections/hero'
import Portfolio from './components/sections/portfolio'
import Skills from './components/sections/skills'

function App() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white transition-all duration-500">
      <main className="space-y-20 py-5 md:py-10 mx-5 md:mx-20 lg:mx-40 font-roboto">
        <LightnDark />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <footer className="py-4">
        <div className="container mx-auto flex items-center justify-center">
          <p className="text-center text-lg sm:text-2xl font-bold">
            Developed by <span className="text-slate-400">Olamide Simon</span> with{' '}
            <a
              href="https://vitejs.dev/guide/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:underline focus:underline"
            >
              Vite + React + typescript
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
