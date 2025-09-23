import { useState } from 'react'
import { About } from '../../containers/About'
import { Contact } from '../../containers/Contact'
import { Hero } from '../../containers/Hero'
import { MyProjects } from '../../containers/MyProjects'
import { Skills } from '../../containers/Skills'
import { Header } from '../../containers/Header'

export const Home = () => {
  const [theme, setTheme] = useState(false)
  function chargeTheme() {
    setTheme((prev) => !prev)
  }
  return (
    <>
      <div className={theme ? 'light' : ''}>
        <Header theme={theme} chargeTheme={chargeTheme} />
        <main className="py-24">
          <Hero />
          <About />
          <Skills />
          <MyProjects />
          <Contact />
        </main>
      </div>
    </>
  )
}
