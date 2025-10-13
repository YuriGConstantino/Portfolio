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
          type="link"
          href="#about"
          className="hover:bg-input text-input-color block px-6 py-2"
        >
          Sobre
        </Button>
        <Button
          type="link"
          href="#skills"
          className="hover:bg-input text-input-color block px-6 py-2"
        >
          Habilidades
        </Button>
        <Button
          type="link"
          href="#projects"
          className="hover:bg-input text-input-color block px-6 py-2"
        >
          Projetos
        </Button>
        <Button
          type="link"
          href="#contact"
          className="hover:bg-input text-input-color block px-6 py-2"
        >
          Contato
        </Button>
      </div>
    </>
  )
}
