'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
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
    <header className="grid self-center flex-grow w-full grid-cols-2 my-5">
      {/**
       * Navbar Grid Left Side
       */}
      <Link href="/" className="px-5 py-2 w-fit sm:px-10 sm:py-3">
        {/* <Image alt="Logo" src={logo} priority className="max-w-[10rem] md:max-w-[12rem]" /> */}
        <div />
      </Link>
      {/**
       * Navbar Grid Right Side
       */}
      <div className="flex items-center justify-end px-5 py-3 md:px-10 md:py-5">
        {/**
         * Link Container
         */}
        <div className="hidden gap-5 font-semibold tracking-wider sm:flex">
          <Link
            href="/#about"
            className="duration-200 ease-in-out hover:text-transparent bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
          >
            About
          </Link>
          <Link
            href="/#projects"
            className="duration-200 ease-in-out hover:text-transparent bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
          >
            Projects
          </Link>
          <Link
            href="/#blog"
            className="duration-200 ease-in-out hover:text-transparent bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
          >
            Blog
          </Link>
          <Link
            href="/#contact"
            className="duration-200 ease-in-out hover:text-transparent bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
          >
            Contact
          </Link>
        </div>
        <div className="z-10 mr-5 sm:hidden">
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
