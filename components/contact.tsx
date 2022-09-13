import React from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

function Contact() {
  return (
    <div className="relative bg-gray-900">
      <div className="relative text-center mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
        <h2 className="mt-2 text-cyan-400 text-3xl font-bold tracking-tight sm:text-4xl sm:tracking-tight">
          Stay In Touch
        </h2>
        <p className="mt-6 text-xl text-gray-300">
          Want to build the future together? Simply send me an email or connect me on LinkedIn. 
        </p>
        <div className="mx-4 mt-8 flex justify-center gap-x-6">
          <div className="inline-flex rounded-md shadow">
            <a
              href="mailto:jay_toyjianying@hotmail.com"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-600 hover:to-cyan-700"
            >
              Send me Email
              <ArrowTopRightOnSquareIcon className="-mr-1 ml-3 h-5 w-5 text-white" aria-hidden="true" />
            </a>
          </div>

          <div className="inline-flex rounded-md shadow">
            <a
              href="https://www.linkedin.com/in/jaytoy/"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-white text-cyan-700 hover:bg-slate-200"
            >    
              <span className="mr-2">Connect on LinkedIn</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">    
                <path d="M21,3H3v18h18V3z M9,17H6.477v-7H9V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2 c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302 s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977C13.93,10.407,14.581,10,15.802,10 C17.023,10,18,10.977,18,13.174V17z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact