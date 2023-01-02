'use client'

import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Hamburger from './Hamburger'
import PopUpMenu from './PopUpMenu'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  /**
   * Removes scrollbar when PopUpMenu is visible
   */
  useEffect(() => {
    if (menuOpen) {
      document.querySelector('body')?.classList.add('overflow-hidden')
    } else {
      document.querySelector('body')?.classList.remove('overflow-hidden')
    }
  })
  return (
    <header>
      <div className="fixed top-0 right-0 z-20 px-5 py-5 md:px-8 md:py-8">
        <div className="hidden gap-5 font-semibold tracking-wider sm:flex">
          <a
            href="/#about"
            className="duration-200 ease-in-out hover:text-transparent bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
          >
            About
          </a>
          <a
            href="/#projects"
            className="duration-200 ease-in-out hover:text-transparent bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
          >
            Projects
          </a>
          <a
            href="/#blog"
            className="duration-200 ease-in-out hover:text-transparent bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
          >
            Blog
          </a>
          <a
            href="/#contact"
            className="duration-200 ease-in-out hover:text-transparent bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
          >
            Contact
          </a>
        </div>
        <div className="z-20 mr-5 sm:hidden">
          <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
      {/**
       * PopUpMenu shown when Hamburger clicked
       */}
      <div>
        <AnimatePresence>{menuOpen ? <PopUpMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> : ''}</AnimatePresence>
      </div>
    </header>
  )
}
