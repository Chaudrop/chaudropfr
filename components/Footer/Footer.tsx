import clsx from 'clsx'
import Image from 'next/image'
import styles from './Footer.module.css'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

export default function Footer() {
  const date = new Date()

  return (
    <footer className="bg-backgroundgray p-6 text-neutral-400 items-center flex flex-col">
      <div className="flex space-x-4 text-white mb-2">
        <a
          href="https://fr.linkedin.com/in/pierre-chaudron-35754515a"
          target="_blank"
        >
          <Image
            src="/icon-linkedin.svg"
            alt="Linkedin logo"
            height={30}
            width={30}
            priority
          />
        </a>
        <a href="https://github.com/Chaudrop" target="_blank">
          <Image
            src="/icon-github.svg"
            alt="Github logo"
            height={30}
            width={30}
            priority
          />
        </a>
        <a href="mailto:chaudronpierre8@gmail.com">
          <EnvelopeIcon className="h-8 w-8" />
        </a>
      </div>

      <span>&copy; Copyright {date.getFullYear()}, Pierre Chaudron</span>
    </footer>
  )
}
