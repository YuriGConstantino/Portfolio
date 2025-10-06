import FadeContent from '../../blocks/Animations/FadeContent/FadeContent'
import { Card } from '../../components/Card'
import skills from '../../data/skills'

export const Skills = () => {
  function getDelay(index: number): number {
  return 0.1 + index * 0.1;
}
  return (
    <>
      <FadeContent
        blur={true}
        duration={900}
        easing="ease-out"
        initialOpacity={0}
        threshold={0.7}
      >
        <section id="skills" className="section-fade-in py-20 md:py-32">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-primary-color mb-2 text-3xl font-bold md:text-4xl">
              Minhas Habilidades
            </h2>
            <p className="text-secondary-color mx-auto mb-12 max-w-2xl">
              Tecnologias com as quais tenho trabalhado recentemente.
            </p>
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  src={skill.src}
                  skill={skill.skill}
                  delay={getDelay(index)}
                />
              ))}
            </div>
          </div>
        </section>
      </FadeContent>
    </>
  )
}
