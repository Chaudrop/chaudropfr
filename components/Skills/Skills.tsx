import clsx from 'clsx'
import Image from 'next/image'
import styles from './Skills.module.css'
import icons from './icons'

interface SkillType {
  name: string
  icon: any
}

export default function Skills() {
  const skills: Array<SkillType> = [
    { name: 'React', icon: icons.reactIcon },
    { name: 'Node.js', icon: icons.nodeIcon },
    { name: 'Next.js', icon: icons.nextIcon },
    { name: 'TailwindCSS', icon: icons.tailwindIcon },
    { name: 'MaterialUI', icon: icons.materialUiIcon },
    { name: 'Nest.js', icon: icons.nestIcon },
    { name: 'Express.js', icon: icons.expressIcon },
    { name: 'Redux', icon: icons.reduxIcon },
    { name: 'Typescript', icon: icons.typescriptIcon },
    { name: 'MongoDB', icon: icons.mongodbIcon },
  ]

  return (
    <div id="skills" className="bg-[#323232] px-8 py-16">
      <div className="container mx-auto max-w-screen-lg">
        <div className="pb-12 green text-4xl font-bold font-mono">Skills</div>
        <div className="flex gap-6 md:gap-8 justify-center flex-wrap m-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 bg-[#1f1f1f] hover:bg-[#171717] transition text-white rounded-lg cursor-pointer flex gap-3 items-center"
            >
              <Image src={skill.icon} alt={`${skill.name} logo`} height={26} />
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
