'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import serialize from '../utils/serialize'
import { ShowcaseDataType } from '../typings.d'

export default function Showcase({ ShowcaseData }: { ShowcaseData: ShowcaseDataType }) {
  return (
    <div id="projects" className="flex flex-col items-center justify-center h-screen gap-10 snap-center">
      <div>
        <motion.div
          className="text-3xl"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: -25, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          transition={{ duration: 1, type: 'tween' }}
        >
          {ShowcaseData.title}
        </motion.div>
        <motion.div
          className="text-2xl"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 25, opacity: 1 }}
          exit={{ x: 200, opacity: 0 }}
          transition={{ duration: 1, type: 'tween' }}
        >
          {ShowcaseData.subtitle}
        </motion.div>
      </div>

      <div>
        <motion.div
          className="max-w-3xl ml-5 mr-10 border-2 border-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, type: 'tween', delay: 0.5 }}
        >
          <Image
            height={ShowcaseData.image1.height}
            width={ShowcaseData.image1.width}
            src={ShowcaseData.image1.url}
            alt={ShowcaseData.image1.titel}
            loading="lazy"
          />
        </motion.div>
        <motion.div
          className="ml-10 mr-5 -translate-y-10 border-2 border-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, type: 'tween', delay: 0.5 }}
        >
          <Image
            height={ShowcaseData.image2.height}
            width={ShowcaseData.image2.width}
            src={ShowcaseData.image2.url}
            alt={ShowcaseData.image2.titel}
            loading="lazy"
          />
        </motion.div>
        <div className="px-5 prose-sm lg:prose-xl prose-ul:list-disc prose-ol:list-decimal hover:prose-a:underline">
          {serialize(ShowcaseData.text)}
        </div>
      </div>
    </div>
  )
}
