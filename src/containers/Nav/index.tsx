import { Button } from '../../components/Button'

export const Nav = () => {
  return (
    <>
      <nav className="space-x-8 flex">
        <Button
          type="link"
          className="hover:text-accent text-gray-300 transition-colors duration-300"
          href="#about"
        >
          Sobre
        </Button>
        <Button
          type="link"
          className="hover:text-accent text-gray-300 transition-colors duration-300"
          href="#skills"
        >
          Habilidades
        </Button>
        <Button
          type="link"
          className="hover:text-accent text-gray-300 transition-colors duration-300"
          href="#projects"
        >
          Projetos
        </Button>
        <Button
          type="link"
          className="hover:text-accent text-gray-300 transition-colors duration-300"
          href="#contact"
        >
          Contato
        </Button>
      </nav>
    </>
  )
}
