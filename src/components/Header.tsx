'use client'

import Link from 'next/link'
import { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            <li>
              <Link
                className="block py-4 px-5 w-screen sm:w-full text-center hover:bg-blue-950 hover:text-white transition-all"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block py-4 px-5 w-screen sm:w-full text-center hover:bg-blue-950 hover:text-white transition-all"
                href="/shop"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="block py-4 px-5 w-screen sm:w-full text-center hover:bg-blue-950 hover:text-white transition-all"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="block py-4 px-5 w-screen sm:w-full text-center hover:bg-blue-950 hover:text-white transition-all"
                href="/contact"
              >
                Contact
              </Link>
            </li>
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
