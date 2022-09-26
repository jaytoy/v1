import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import React from 'react'

function Hero() {
  return (
    <div className="bg-gray-900 pt-20 pb-16 text-center lg:pt-32">
      <h1 className="font-bold mx-auto max-w-4xl font-display text-6xl tracking-tight text-slate-900 sm:text-7xl">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-500">I am</span>{' '}
        <span className="relative whitespace-nowrap">
          {/* <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-cyan-500"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg> */}
          <span className="text-white">Jay Toy</span>
        </span>{' '}
        <span className="mt-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-500">Software Developer</span>
      </h1>
      <p className="mx-4 sm:mx-auto mt-8 max-w-4xl text-xl sm:text-2xl tracking-tight text-slate-100">
        I&apos;m a business-minded software developer who passionates in building amazing web applications.<br/> 
      </p>
      <p className="mx-4 sm:mx-auto mt-8 max-w-4xl text-xl sm:text-2xl tracking-tight text-slate-100">
        Send me an email or connect me on LinkedIn to get in touch. 
      </p>
      <div className="mx-4 mt-20 flex justify-center gap-x-6">
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
  )
}

export default Hero