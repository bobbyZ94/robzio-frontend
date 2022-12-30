'use client'

import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion, Variants } from 'framer-motion'
import { FrontpageType } from '../typings.d'

const parentVariant: Variants = {
  animate: { transition: { staggerChildren: 1 } },
}

const childrenVariant: Variants = {
  initial: { opacity: 0, x: -250 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'linear' } },
}

export default function About({ Frontpage }: { Frontpage: FrontpageType }) {
  const keywordsArray: string[] = []
  Frontpage.keywords.forEach((keyword) => keywordsArray.push(keyword.keyword))

  const [keywordsTypewriter] = useTypewriter({
    words: keywordsArray,
    typeSpeed: 100,
    loop: Infinity,
  })

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/**
       * Hero with border effect
       */}
      <div>
        <div className="relative mt-20 cursor-pointer group">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute -inset-0.5 rounded-lg blur bg-gradient-to-r from-blue-600 to-yellow-600"
          />
          <div className="relative p-3 text-6xl font-bold tracking-wider uppercase bg-black rounded-lg sm:text-9xl">
            {Frontpage.hero}
          </div>
        </div>
      </div>
      <div className="mt-20 text-3xl uppercase sm:text-7xl">
        {keywordsTypewriter}
        <Cursor cursorColor="white" />
      </div>
    </div>
  )
}
