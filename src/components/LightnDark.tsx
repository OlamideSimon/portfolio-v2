import { useState, useEffect } from 'react'
import { HiOutlineSun, HiMoon } from 'react-icons/hi2'

const LightnDark = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check if the user's system preference is dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Apply dark mode class to the body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div
      className="fixed p-2 top-10 right-10 text-3xl md:text-5xl rounded-xl cursor-pointer z-10 bg-slate-800 focus:outline-none focus:border focus:border-white"
      onClick={toggleDarkMode}
      tabIndex={0}
    >
      {darkMode ? (
        <HiOutlineSun aria-label="light" title="Light Mode" className="text-yellow-500" />
      ) : (
        <HiMoon aria-label="dark" title="Dark Mode" className="text-slate-500" />
      )}
    </div>
  )
}

export default LightnDark
