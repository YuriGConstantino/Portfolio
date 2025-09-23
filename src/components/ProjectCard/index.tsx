import { ExternalLink, Folder } from 'lucide-react'
import AnimatedContent from '../../blocks/Animations/AnimatedContent/AnimatedContent'
import { Button } from '../Button'

type Props = {
  image: string
  title: string
  description: string
  tag: string[]
  demo: string
  repositorie: string
  delay: number
}

export const ProjectCard = ({
  image,
  title,
  description,
  tag,
  demo,
  repositorie,
  delay
}: Props) => {
  return (
    <>
      <AnimatedContent
        distance={20}
        direction="horizontal"
        reverse={false}
        duration={2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={delay}
      >
        <div className="group flex h-full flex-col overflow-hidden rounded-lg bg-gray-800">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="p-6">
            <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
            <p className="mb-4 text-gray-400">{description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {tag.map((tags, index) => (
                <span
                  key={index}
                  className="rounded-full bg-sky-900/50 px-2.5 py-1 text-xs font-semibold text-sky-300"
                >
                  {tags}
                </span>
              ))}
            </div>
            <div className="mt-auto flex justify-around gap-4">
              <Button
                type="link"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-2 font-medium text-sky-400 hover:text-white"
              >
                Ver Demo
                <ExternalLink width={20} />
              </Button>
              <Button
                type="link"
                href={repositorie}
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-2 font-medium text-sky-400 hover:text-white"
              >
                Repositório
                <Folder width={20} />
              </Button>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </>
  )
}
