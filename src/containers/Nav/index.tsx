import { Button } from '../../components/Button'

export const Nav = () => {
  return (
    <>
      <nav className="flex space-x-8">
        <Button
          type="link"
          className="hover:text-accent text-input-color transition-colors duration-300"
          href="#about"
        >
          Sobre
        </Button>
        <Button
          type="link"
          className="hover:text-accent text-input-color transition-colors duration-300"
          href="#skills"
        >
          Habilidades
        </Button>
        <Button
          type="link"
          className="hover:text-accent text-input-color transition-colors duration-300"
          href="#projects"
        >
          Projetos
        </Button>
        <Button
          type="link"
          className="hover:text-accent text-input-color transition-colors duration-300"
          href="#contact"
        >
          Contato
        </Button>
      </nav>
    </>
  )
}
