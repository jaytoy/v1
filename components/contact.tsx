import React from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

function Contact() {
  return (
    <div className="relative bg-gray-900">
      <div className="relative text-center mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
        <h2 className="mt-2 text-cyan-400 text-3xl font-bold tracking-tight sm:text-4xl sm:tracking-tight">
          Stay In Touch
        </h2>
        <p className="mt-6 text-lg text-gray-300">
          Feel free to send me an email if you are searching for a developer, or simply want to connect.
        </p>
        <div className="mt-8">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-600 hover:to-cyan-700"
            >
              Send me an Email
              <ArrowTopRightOnSquareIcon className="-mr-1 ml-3 h-5 w-5 text-white" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact