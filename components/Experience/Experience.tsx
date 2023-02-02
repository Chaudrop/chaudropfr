import clsx from 'clsx'
import Image from 'next/image'
import styles from './Experience.module.css'
import techIcons from '../tech-icons'
import companyIcons from './company-icons'

interface ExperienceType {
  name: string
  title: string
  description: string | string[]
  companyIcon: any
  techIcons: any[]
}

const Experiences: Array<ExperienceType> = [
  {
    name: 'CGI - 2022-Present',
    title: 'Full-Stack Developer',
    description: [
      'Formation sur des technologies Web Javascript / Typescript.',
      'Création de scripts de purge en PL/SQL pour des bases de données Oracle.',
      'Développement de fonctionnalités en PHP / Symfony et JavaScript / React sur Akeneo.',
    ],
    companyIcon: companyIcons.cgiIcon,
    techIcons: [
      techIcons.typescriptIcon,
      techIcons.reactIcon,
      techIcons.nextIcon,
      techIcons.tailwindIcon,
      techIcons.nestIcon,
      techIcons.phpIcon,
      techIcons.symfonyIcon,
      techIcons.plsqlIcon,
    ],
  },
  {
    name: 'Parkki - 2020 (6 months)',
    title: 'Full-Stack Developer Internship',
    description: [
      "Développement d'un Back office pour gérer les données internes de l'entreprise.",
      'Front web fait en ReactJS avec Material-UI et Redux.',
      'Backend fait en NodeJS avec ExpressJS et MongoDB.',
    ],
    companyIcon: companyIcons.parkkiIcon,
    techIcons: [
      techIcons.reactIcon,
      techIcons.materialUiIcon,
      techIcons.reduxIcon,
      techIcons.nodeIcon,
      techIcons.expressIcon,
      techIcons.mongodbIcon,
    ],
  },
  {
    name: 'Lesaffre - 2018 (4 months)',
    title: 'Developer Internship',
    description: [
      "Développement d'applications Web en Webdev23",
      "Amélioration d'une application en C# (.NET Core)",
    ],
    companyIcon: companyIcons.lesaffreIcon,
    techIcons: [techIcons.webdev23Icon, techIcons.csharpIcon],
  },
]

const TimelineStep = () => {
  return (
    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
      <div className="h-full w-6 flex items-center justify-center">
        <div className="h-full w-1 bg-green pointer-events-none"></div>
      </div>
      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-lightgreen shadow"></div>
    </div>
  )
}

interface ExperienceCardPropsType {
  exp: ExperienceType
  left: Boolean
}

const ExperienceCard = (props: ExperienceCardPropsType) => {
  const { exp, left } = props

  return (
    <div className={clsx('flex md:contents', left && 'flex-row-reverse')}>
      {!left && <TimelineStep />}
      <div
        className={clsx(
          left ? 'col-start-1 col-end-5' : 'col-start-6 col-end-10',
          'bg-expgray p-4 rounded-xl my-4 ml-auto shadow-md w-full'
        )}
      >
        <Image
          className="inline-block align-middle mr-2"
          src={exp.companyIcon}
          alt={'company logo'}
          height={22}
        />
        <h3 className="font-semibold text-lg mb-1 inline-block align-sub">
          {exp.name}
        </h3>
        <p className="text-justify text-sm text-neutral-300 font-medium mb-1">
          {exp.title}
        </p>
        <p className="text-justify text-sm text-white mb-2">
          {typeof exp.description === 'string'
            ? exp.description
            : exp.description.map((line) => (
                <>
                  {line}
                  <br />
                </>
              ))}
        </p>
        <div className="flex gap-2 flex-wrap">
          {exp.techIcons.map((icon) => (
            <Image src={icon} alt={'tech icon'} height={20} />
          ))}
        </div>
      </div>
      {left && <TimelineStep />}
    </div>
  )
}

export default function Experience() {
  return (
    <div
      id="experience"
      className="main-gradient-background-reverse px-8 py-16"
    >
      <div className="container mx-auto max-w-screen-lg">
        <div className="pb-12 text-lightgreen text-4xl font-bold font-mono">
          Experience
        </div>
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-white">
          {Experiences.map((exp, i) => (
            <ExperienceCard exp={exp} left={i % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  )
}
