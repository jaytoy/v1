import React from 'react'

function Hero() {
  return (
    <div className="py-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* left */}
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <h2 className="text-xl font-semibold text-cyan-400 font-mono">Hi there, my name is</h2>
              <h1 className="mt-2 text-4xl tracking-tight font-bold text-white sm:mt-5 sm:text-8xl sm:tracking-tight lg:mt-6 xl:text-8xl xl:tracking-tight">
                <span className="block">Jay Toy.</span>
                <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                  Full Stack Developer.
                </span>
              </h1>
              <p className="nt-2 text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                I&apos;m a software developer who specialises in building amazing web applications. 
                Currently I am open for work.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="mt-12 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              {/* Illustration/Image */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero