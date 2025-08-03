import { useState } from 'react'
import { Button } from '../../components/Button'
import { InputForm } from '../../components/InputForm'
import FadeContent from '../../blocks/Animations/FadeContent/FadeContent'

export const Contact = () => {
  const [copied, setCopied] = useState(false)
  const text = 'yuri.gconstantino@gmail.com'
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        threshold={0.5}
      >
        <section id="contact" className="py-20 md:py-32">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">
              Vamos Conversar!
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-gray-400">
              Estou aberto a novas oportunidades e colaborações. Sinta-se à
              vontade para entrar em contato.
            </p>
            <div className="mx-auto max-w-xl text-left">
              <form action="#" method="POST">
                <InputForm label="Nome" type="text" name="name" />
                <InputForm label="Email" type="email" name="email" />
                <InputForm label="Mensagem" name="message" />
                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-accent-color transform rounded-lg px-8 py-3 font-bold text-gray-900 transition-transform duration-300 hover:scale-105 hover:bg-sky-500"
                  >
                    Enviar Mensagem
                  </Button>
                </div>
              </form>
            </div>
            <div className="mt-16 flex flex-col items-center text-gray-400">
              <p>Ou me encontre em:</p>
              <p
                onClick={handleCopy}
                className="hover:text-accent my-2 cursor-pointer text-lg font-semibold text-white"
              >
                yuri.gconstantino@gmail.com
              </p>
              {copied && <span className="text-accent">Copiado!</span>}
            </div>
          </div>
        </section>
      </FadeContent>
    </>
  )
}
