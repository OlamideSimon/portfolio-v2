import { useEffect } from 'react'
import { BiLogoJavascript, BiLogoReact, BiLogoTypescript } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'

const Skills = () => {
  useEffect(() => {
    const skills = document.querySelector('.skills') as HTMLElement
    skills.insertAdjacentHTML('afterend', skills.outerHTML)
    const nextSibling = skills.nextSibling as HTMLElement
    nextSibling.setAttribute('aria-hidden', 'true')
  }, [])

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul className="skills flex items-center justify-center md:justify-start animate-infinite-scroll [&_li]:mx-8">
        {skillsList.map(({ Icon, name }) => (
          <li className="flex items-center space-x-1 text-slate-400 dark:text-slate-500 font-Pacifico text-3xl md:text-5xl">
            <Icon />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills

const skillsList = [
  {
    name: 'React',
    Icon: BiLogoReact,
  },
  {
    name: 'Javascript',
    Icon: BiLogoJavascript,
  },
  {
    name: 'Typescript',
    Icon: BiLogoTypescript,
  },
  {
    name: 'Node.js',
    Icon: FaNodeJs,
  },
]
