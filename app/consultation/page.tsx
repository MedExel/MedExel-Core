'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Consultation() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await response.json()
      setSubmitMessage(data.message)
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again.')
    }
    setSubmitting(false)
  }

  return (
    <>
      <Header />
      <main className="mt-20 py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-8 text-center">Request a Free Consultation</h1>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
          {submitMessage && (
            <p className="mt-4 text-center text-green-600">{submitMessage}</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

