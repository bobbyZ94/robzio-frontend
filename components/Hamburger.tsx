'use client'

import { Dispatch, SetStateAction } from 'react'

const Hamburger = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}) => (
  <button
    className={`group focus:outline-none hamburger--squeeze ${menuOpen ? 'is-active' : ''}`}
    type="button"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    <span className="hamburger-box">
      <span className="before:group-hover:bg-gradient-to-r after:group-hover:bg-gradient-to-r group-hover:bg-gradient-to-r hamburger-inner from-blue-600 to-yellow-600" />
    </span>
  </button>
)

export default Hamburger
