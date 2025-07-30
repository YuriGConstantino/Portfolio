import { Button } from '../../components/Button'

type Props = {
  className: string
  onClick: () => void
}

export const NavMobile = ({ className, onClick }: Props) => {
  return (
    <>
      <div id="mobile-menu" className={className} onClick={onClick}>
        <Button
          href="#about"
          className="block px-6 py-2 text-gray-300 hover:bg-gray-800"
        >
          Sobre
        </Button>
        <Button
          href="#skills"
          className="block px-6 py-2 text-gray-300 hover:bg-gray-800"
        >
          Habilidades
        </Button>
        <Button
          href="#projects"
          className="block px-6 py-2 text-gray-300 hover:bg-gray-800"
        >
          Projetos
        </Button>
        <Button
          href="#contact"
          className="block px-6 py-2 text-gray-300 hover:bg-gray-800"
        >
          Contato
        </Button>
      </div>
    </>
  )
}
