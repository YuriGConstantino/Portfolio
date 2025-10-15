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
        <div className="group bg-card-surface flex h-full flex-col overflow-hidden rounded-lg border-1 border-black">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="p-6">
            <h3 className="text-primary-color mb-2 text-xl font-bold">
              {title}
            </h3>
            <p className="text-secondary-color mb-4">{description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {tag.map((tags, index) => (
                <span
                  key={index}
                  className="bg-tag/50 text-tag-text cursor-default rounded-full px-2.5 py-1 text-xs font-semibold"
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
                className="hover:text-primary-color text-card-link flex cursor-pointer items-center gap-2 font-medium"
              >
                Ver Demo
                <ExternalLink width={18} />
              </Button>
              <Button
                type="link"
                href={repositorie}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-color text-card-link flex cursor-pointer items-center gap-2 font-medium"
              >
                Repositório
                <Folder width={18} />
              </Button>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </>
  )
}
