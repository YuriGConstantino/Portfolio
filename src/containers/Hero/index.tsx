import SplitText from '../../blocks/TextAnimations/SplitText/SplitText'
import { Button } from '../../components/Button'

export const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="container mx-auto px-6 py-20 text-center md:py-75"
      >
        <h1 className="text-primary-color text-2xl leading-tight font-bold md:text-5xl">
          <SplitText
            text="Desenvolvedor Full-Stack"
            className=""
            delay={30}
            duration={0.3}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0}
            rootMargin="-100px"
            textAlign="center"
          />
        </h1>
        <p className="text-secondary-color mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Criando soluções web inovadoras e eficientes, com foco em design
          responsivo e experiências de usuário memoráveis.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            type="link"
            href="#contact"
            className="bg-accent text-btn-text hover:bg-accent-focus transform rounded-lg px-8 py-3 font-bold transition-transform duration-300 hover:scale-105"
          >
            Entrar em Contato
          </Button>
          <Button
            type="link"
            download={true}
            href="/files/CV Yuri Constantino.pdf"
            className="bg-input border-input-accent hover:bg-input hover:text-primary-accent-color text-primary-color transform rounded-lg border px-8 py-3 font-bold transition-transform duration-300 hover:scale-105"
          >
            Baixe meu Curriculo
          </Button>
        </div>
        <div className="mt-12 flex justify-center gap-6">
          <Button
            type="link"
            href="https://github.com/YuriGConstantino"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-color text-secondary-color transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M9 19c-4.3 1.4 -4.3-2.5 -6-3m12 5v-3.5c0-1 .1-1.4 -.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0
              0 -1.3-3.2a4.2 4.2 0 0 0 -.1-3.2s-1.1-.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4-1.6 -3.5-1.3 -3.5-1.3a4.2 4.2 0 0 0
              -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6.5 -.6 1.2 -.5 2v3.5"
              ></path>
            </svg>
          </Button>
          <Button
            type="link"
            href="https://www.linkedin.com/in/yurigabrielconstantino/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-color text-secondary-color transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0 -2-2a2 2 0 0 0 -2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Button>
        </div>
      </section>
    </>
  )
}
