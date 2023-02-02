import clsx from 'clsx'
import Image from 'next/image'
import photo from './photo.png'
import pcWork from './pc-work2.jpg'
import styles from './About.module.css'

export default function About() {
  return (
    <>
      <div className="h-screen">
        <div className="container max-w-screen-lg flex justify-center items-center mx-auto px-4 lg:px-6 gap-2 h-full pt-[85px]">
          <div className="flex flex-col gap-2">
            <div className="text-white text-base md:text-2xl font-semibold font-mono">
              Hello, I'm Pierre
            </div>
            <div className="text-lightgreen text-md md:text-5xl font-bold font-mono">
              Full-Stack Developer
            </div>
            <div className="text-slate-100 text-justify text-base md:text-xl my-5">
              I'm a
              <Image
                src="/france-flag-icon.svg"
                alt="France Flag"
                height={30}
                width={30}
                priority
                className="inline mx-2 align-sub"
              />
              Full-Stack web developer working with Javascript frameworks
            </div>
            <a
              href="#"
              target="_blank"
              className="flex items-center gap-x-2 border-2 border-lightgreen w-fit rounded py-2 px-4"
            >
              <Image
                src="/icon-cv.png"
                alt="CV Icon"
                height={30}
                width={30}
                priority
              />
              <span className="text-base text-white">View my CV</span>
            </a>
          </div>
          <Image
            className="w-auto h-48 md:h-56 lg:h-96"
            src={photo}
            alt="Photo"
          />
        </div>
      </div>
      <div
        id="about"
        className="container max-w-screen-lg mx-auto flex gap-6 md:gap-12 p-12 pb-36 justify-center flex-col sm:flex-row items-center"
      >
        <div className="flex justify-end items-center shrink-0 order-2 sm:order-1">
          <Image
            className="rounded-full object-cover w-60 h-60 md:w-80 md:h-80"
            src={pcWork}
            alt="pc"
          />
        </div>
        <div className="flex justify-center gap-4 md:gap-8 flex-col order-1 sm:order-2">
          <div className="text-lightgreen text-4xl font-bold font-mono">
            About me
          </div>
          <div className="text-gray-300 text-justify text-sm md:text-lg">
            My name is Pierre Chaudron and I'm a Full-Stack web developer based
            in France
            <Image
              src="/france-flag-icon.svg"
              alt="France Flag"
              height={30}
              width={30}
              priority
              className="inline ml-2 align-sub"
            />
            . I mainly work with Javascript Frameworks like React or Node, this
            website was made with NextJS and TailwindCSS. You can find the
            source code on my{' '}
            <a
              className="font-bold text-gray-200"
              href="https://github.com/Chaudrop/chaudropfr"
              target="_blank"
            >
              Github
            </a>
            .
          </div>
        </div>
      </div>
    </>
  )
}
