import { useEffect, useState } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/solid'
import Head from 'next/head'
import clsx from 'clsx'

import styles from '../styles/Home.module.css'
import NavBar from 'components/NavBar/NavBar'
import About from 'components/About/About'
import Skills from 'components/Skills/Skills'
import Experience from 'components/Experience/Experience'
import Footer from 'components/Footer/Footer'

export default function Home() {
  const [scrollToTopButton, setScrollToTopButton] = useState<Boolean>(false)

  useEffect(() => {
    window.onscroll = function () {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        setScrollToTopButton(true)
      } else {
        setScrollToTopButton(false)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Chaudrop</title>
        <meta name="description" content="Chaudrop.fr le meilleur site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={clsx(
          scrollToTopButton ? 'visible opacity-100' : 'invisible opacity-0',
          'shadow-2xl transition-all ease-in bg-lightgreen cursor-pointer p-5 fixed rounded-full bottom-6 right-6'
        )}
        onClick={() => window.scrollTo(0, 0)}
      >
        <ArrowUpIcon className="h-8 w-8" />
      </div>
      <main className="min-h-screen main-gradient-background">
        <NavBar />
        <About />
      </main>
      <Skills />
      <Experience />
      <Footer />
    </>
  )
}
