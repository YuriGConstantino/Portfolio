import AnimatedContent from '../../blocks/Animations/AnimatedContent/AnimatedContent'

type Props = {
  src: string
  skill: string
  delay: number
}

export const Card = ({ src, skill, delay }: Props) => {
  return (
    <>
      <AnimatedContent
        distance={50}
        direction="vertical"
        reverse={false}
        duration={0.5}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1.0}
        threshold={0.3}
        delay={delay}
      >
        <div className="bg-gray-8 hover:bg-gray-7/50 flex flex-col items-center justify-center gap-2 rounded-lg p-6 transition-all duration-300">
          <img src={src} alt={skill} className="h-12 w-12" />
          <span className="text-primary-color font-medium">{skill}</span>
        </div>
      </AnimatedContent>
    </>
  )
}
