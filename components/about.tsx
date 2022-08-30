import Image from 'next/image';
import React from 'react'

function About() {
  return (
    <div className="pb-8 bg-white lg:pb-0 lg:z-10 lg:relative">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8 my-12">
        {/* About me */}
        <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
            <blockquote>
              <div>
                <svg
                  className="h-12 w-12 text-cyan-600 opacity-25"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="mb-6 text-xl font-medium text-cyan-600">
                  Hello! My name is Jay, and I enjoy making stuff on the internet. My interest in web programming began in 2018, 
                  when I decided to take some course and since then I was attracted by the ability to create applications that programming brings!
                </p>
                <p className="mb-6 text-xl font-medium text-cyan-600">
                  Today, I&apos;ve had the opportunity to work at an ecommerce and a start-up. 
                  I am currently resided in Berlin, Germany.
                </p>
              </div>
            </blockquote>
          </div>
        </div>
        {/* Image */}
        <div className="relative">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
            <Image src="/about.jpg" alt="about" width="380" height="380" className="rounded-lg"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About