import { useState } from "react";
import { Button } from "../../components/Button";
import { Nav } from "../Nav";
import { NavMobile } from "../NavMobile";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-700/50 bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="text-1xl font-bold text-white md:text-2xl">
            Yuri Gabriel Constantino<span className="text-accent">.</span>
          </a>
          <Nav />
          <Button
            type="button"
            className="cursor-pointer text-white focus:outline-none md:hidden"
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
        <NavMobile
          className={mobileMenu ? "block" : "hidden md:hidden"}
          onClick={() => setMobileMenu(false)}
        />
      </header>
    </>
  );
};
