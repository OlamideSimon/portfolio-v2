import { FiExternalLink } from 'react-icons/fi'

const experiences: { name: string; duration: string; role: string; link: string }[] = [
  {
    name: 'CodeAlgo',
    duration: 'Oct 2022 - April 2023',
    role: 'Frontend Intern',
    link: '',
  },
  {
    name: 'Silex Secure Labs',
    duration: 'Mar 2023 - present',
    role: 'Full-stack developer',
    link: '',
  },
  {
    name: 'CodeAlgo',
    duration: 'Nov 2023 - present',
    role: 'Full-stack developer',
    link: '',
  },
]

const Experience = () => {
  return (
    <section id="experience" className="space-y-10">
      <h2 className="text-3xl md:text-5xl">Professional Experience</h2>

      <ul>
        {experiences.map(({ duration, name, role, link }, index) => (
          <li
            key={index}
            className="py-5 flex justify-between items-center border-slate-400 border-b first:border-t"
          >
            <p>
              <span className="text-2xl font-semibold flex space-x-1 mb-0">
                <span>{name}</span>
                <a href={link} target="_blank">
                  <FiExternalLink size={15} className="" />
                </a>
              </span>
              <span className="font-light text-sm">{role}</span>
            </p>
            <p>{duration}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experience
