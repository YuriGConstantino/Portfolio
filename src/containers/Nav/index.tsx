import { Button } from '../../components/Button'

export const Nav = () => {
  return (
    <>
      <nav className="hidden space-x-8 md:flex">
        <Button
          className="hover:text-accent text-gray-300 transition-colors duration-300"
          href="#about"
        >
          Sobre
        </Button>
        <Button
          className="hover:text-accent text-gray-300 transition-colors duration-300"
          href="#skills"
        >
          Habilidades
        </Button>
        <Button
          className="hover:text-accent text-gray-300 transition-colors duration-300"
          href="#projects"
        >
          Projetos
        </Button>
        <Button
          className="hover:text-accent text-gray-300 transition-colors duration-300"
          href="#contact"
        >
          Contato
        </Button>
      </nav>
    </>
  )
}
