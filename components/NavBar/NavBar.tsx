import { Fragment } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Popover, Transition } from '@headlessui/react'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <Popover>
      <div className="absolute w-full top-0 left-0 mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 gap-x-4">
          <a href="#">
            <span
              className={clsx(
                styles.gradient_text,
                'text-3xl font-bold text-slate-200 '
              )}
            >
              CHAUDROP
            </span>
          </a>

          <nav className="hidden sm:flex space-x-6 lg:space-x-16 text-lg font-medium text-slate-100 font-mono">
            <a href="#about" className="hover:text-slate-300 transition">
              About
            </a>
            <a href="#skills" className="hover:text-slate-300 transition">
              Skills
            </a>
            <a href="#experience" className="hover:text-slate-300 transition">
              Experience
            </a>
          </nav>

          <div className="hidden sm:flex space-x-6 text-base text-white">
            <a
              href="https://fr.linkedin.com/in/pierre-chaudron-35754515a"
              target="_blank"
              className="flex shrink-0 items-center gap-x-2"
            >
              <Image
                src="/icon-linkedin.svg"
                alt="Linkedin logo"
                height={30}
                width={30}
                priority
              />
              <span className="hidden lg:inline-block">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Chaudrop"
              target="_blank"
              className="flex shrink-0 items-center gap-x-2"
            >
              <Image
                src="/icon-github.svg"
                alt="Github logo"
                height={30}
                width={30}
                priority
              />
              <span className="hidden lg:inline-block">Github</span>
            </a>
            <a
              href="mailto:chaudronpierre8@gmail.com"
              className="flex shrink-0 items-center gap-x-2 border-2 border-lightgreen rounded-lg p-1 px-3"
            >
              <EnvelopeIcon className="h-6 w-6" />
              <span className="hidden lg:inline-block">Contact</span>
            </a>
          </div>

          <div className="sm:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-lightgreen p-2 text-backgroundgray hover:text-black hover:bg-[#7adc18] transition focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-100">
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-[#222222] shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <a href="#">
                  <span
                    className={clsx(
                      styles.gradient_text,
                      'text-3xl font-bold text-slate-200 '
                    )}
                  >
                    CHAUDROP
                  </span>
                </a>
                <div className="-mr-3 -mt-1">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-lightgreen p-2 text-backgroundgray hover:text-black hover:bg-[#7adc18] transition focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-100">
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              <div className="my-6 py-6 border-y">
                <nav className="grid gap-y-8 text-lg font-medium text-slate-100 font-mono">
                  <Popover.Button
                    as="a"
                    href="#about"
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-backgroundgray transition hover:text-slate-300"
                  >
                    <span className="ml-3">About</span>
                  </Popover.Button>
                  <Popover.Button
                    as="a"
                    href="#skills"
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-backgroundgray transition hover:text-slate-300"
                  >
                    <span className="ml-3">Skills</span>
                  </Popover.Button>
                  <Popover.Button
                    as="a"
                    href="#experience"
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-backgroundgray transition hover:text-slate-300"
                  >
                    <span className="ml-3">Experience</span>
                  </Popover.Button>
                </nav>
              </div>

              <div className="flex justify-evenly space-x-10 text-base text-white">
                <a
                  href="https://fr.linkedin.com/in/pierre-chaudron-35754515a"
                  target="_blank"
                  className="flex shrink-0 items-center gap-x-2"
                >
                  <Image
                    src="/icon-linkedin.svg"
                    alt="Linkedin logo"
                    height={30}
                    width={30}
                    priority
                  />
                  <span className="hidden xsm:inline-block">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Chaudrop"
                  target="_blank"
                  className="flex shrink-0 items-center gap-x-2"
                >
                  <Image
                    src="/icon-github.svg"
                    alt="Github logo"
                    height={30}
                    width={30}
                    priority
                  />
                  <span className="hidden xsm:inline-block">Github</span>
                </a>
                <a
                  href="mailto:chaudronpierre8@gmail.com"
                  className="flex shrink-0 items-center gap-x-2 border-2 border-lightgreen rounded-lg p-1 px-3"
                >
                  <EnvelopeIcon className="h-6 w-6" />
                  <span className="hidden xsm:inline-block">Contact</span>
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
