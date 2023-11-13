import { ChangeEvent, FormEvent, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import emailjs from '@emailjs/browser'
import { Loader } from '../loaders'

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleMessage = (message: string, type: 'success' | 'error') => {
    if (type === 'success') {
      setSuccessMessage(message)
      setTimeout(() => {
        setSuccessMessage('')
      }, 5000)
    } else {
      setErrorMessage(message)
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    }
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await emailjs.send(
        'service_ss9udxc',
        'template_5e07m9t',
        { ...formData },
        '0AqDVQbYSUqG2h6DV'
      )

      if (res.status === 200) {
        handleMessage('Your message has been sent successfully!', 'success')
        setFormData({ message: '', user_email: '', user_name: '' })
      } else {
        handleMessage(
          'An error occurred while sending your message. Please try again later.',
          'error'
        )
      }
    } catch (error) {
      handleMessage(
        'An error occurred while sending your message. Please try again later.',
        'error'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section>
      <div className="max-w-[650px] mx-auto text-center">
        <h1 className="text-5xl container mx-auto md:text-8xl font-black">
          <span className="text-black/60 dark:text-white/60">Say Hi!</span> and tell me
          about your ideas.
        </h1>
        <p className="text-xl">Have nice works? Reach out let's chat</p>
      </div>

      <form onSubmit={onSubmit} className="max-w-[900px] mx-auto my-10 space-y-10">
        {successMessage && (
          <div className="text-green-600 w-full bg-green-200 p-3 rounded">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="text-red-600 w-full bg-red-200 p-3 rounded">{errorMessage}</div>
        )}
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
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
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
            name="user_email"
            value={formData.user_email}
            required
            onChange={handleChange}
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
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="ml-auto flex py-5 px-10 space-x-3 items-center bg-black text-white dark:bg-white dark:text-black rounded-3xl hover:scale-105 transition-all duration-300"
        >
          {loading ? (
            <Loader />
          ) : (
            <>
              <span>Submit</span>
              <AiOutlineArrowRight size={20} />
            </>
          )}
        </button>
      </form>
    </section>
  )
}

export default Contact
