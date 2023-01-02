'use client'

import { motion } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'

const PopUpMenu = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const router = useRouter()
  const pathname = usePathname()
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (e.currentTarget.dataset.link === pathname) {
      setMenuOpen(!menuOpen)
    } else {
      router.push(e.currentTarget.dataset.link ?? '')
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.6,
        ease: 'linear',
      }}
      className="fixed top-0 z-10 w-full h-screen text-3xl text-center bg-black pt-36"
    >
      <ul>
        <li
          style={{ listStyleType: 'none' }}
          className="mb-8 hover:text-transparent hover:bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
        >
          <button data-link="/#about" type="button" onClick={handleClick}>
            <a className="no-underline uppercase">About</a>
          </button>
        </li>
        <li
          style={{ listStyleType: 'none' }}
          className="mb-8 hover:text-transparent hover:bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
        >
          <button data-link="/#projects" type="button" onClick={handleClick}>
            <a className="no-underline uppercase">Projects</a>
          </button>
        </li>
        <li
          style={{ listStyleType: 'none' }}
          className="mb-8 hover:text-transparent hover:bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
        >
          <button data-link="/#blog" type="button" onClick={handleClick}>
            <a className="no-underline uppercase">Blog</a>
          </button>
        </li>
        <li
          style={{ listStyleType: 'none' }}
          className="mb-8 hover:text-transparent hover:bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
        >
          <button data-link="/#contact" type="button" onClick={handleClick}>
            <a className="no-underline uppercase">Contact</a>
          </button>
        </li>
        <li
          style={{ listStyleType: 'none' }}
          className="mt-20 mb-4 text-xl hover:text-transparent hover:bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
        >
          <button data-link="/legal" type="button" onClick={handleClick}>
            <a className="no-underline uppercase">Legal</a>
          </button>
        </li>
        <li
          style={{ listStyleType: 'none' }}
          className="text-xl hover:text-transparent hover:bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
        >
          <button data-link="/impressum" type="button" onClick={handleClick}>
            <a className="no-underline uppercase">Impressum</a>
          </button>
        </li>
      </ul>
    </motion.div>
  )
}

export default PopUpMenu
