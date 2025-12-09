import React from 'react'
import Footer from '../../components/student/Footer'

const Contact = () => {
  return (
    <div className='min-h-screen bg-white text-gray-800'>
      <div className='md:px-36 px-6 py-16'>
        <div className='max-w-3xl mx-auto'>
          <h1 className='text-3xl md:text-4xl font-bold mb-4'>Contact Us</h1>
          <p className='text-gray-600 mb-6'>Reach out — we'd love to hear from you. Use the details below or send a quick message with the form.</p>

          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h2 className='text-xl font-semibold mb-2'>Contact details</h2>
              <p className='text-gray-600'>Email: <a className='text-blue-600 underline' href='mailto:madusankakeshan782@gmail.com'>madusankakeshan782@gmail.com</a></p>
              <p className='text-gray-600'>Mobile: <a className='text-blue-600' href='tel:+94760160321'>+94 760 160 321</a>, <a className='text-blue-600' href='tel:+94762798321'>+94 762 798 321</a></p>
              <div className='mt-6'>
                <h3 className='font-semibold'>Office hours</h3>
                <p className='text-gray-600'>Mon — Fri, 9:00 — 17:00 (local time)</p>
              </div>
            </div>

            <div>
              <h2 className='text-xl font-semibold mb-2'>Send us a message</h2>
              <form className='space-y-3'>
                <input className='w-full border border-gray-300 rounded px-3 py-2' placeholder='Your name' />
                <input className='w-full border border-gray-300 rounded px-3 py-2' placeholder='Your email' />
                <textarea className='w-full border border-gray-300 rounded px-3 py-2 h-28' placeholder='Message' />
                <button type='button' className='bg-blue-600 text-white px-4 py-2 rounded'>Send message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
