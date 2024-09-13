'use client'

import Link from 'next/link'
import { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { links } from '@/data/links'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathName = usePathname()

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <header className="w-full flex justify-center items-center border-solid border-b-2 border-b-blue-950">
      <div role="header" className="wrapper flex justify-between items-center">
        <Link
          className="font-bold italic inline-block py-4 transition ease-in-out hover:scale-110"
          href="/"
        >
          CasualChic
        </Link>
        <nav className="w-fit flex justify-center items-center">
          <ul
            className={`absolute top-[56px] left-0 w-full bg-white sm:flex sm:static sm:w-auto sm:bg-transparent sm:flex-row sm:items-center transition-all duration-300 ease-in-out
              ${isMenuOpen ? 'flex flex-col items-center' : 'hidden'}`}
          >
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  className={`block py-4 px-5 w-screen sm:w-full text-center hover:bg-blue-700 hover:text-white transition-all${
                    pathName === link.path ? ' bg-blue-950 text-white' : ''
                  }`}
                  href={link.path}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <CiMenuFries
            className="sm:hidden text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </nav>
      </div>
    </header>
  )
}

export default Header
