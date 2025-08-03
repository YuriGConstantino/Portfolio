import FadeContent from '../../blocks/Animations/FadeContent/FadeContent'
import { ProjectCard } from '../../components/ProjectCard'

export const MyProjects = () => {
  const projects = [
    {
      image: '../../../public/image/Efood.png',
      title: 'EFood',
      description: 'Desenvolvimento de uma página de delivery de restaurantes.',
      tag: ['React', 'Redux', 'TypeScript', 'Route-DOM'],
      demo: 'https://efood-topaz-omega.vercel.app/',
      repositorie: 'https://github.com/YuriGConstantino/efood',
      delay: 0.1
    },
    {
      image: '../../../public/image/Contacts-List.png',
      title: 'Contacts List',
      description:
        'Desenvolvimento de uma lista de contatos feita em React e TypeScript.',
      tag: ['React', 'Redux', 'TypeScript', 'Route-DOM'],
      demo: 'https://contacts-list-livid.vercel.app/',
      repositorie: 'https://github.com/YuriGConstantino/Contacts-List',
      delay: 0.2
    },
    {
      image: '../../../public/image/Clone-Crunchyroll.png',
      title: 'Clone Crunchyroll',
      description:
        'Desenvolvimento de uma landing page clone de um site de streaming.',
      tag: ['HTML', 'SASS', 'JavaScript', 'Gulp'],
      demo: 'https://curso-ebac-frontend-projeto4.vercel.app/',
      repositorie: 'https://github.com/YuriGConstantino/Clone-Crunchyroll',
      delay: 0.3
    },
    {
      image: '../../../public/image/Landing-Page-com-Bootstrap.png',
      title: 'Landing Page com Bootstrap',
      description:
        'Desenvolvimento de uma landing page responsiva para um site fictício de venda de jogos.',
      tag: ['HTML', 'Bootstrap', 'JavaScript'],
      demo: 'https://curso-ebac-frontend-projeto3.vercel.app/',
      repositorie:
        'https://github.com/YuriGConstantino/Landing-Page-com-Bootstrap',
      delay: 0.4
    }
  ]
  return (
    <>
      <FadeContent
        blur={true}
        duration={900}
        easing="ease-out"
        initialOpacity={0}
        threshold={0.3}
      >
        <section
          id="projects"
          className="bg-gray-950 py-20 md:py-32"
        >
          <div className="container mx-auto px-6">
            <h2 className="mb-2 text-center text-3xl font-bold text-white md:text-4xl">
              Meus Projetos
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
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
                  delay={project.delay}
                />
              ))}
            </div>
          </div>
        </section>
      </FadeContent>
    </>
  )
}
