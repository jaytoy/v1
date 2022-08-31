import { Tab } from '@headlessui/react'
import clsx from 'clsx';
import React, { useId, useState } from 'react'
import DiamondIcon from './icon'

const experiences = [
  {
    id: 1,
    name: 'Opening Day',
    date: 'April 4',
    dateTime: '2022-04-04',
    speakers: [
      {
        name: 'Steven McHail',
        role: 'Designer at Globex Corporation',
      },
    ],
  },
  {
    id: 2,
    name: 'Speakers & Workshops',
    date: 'April 5',
    dateTime: '2022-04-05',
    speakers: [
      {
        name: 'Damaris Kimura',
        role: 'Senior Engineer at OCP',
      },
    ],
  },
  {
    name: 'Interviews',
    date: 'April 6',
    dateTime: '2022-04-06',
    speakers: [
      {
        name: 'Andrew Greene',
        role: 'Frontend Developer at Ultratech',
      },
    ],
  },
]


function Experience() {
  let id = useId();
  let [tabOrientation, setTabOrientation] = useState('horizontal');

  return (
    <div className="py-12 bg-gradient-to-r from-teal-500 to-cyan-600 lg:z-10 lg:relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Tab.Group
        as="div"
        className="my-12 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:my-14 sm:gap-y-16 lg:grid-cols-4"
        vertical={tabOrientation === 'vertical'}
      >
        <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
          <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
          <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
            {({ selectedIndex }) =>
              <>
                {experiences.map((day, dayIndex) => (
                  <div key={day.id} className="relative lg:pl-8">
                    <DiamondIcon
                      className={clsx(
                        'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                        dayIndex === selectedIndex
                          ? 'fill-blue-600 stroke-blue-600'
                          : 'fill-transparent stroke-slate-400'
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          'font-mono text-sm',
                          dayIndex === selectedIndex
                            ? 'text-blue-600'
                            : 'text-slate-500'
                        )}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {day.name}
                        </Tab>
                      </div>
                      <div
                        className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
                      >
                        {day.date}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            }
          </Tab.List>
        </div>
        <Tab.Panels className="flex">
          {experiences.map((day) => (
            <Tab.Panel
              key={day.id}
              className="gap-x-8 gap-y-10 sm:gap-y-16 [&:not(:focus-visible)]:focus:outline-none"
              unmount={false}
            >
              {day.speakers.map((speaker, speakerIndex) => (
                <div key={speakerIndex}>
                  <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                    {speaker.name}
                  </h3>
                  <p className="mt-1 text-base tracking-tight text-slate-500">
                    {speaker.role}
                  </p>
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      </div>
    </div>
  )
}

export default Experience