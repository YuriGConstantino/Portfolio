import AnimatedContent from '../../blocks/Animations/AnimatedContent/AnimatedContent'
import FadeContent from '../../blocks/Animations/FadeContent/FadeContent'

export const About = () => {
  return (
    <>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        threshold={0.5}
      >
        <section id="about" className="bg-secondary-background py-10 md:py-32">
          <AnimatedContent
            distance={200}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.0}
            threshold={0.15}
            delay={0.0}
          >
            <div className="container mx-auto px-6">
              <div className="grid items-center justify-items-center gap-12 md:grid-cols-5">
                <div className="md:col-span-2">
                  <img
                    src="https://github.com/YuriGConstantino.png"
                    alt="Avatar"
                    className="w-50 rounded-lg shadow-2xl md:w-80"
                  />
                </div>
                <div className="md:col-span-3">
                  <h2 className="text-primary-color mb-4 text-3xl font-bold md:text-4xl">
                    Sobre Mim
                  </h2>
                  <p className="text-secondary-color mb-4">
                    Olá! Sou um desenvolvedor full-stack apaixonado por
                    tecnologia e por transformar ideias em realidade digital.
                    Tenho experiência com o ecossistema JavaScript, construindo
                    interfaces de usuário interativas com React e desenvolvendo
                    o lado do servidor.
                  </p>
                  <p className="text-secondary-color mb-4">
                    Busco constantemente aprender novas tecnologias para
                    aprimorar minhas habilidades. Atualmente, estou expandindo
                    meus conhecimentos em{' '}
                    <span className="text-accent-color font-semibold">
                      Python
                    </span>
                    , com o objetivo de aplicá-lo em análise de dados e
                    desenvolvimento back-end.
                  </p>
                  <p className="text-secondary-color">
                    Estou animado para colaborar em projetos desafiadores e
                    contribuir para a criação de produtos incríveis.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </section>
      </FadeContent>
    </>
  )
}
