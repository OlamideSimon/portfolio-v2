import { AiOutlineArrowRight } from 'react-icons/ai'

const Contact = () => {
  return (
    <section>
      <div className="max-w-[650px] mx-auto text-center">
        <h1 className="text-5xl container mx-auto md:text-8xl font-black">
          <span className="text-black/60 dark:text-white/60">Say Hi!</span> and tell me
          about your ideas.
        </h1>
        <p className="text-xl">Have nice works? Reach out let's chat</p>
      </div>

      <form className="max-w-[900px] mx-auto my-10 space-y-10">
        <div className="grid gap-3">
          <label
            className="after:content-['*'] after:text-slate-400 after:ml-1"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            className="outline-none pb-2 bg-transparent border-b dark:focus:border-b-white focus:border-b-black"
            placeholder="John Doe"
          />
        </div>
        <div className="grid gap-3">
          <label
            className="after:content-['*'] after:text-slate-400 after:ml-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="outline-none pb-2 bg-transparent border-b dark:focus:border-b-white focus:border-b-black"
            placeholder="Where I can reply to"
          />
        </div>
        <div className="grid gap-3">
          <label
            className="after:content-['*'] after:text-slate-400 after:ml-1"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            className="outline-none pb-2 bg-transparent border-b dark:focus:border-b-white focus:border-b-black"
            placeholder="I want build..."
            rows={5}
          ></textarea>
        </div>

        <button className="ml-auto flex py-5 px-10 space-x-3 items-center bg-black text-white dark:bg-white dark:text-black rounded-3xl hover:scale-105 transition-all duration-300">
          <span>Submit</span>
          <AiOutlineArrowRight size={20} />
        </button>
      </form>
    </section>
  )
}

export default Contact
