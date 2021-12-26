import { Swiper, SwiperSlide } from 'swiper/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useTranslation } from 'next-i18next'

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper'
import Image from 'next/image'

import { v4 as uuid_v4 } from 'uuid'
import MyModal from './headless_dialog'

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay])

function Carousel() {
  const { t } = useTranslation('common')

  const images = [
    {
      source: '/gallery/1.png',
      title: 'projects.carousel.1st.title',
      description: 'projects.carousel.1st.text',
      location: {
        heading: '',
        text: '',
      },
      client: {
        heading: '',
        text: '',
      },
      dates: {
        heading: '',
        text: '',
      },
    },
    {
      source: '/gallery/2.png',
      title: 'projects.carousel.2nd.title',
      description: 'projects.carousel.2nd.text',
      location: {
        heading: '',
        text: '',
      },
      client: {
        heading: '',
        text: '',
      },
      dates: {
        heading: '',
        text: '',
      },
    },
    {
      source: '/gallery/3.png',
      title: 'projects.carousel.3rd.title',
      description: 'projects.carousel.3rd.text',
      location: {
        heading: '',
        text: '',
      },
      client: {
        heading: '',
        text: '',
      },
      dates: {
        heading: '',
        text: '',
      },
    },
    {
      source: '/gallery/4.png',
      title: 'projects.carousel.4th.title',
      description: 'projects.carousel.4th.text',
      location: {
        heading: '',
        text: '',
      },
      client: {
        heading: '',
        text: '',
      },
      dates: {
        heading: '',
        text: '',
      },
    },
    {
      source: '/gallery/5.png',
      title: 'projects.carousel.5th.title',
      description: 'projects.carousel.5th.text',
      location: {
        heading: '',
        text: '',
      },
      client: {
        heading: '',
        text: '',
      },
      dates: {
        heading: '',
        text: '',
      },
    },
  ]
  return (
    <>
      <div className="absolute bottom-1 z-10 right-0">
        <button as="div" className="prev-button-hero btn">
          <ChevronLeftIcon className="h-5 w-5 text-white" />
        </button>
        <button as="div" className="next-button-hero btn">
          <ChevronRightIcon className="h-5 w-5 text-white" />
        </button>
      </div>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        autoplay={{ delay: 4000 }}
        navigation={{
          nextEl: '.next-button-hero',
          prevEl: '.prev-button-hero',
        }}
        pagination={{
          clickable: true,
        }}
        className=""
      >
        {images.map(({ source, title, description }) => {
          return (
            <SwiperSlide as="button" key={uuid_v4()} className="w-4/6">
              <h1 className="z-10 ml-4 font-bold my-2">{t(title)}</h1>
              <div className="h-[22rem] relative flex">
                <div className="bg-light-blue w-1"></div>
                <div className="w-3"></div>
                <div className="h-full w-full relative">
                  <Image src={source} layout="fill" objectFit="cover" />
                </div>
              </div>
              <p className="pt-4 ml-4 mb-16">{t(description)}</p>
              <MyModal />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default Carousel
