import clsx from 'clsx'
import Image from 'next/image'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <div className="absolute w-full top-0 left-0 mx-auto px-4 lg:px-6">
      <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 gap-x-4">
        <div>
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
        </div>

        <nav className="flex space-x-6 lg:space-x-16">
          <a
            href="#about"
            className="text-lg font-medium text-slate-100 hover:text-slate-300 font-mono"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-lg font-medium text-slate-100 hover:text-slate-300 font-mono"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-lg font-medium text-slate-100 hover:text-slate-300 font-mono"
          >
            Experience
          </a>
        </nav>

        <div className="flex space-x-6 text-base text-white">
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
            <span className="hidden md:inline-block">LinkedIn</span>
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
            <span className="hidden md:inline-block">Github</span>
          </a>
          <a
            href="mailto:chaudronpierre8@gmail.com"
            className="flex shrink-0 items-center gap-x-2 border-2 green-border rounded-lg p-1 px-3"
          >
            <EnvelopeIcon className="h-6 w-6" />
            <span className="hidden md:inline-block">Contact</span>
          </a>
        </div>
      </div>
    </div>
  )
}
