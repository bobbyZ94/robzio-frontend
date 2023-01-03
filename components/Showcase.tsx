'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Carousel from 'framer-motion-carousel'
import serialize from '../utils/serialize'
import { ShowcaseDataType } from '../typings.d'

export default function Showcase({ ShowcaseData }: { ShowcaseData: ShowcaseDataType }) {
  return (
    <div id="projects" className="flex flex-col items-center justify-center h-screen gap-10 snap-center">
      <div className="uppercase">
        <motion.div
          className="text-3xl"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: -25, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 1, type: 'tween' }}
        >
          {ShowcaseData.title}
        </motion.div>
        <motion.div
          className="text-3xl"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 25, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 1, type: 'tween' }}
        >
          {ShowcaseData.subtitle}
        </motion.div>
      </div>
      <div className="max-w-[30rem] max-h-[30rem] mx-5 relative">
        <Carousel loop autoPlay interval={5000}>
          {ShowcaseData.images.map((image) => (
            <Image
              draggable="false"
              src={image.image.url}
              alt={image.image.titel}
              width={1000}
              height={1000}
              className=""
            />
          ))}
        </Carousel>
      </div>
      <div className="px-5 prose-sm lg:prose-xl prose-ul:list-disc prose-ol:list-decimal hover:prose-a:underline">
        {serialize(ShowcaseData.text)}
      </div>
    </div>
  )
}
