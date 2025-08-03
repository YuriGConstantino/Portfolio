import { About } from '../../containers/About'
import { Header } from '../../containers/Header'
import { Hero } from '../../containers/Hero'
import { MyProjects } from '../../containers/MyProjects'
import { Skills } from '../../containers/Skills'

export const Home = () => {
  return (
    <>
      <Header />
      <main className="py-24">
        <Hero />
        <About />
        <Skills />
        <MyProjects />
      </main>
    </>
  )
}
