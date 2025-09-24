import FadeContent from '../../blocks/Animations/FadeContent/FadeContent'
import { Card } from '../../components/Card'

export const Skills = () => {
  const skills = [
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      skill: 'HTML5',
      delay: 0.1
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      skill: 'CSS3',
      delay: 0.2
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
      skill: 'Bootstrap',
      delay: 0.3
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
      skill: 'Sass',
      delay: 0.4
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      skill: 'JavaScript',
      delay: 0.5
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg',
      skill: 'jQuery',
      delay: 0.6
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gulp/gulp-plain.svg',
      skill: 'Gulp',
      delay: 0.7
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grunt/grunt-original.svg',
      skill: 'Grunt',
      delay: 0.8
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      skill: 'TypeScript',
      delay: 0.9
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      skill: 'React',
      delay: 1
    }
  ]
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
                  delay={skill.delay}
                />
              ))}
            </div>
          </div>
        </section>
      </FadeContent>
    </>
  )
}
