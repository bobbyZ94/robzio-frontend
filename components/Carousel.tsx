import Slider from 'react-slick'
import Link from 'next/link'
import Image from 'next/image'
import { ShowcaseDataType } from '../typings.d'

const Carousel = ({ images }: { images: ShowcaseDataType['images'] }) => (
  <div className="z-60 w-[18rem] md:w-[35rem] border border-gray-300 rounded shadow-md md:mb-32 mb-20">
    <Slider {...sliderSettings}>
      {images.map((image, index) => (
        <Link key={index} href={image.link ? image.link : ''}>
          <img
            src={image.image.url}
            alt={image.image.titel}
            width={1000}
            height={1000}
            className="h-[15rem] md:h-[25rem] object-cover w-full"
          />
          <div className="p-6">
            <h5 className="mb-3 text-xl font-semibold md:mb-5">{image.title}</h5>
          </div>
        </Link>
      ))}
    </Slider>
  </div>
)

export default Carousel
