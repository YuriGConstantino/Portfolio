import { useState } from 'react'
import { Button } from '../../components/Button'
import { Nav } from '../Nav'
import { NavMobile } from '../NavMobile'
import { Menu, Moon, Sun, X } from 'lucide-react'

type Props = {
  theme: boolean
  chargeTheme: () => void
}

export const Header = ({ theme, chargeTheme }: Props) => {
  const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className="border-gray-7/50 bg-gray-9/80 fixed top-0 right-0 left-0 z-10 border-b backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a
            href="#"
            className="text-1xl text-primary-color font-bold md:text-2xl"
          >
            Yuri Gabriel Constantino<span className="text-accent">.</span>
          </a>
          <div className="hidden md:flex">
            <Nav />
            <Button
              type="button"
              className="text-input-color ml-5 block cursor-pointer"
              onClick={chargeTheme}
            >
              {theme ? <Sun /> : <Moon />}
            </Button>
          </div>
          <Button
            type="button"
            className="text-primary-color cursor-pointer focus:outline-none md:hidden"
            onClick={
              mobileMenu
                ? () => setMobileMenu(false)
                : () => setMobileMenu(true)
            }
          >
            {mobileMenu ? <X /> : <Menu />}
          </Button>
        </div>
        {/* Menu Mobile  */}
        <div className="flex flex-col">
          <NavMobile
            className={mobileMenu ? 'block w-100' : 'hidden md:hidden'}
            onClick={() => setMobileMenu(false)}
          />
          <Button
            type="button"
            className={
              mobileMenu
                ? 'absolute right-3 bottom-3 block cursor-pointer'
                : 'hidden md:hidden'
            }
            onClick={chargeTheme}
          >
            {theme ? <Sun /> : <Moon />}
          </Button>
        </div>
      </header>
    </>
  )
}
