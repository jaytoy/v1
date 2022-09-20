import { Tab } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React, { useId, useState } from 'react'

const experiences = [
  {
    id: 1,
    companyName: 'QZCLUB',
    jobTitle: "Forntend Developer",
    time: "February 2022 to present",
    jobDescription: [
      "Designed and built software's UI in React", 
      "Tested and refined software based on user feedback"
    ],
  },
  {
    id: 2,
    companyName: 'Orient Master GmbH',
    jobTitle: "Project Management - Working Student",
    time: "April 2021 to August 2022",
    jobDescription: [
      "Analysed project scope with competitive analysis and feature requests", 
      "Collaborated with the e-commerce team and ERP team to ensure the requested features are delivered.", 
      "Launched the new e-commerce system which results in a 10x increase in orders"
    ],
  },
]

function Experience() {
  let id = useId();
  let [tabOrientation, setTabOrientation] = useState('horizontal');

  return (
    <div className="py-12 bg-gradient-to-r from-teal-500 to-cyan-600">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="mt-2 text-3xl font-bold text-slate-50 tracking-tight sm:text-4xl sm:tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-lg tracking-tight text-blue-50">
            Companies I&apos;ve worked with.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-4 md:mt-5 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="border-b border-cyan-200 -mx-4 flex overflow-x-auto pb-0 sm:mx-0 sm:overflow-visible">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0">
                  {experiences.map((exp, expIndex) => (
                    <div
                      key={exp.id}
                      className={clsx(
                        'group relative py-1 px-4 border-b-2',
                        selectedIndex === expIndex
                          ? 'border-white text-white'
                          : 'text-cyan-200 hover:bg-white/20 lg:hover:bg-white/5 border-transparent'
                      )}
                    >
                      <h3>
                        <Tab className='font-display text-2xl'>
                          {exp.companyName}
                        </Tab>
                      </h3>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="">
                {experiences.map((exp) => (
                  <Tab.Panel key={exp.id} unmount={false}>
                    <div className='relative text-white'>
                      <div className='text-xl font-bold'>{exp.jobTitle}</div>
                      <div className='font-mono'>{exp.time}</div>
                      <ul className='mt-3'>
                      {exp.jobDescription.map((jd, jdIdx) => (
                        <li key={jdIdx} className="flex">
                          <ChevronRightIcon className="h-5 w-5 mt-1 -ml-1.5" aria-hidden="true" />
                          <span className='text-lg'>{jd}</span>
                        </li>
                      ))}
                      </ul>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </div>
    </div>
  )
}

export default Experience