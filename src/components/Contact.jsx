import { useState } from 'react'
import { Loader2, Send } from 'lucide-react'
import SectionTitle from './SectionTitle'
import BrandIcon from './BrandIcon'
import { personalInfo } from '../data/portfolio'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || ''

const contactMethods = [
  { icon: 'email', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: 'phone', label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}` },
  { icon: 'github', label: 'GitHub', value: 'github.com/bharathkumar1904', href: personalInfo.github },
  { icon: 'linkedin', label: 'LinkedIn', value: 'Bharath Kumar', href: personalInfo.linkedin },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const configured = Boolean(WEB3FORMS_KEY)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!configured) {
      setError('Contact form is not configured yet. Please email me directly.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setError('')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact from ${form.name}`,
        }),
      })
      const data = await response.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setError('Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setError('Network error. Please try again later.')
      setStatus('error')
    }
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const inputClass =
    'w-full px-4 py-3 bg-bg/50 border border-border rounded-lg text-sm text-text placeholder:text-dim focus:outline-none focus:border-accent transition-colors'

  return (
    <div>
      <SectionTitle
        eyebrow="Contact"
        title="Let's build something."
        description="Interested in working together, discussing an idea, or talking about technology? Feel free to reach out."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-3">
          {contactMethods.map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 liquid-glass rounded-xl p-4"
            >
              <span className="p-2 text-accent bg-accent/10 rounded-lg">
                <BrandIcon name={icon} size={18} title={label} />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-dim">{label}</p>
                <p className="text-sm font-medium text-text truncate">{value}</p>
              </div>
            </a>
          ))}

          <p className="text-xs text-dim pt-2">{personalInfo.availability}</p>
        </div>

        <form onSubmit={handleSubmit} className="liquid-glass rounded-xl p-6 sm:p-8 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className={inputClass}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-600 disabled:opacity-60 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Sending...
              </>
            ) : status === 'success' ? (
              <>Message Sent!</>
            ) : (
              <>
                <Send size={15} /> Send Message
              </>
            )}
          </button>

          {error && <p className="text-xs text-red-400 text-center">{error}</p>}
        </form>
      </div>
    </div>
  )
}
