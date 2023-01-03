'use client'

import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { FrontpageDataType } from '../typings.d'
import { arrowDown } from './SvgComponents'

export default function About({ FrontpageData }: { FrontpageData: FrontpageDataType }) {
  const keywordsArray: string[] = []
  FrontpageData.keywords.forEach((keyword) => keywordsArray.push(keyword.keyword))

  const [keywordsTypewriter] = useTypewriter({
    words: keywordsArray,
    typeSpeed: 100,
    loop: Infinity,
  })

  return (
    <div
      id="about"
      className="flex flex-col items-center h-screen tracking-wider justify-evenly snap-star scroll-smooth"
    >
      {/**
       * Hero with border effect
       */}
      <div className="">
        <div className="relative cursor-pointer group">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute -inset-0.5 rounded-lg blur bg-gradient-to-r from-blue-600 to-yellow-600"
          />
          <div className="relative p-3 text-6xl font-bold tracking-wider uppercase bg-black rounded-lg sm:text-9xl">
            {FrontpageData.hero}
          </div>
        </div>
      </div>
      {/**
       * Typewriter with keywords
       */}
      <div className="text-3xl uppercase justify-self-center sm:text-7xl">
        {keywordsTypewriter}
        <Cursor cursorColor="white" />
      </div>
      {/**
       * Scroll indicator arrow with bounce animation
       */}
      <div className="animate-bounce">
        <a href="/#projects">{arrowDown}</a>
      </div>
    </div>
  )
}
