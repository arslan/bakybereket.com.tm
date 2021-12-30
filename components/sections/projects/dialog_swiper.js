import { Swiper, SwiperSlide } from 'swiper/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { v4 as uuid_v4 } from 'uuid'
import Image from 'next/image'

import { useState } from 'react'

import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper'
// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay])

function DialogSwiper(props) {
  const images = props.data
  const dialog_images = [
    { source: '/gallery/1.png' },
    { source: '/gallery/2.png' },
    { source: '/gallery/3.png' },
    { source: '/gallery/4.png' },
    { source: '/gallery/5.png' },
    { source: '/gallery/6.png' },
    { source: '/gallery/7.png' },
  ]
  const [swiper, setSwiper] = useState(null)

  const prevSlide = () => {
    swiper.slidePrev()
  }

  const nextSlide = () => {
    swiper.slideNext()
  }
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        autoplay={{ delay: 4000 }}
        pagination={{
          clickable: true,
        }}
        onSwiper={(s) => {
          setSwiper(s)
        }}
      >
        <div className="absolute bottom-1 z-50 right-1 hidden md:inline">
          <button
            as="div"
            className="button-dialog-prev btn"
            onClick={prevSlide}
          >
            <ChevronLeftIcon className="h-5 w-5 text-white" />
          </button>
          <button
            as="div"
            className="button-dialog-next btn"
            onClick={nextSlide}
          >
            <ChevronRightIcon className="h-5 w-5 text-white" />
          </button>
        </div>
        {images.map(({ image }) => {
          return (
            <SwiperSlide as="button" key={uuid_v4()} className="">
              <div className="h-[22rem] w-full relative">
                <Image src={image} layout="fill" objectFit="cover" placeholder="blur" blurDataURL={image}/>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default DialogSwiper
