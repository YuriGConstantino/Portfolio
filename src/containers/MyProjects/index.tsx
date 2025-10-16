import FadeContent from '../../blocks/Animations/FadeContent/FadeContent'
import { ProjectCard } from '../../components/ProjectCard'
import projects from '../../data/projects'

export const MyProjects = () => {
  function getDelay(index: number): number {
    return 0.1 + index * 0.1
  }
  return (
    <>
      <FadeContent
        blur={true}
        duration={900}
        easing="ease-out"
        initialOpacity={0}
        threshold={0.2}
      >
        <section
          id="projects"
          className="bg-secondary-background py-20 md:py-32"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-primary-color mb-2 text-center text-3xl font-bold md:text-4xl">
              Meus Projetos
            </h2>
            <p className="text-secondary-color mx-auto mb-12 max-w-2xl text-center">
              Uma seleção de projetos que desenvolvi.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  tag={project.tag}
                  demo={project.demo}
                  repositorie={project.repositorie}
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
