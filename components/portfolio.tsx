import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const projects = [
  {
    id: 1,
    title: 'Football Club Management System',
    href: '/qzclub',
    imageUrl: '/qzclub/qiuzhi.png',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
  },
  {
    id: 2,
    title: 'Omnichannel Commerce API',
    href: '/omnisys',
    imageUrl: '/qzclub/qiuzhi.png',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
  },
  {
    id: 3,
    title: 'Musician Portfolio',
    href: '/music',
    imageUrl: '/qzclub/qiuzhi.png',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
  },
]

function Portfolio() {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="relative">
        <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="mt-2 text-3xl font-bold text-cyan-600 tracking-tight sm:text-4xl sm:tracking-tight">
            Things I&apos;ve been working on
          </h2>
          <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
            malesuada. Eleifend condimentum id viverra nulla.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
          {projects.map((p) => (
            <div key={p.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                {/* <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" /> */}
                <Image className='object-cover' alt="" src={p.imageUrl} height="192" width="384"/>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href={p.href} className="block mt-2">
                    <p className="text-xl sm:text-2xl font-semibold text-gray-900 font-mono">{p.title}</p>
                    <p className="mt-3 text-base text-gray-500">{p.preview}</p>
                  </a>
                </div>
                <div className="mt-6 inline-flex">
                  <a className="inline-flex items-center font-medium text-cyan-500 hover:text-cyan-600" href={p.href}>
                    View Project
                    <ArrowRightIcon className="h-4 w-4 ml-1.5"/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio