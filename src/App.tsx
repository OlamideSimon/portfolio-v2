import About from './components/sections/about'
import Experience from './components/sections/experience'
import Hero from './components/sections/hero'
import Portfolio from './components/sections/portfolio'
import Skills from './components/sections/skills'

function App() {
  return (
    <div className="space-y-20 my-10 md:my-20 mx-5 md:mx-40 font-roboto">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
    </div>
  )
}

export default App
