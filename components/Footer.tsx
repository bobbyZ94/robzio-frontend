import Link from 'next/link'
import { SettingsDataType } from '../typings.d'
import { mailResponsive } from './SvgComponents'
import { getGlobalsData } from '../utils/getData'

export default async function Footer() {
  const Settings: SettingsDataType = await getGlobalsData('settings')
  const year = new Date().getFullYear()
  return (
    <div
      id="footer"
      className="flex flex-col items-center justify-center w-full gap-5 py-10 font-semibold tracking-wider bg-black snap-center"
    >
      {/* <div className="duration-200 ease-in-out sm:mb-5 hover:text-transparent bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text">
        <a href={`mailto:${Settings.email}`}>
          <span className="text-white">{mailResponsive}</span>
          {Settings.email}
        </a>
      </div> */}
      {/* <div className="flex flex-col gap-5 text-center sm:flex-row sm:mb-5">
        <Link
          className="duration-200 ease-in-out hover:text-transparent bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
          href="/#about"
        >
          About
        </Link>
        <Link
          className="duration-200 ease-in-out hover:text-transparent bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
          href="/#projects"
        >
          Projects
        </Link>
        <Link
          className="duration-200 ease-in-out hover:text-transparent bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
          href="/#blog"
        >
          Blog
        </Link>
        <Link
          className="duration-200 ease-in-out hover:text-transparent bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
          href="/#contact"
        >
          Contact
        </Link>
      </div> */}
      <div className="flex flex-col gap-5 text-center sm:flex-row sm:mb-5">
        <Link
          className="hover:text-transparent hover:bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
          href="/legal"
        >
          Legal
        </Link>
        <Link
          className="hover:text-transparent hover:bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text"
          href="/impressum"
        >
          Impressum
        </Link>
      </div>
      <div className="uppercase">
        {Settings.company} © {year}
      </div>
    </div>
  )
}
