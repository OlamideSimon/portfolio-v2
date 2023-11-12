import { FiArrowRight } from 'react-icons/fi'
import image from '../../assets/images/pexels-julien-bachelet-890849.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <p className="text-xl font-Pacifico">My Works</p>
      <h3 className="text-5xl md:text-4xl lg:text-9xl font-black">
        Crafting High-Performance{' '}
        <span className="text-black/60 dark:text-white/60">Software</span>
      </h3>

      <div className="grid md:grid-cols-2 gap-20 my-10">
        <PortfolioCard
          image={image}
          title="Testing"
          type="Mobile Development"
          link="https://testing.com"
        />
        <PortfolioCard
          image={image}
          title="Testing"
          type="Mobile Development"
          link="https://testing.com"
        />
        <PortfolioCard
          image={image}
          title="Testing"
          type="Mobile Development"
          link="https://testing.com"
        />
        <PortfolioCard
          image={image}
          title="Testing"
          type="Mobile Development"
          link="https://testing.com"
        />
      </div>
    </section>
  )
}

export default Portfolio

const PortfolioCard = ({
  image,
  title,
  type,
  link,
}: {
  image: string
  title: string
  type: string
  link: string
}) => (
  <div>
    <img className="rounded-3xl w-full max-h-[700px] object-cover" src={image} />
    <div className="flex justify-between items-center mt-5 px-5">
      <p>
        <span className="font-bold text-3xl">{title}</span>
        <br />
        <span className="text-lg !font-extralight">{type}</span>
      </p>

      <a href={link}>
        <button className="py-4 px-8 border-2 border-slate-700 dark:border-slate-50 rounded-full">
          <FiArrowRight size={20} />
        </button>
      </a>
    </div>
  </div>
)
