import { FiArrowUpRight } from 'react-icons/fi'
import heroImg from '../../assets/images/pexels-antonio-borriello-1297611.jpg'

const Hero = () => {
  return (
    <section className="" id="hero">
      <div className="text-center lg:text-left space-y-3 lg:space-y-0">
        <h1 className="text-5xl container mx-auto md:text-7xl lg:text-9xl font-black">
          <span className="text-black/60 dark:text-white/60">Welcome</span> to my
          Portfolio, where creativity meets code.
        </h1>
        <div className="flex items-center">
          <div className="h-[0.5px] bg-slate-600 w-full hidden lg:block"></div>
          <h6 className="text-base md:text-xl font-medium text-slate-700 dark:text-slate-200 md:px-10">
            I'm <span className="font-Pacifico text-4xl">Olamide Simon</span>, a
            passionate developer dedicated to crafting innovative solutions for a
            connected world. With a focus on Frontend Development, I'm here to showcase my
            work and share my journey in the world of code. Explore my projects, skills,
            and experiences, and get to know the developer behind the screen. Let's build
            something great together.
          </h6>
        </div>
      </div>

      <div className="flex mt-5 lg:mt-0 justify-center lg:justify-normal text-2xl child:mx-5 child:flex child:space-x-1 child:items-center">
        <a href="">
          <p>Linkedin</p>
          <FiArrowUpRight />
        </a>
        <a href="">
          <p>GitHub</p>
          <FiArrowUpRight />
        </a>
      </div>

      <div className="h-[500px] md:h-[700px] mt-10 relative rounded-[30px] overflow-hidden">
        <div
          aria-hidden
          className="absolute z-[1] top-0 left-0 w-full h-full bg-black/20 inset-0"
        ></div>
        <img
          className="w-full h-full object-cover object-bottom inset-0"
          src={heroImg}
          alt="Laptop Image with headphone"
        />
      </div>
    </section>
  )
}

export default Hero
