import About from './components/sections/about'
import Experience from './components/sections/experience'
import Hero from './components/sections/hero'

function App() {
  return (
    <div className="space-y-10 my-10 md:my-20 mx-5 md:mx-40 font-roboto">
      <Hero />
      <About />
      <Experience />
    </div>
  )
}

export default App
