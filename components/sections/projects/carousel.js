import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'

import DialogSwiper from './dialog_swiper'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { v4 as uuid_v4 } from 'uuid'

// import Swiper core and required modules






// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay])

function Carousel() {
  const { t } = useTranslation('common')

  const images = [
    {
      source: '/projects/1.1.png',
      title: 'projects.carousel.1st.title',
      description: 'projects.carousel.1st.text',
      location: {
        heading: 'projects.carousel.1st.location.heading',
        text: 'projects.carousel.1st.location.text',
      },
      client: {
        heading: 'projects.carousel.1st.client.heading',
        text: 'projects.carousel.1st.client.text',
      },
      dates: {
        heading: 'projects.carousel.1st.dates.heading',
        text: 'projects.carousel.1st.dates.text',
      },
      dialog_images: [
        { image: '/projects/1.1.png' },
        { image: '/projects/1.2.png' },
        { image: '/projects/1.3.png' },
      ],
    },
    {
      source: '/projects/2.1.jpg',
      title: 'projects.carousel.2nd.title',
      description: 'projects.carousel.2nd.text',
      location: {
        heading: 'projects.carousel.2nd.location.heading',
        text: 'projects.carousel.2nd.location.text',
      },
      client: {
        heading: 'projects.carousel.2nd.client.heading',
        text: 'projects.carousel.2nd.client.text',
      },
      dates: {
        heading: 'projects.carousel.2nd.dates.heading',
        text: 'projects.carousel.2nd.dates.text',
      },
      dialog_images: [
        { image: '/projects/2.1.jpg' },
        { image: '/projects/2.2.jpg' },
        { image: '/projects/2.3.jpg' },
        { image: '/projects/2.4.jpg' },
      ],
    },
    {
      source: '/projects/3.1.jpg',
      title: 'projects.carousel.3rd.title',
      description: 'projects.carousel.3rd.text',
      location: {
        heading: 'projects.carousel.3rd.location.heading',
        text: 'projects.carousel.3rd.location.text',
      },
      client: {
        heading: 'projects.carousel.3rd.client.heading',
        text: 'projects.carousel.3rd.client.text',
      },
      dates: {
        heading: 'projects.carousel.3rd.dates.heading',
        text: 'projects.carousel.3rd.dates.text',
      },
      dialog_images: [
        { image: '/projects/3.1.jpg' },
        { image: '/projects/3.2.jpg' },
        { image: '/projects/3.3.jpg' },
      ],
    },
    {
      source: '/projects/4.1.jpg',
      title: 'projects.carousel.4th.title',
      description: 'projects.carousel.4th.text',
      location: {
        heading: 'projects.carousel.4th.location.heading',
        text: 'projects.carousel.4th.location.text',
      },
      client: {
        heading: 'projects.carousel.4th.client.heading',
        text: 'projects.carousel.4th.client.text',
      },
      dates: {
        heading: 'projects.carousel.4th.dates.heading',
        text: 'projects.carousel.4th.dates.text',
      },
      dialog_images: [
        { image: '/projects/4.1.jpg' },
        { image: '/projects/4.2.jpg' },
        { image: '/projects/4.3.jpg' },
      ],
    },
    // {
    //   source: '/gallery/5.png',
    //   title: 'projects.carousel.5th.title',
    //   description: 'projects.carousel.5th.text',
    //   location: {
    //     heading: 'projects.carousel.4th.location.heading',
    //     text: 'projects.carousel.4th.location.text',
    //   },
    //   client: {
    //     heading: 'projects.carousel.4th.client.heading',
    //     text: 'projects.carousel.4th.client.text',
    //   },
    //   dates: {
    //     heading: 'projects.carousel.4th.dates.heading',
    //     text: 'projects.carousel.4th.dates.text',
    //   },
    //   dialog_images: [
    //     { image: '/gallery/13.png' },
    //     { image: '/gallery/14.png' },
    //     { image: '/gallery/15.png' },
    //   ],
    // },
  ]

  return (
    <>
      <div className="absolute bottom-1 z-10 right-0 hidden md:inline">
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
        {images.map(
          ({
            source,
            title,
            description,
            location,
            client,
            dates,
            dialog_images,
          }) => {
            let [isOpen, setIsOpen] = useState(false)

            function closeModal() {
              setIsOpen(false)
            }

            function openModal() {
              setIsOpen(true)
            }

            return (
              <SwiperSlide as="button" key={uuid_v4()} className="w-4/6">
                <button as="div" onClick={openModal} className="text-left">
                  <h1 className="z-10 ml-4 font-bold my-2 h-12 md:h-6">{t(title)}</h1>
                  <div className="h-[22rem] relative flex">
                    <div className="bg-light-blue w-1"></div>
                    <div className="w-3"></div>
                    <div className="h-full w-full relative">
                      <Image src={source} layout="fill" objectFit="cover" />
                    </div>
                  </div>
                  <p className="pt-4 ml-4 mb-16">{t(description)}</p>
                </button>

                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                  >
                    <div className="min-h-screen px-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Dialog.Overlay className="fixed inset-0 bg-black/80" />
                      </Transition.Child>

                      {/* This element is to trick the browser into centering the modal contents. */}
                      <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                      >
                        &#8203;
                      </span>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <div className="inline-block md:w-1/2 w-10/12 p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl ">
                          <Dialog.Title
                            as="h1"
                            className="text-lg font-bold leading-6 text-gray-900 pb-2"
                          >
                            {t(title)}
                          </Dialog.Title>
                          <DialogSwiper data={dialog_images} />
                          <div className="flex pt-4">
                            <div>
                              <p className="text-md font-semibold text-gray-500">
                                {t(description)}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col md:pt-4 py-4 gap-4">
                            <div>
                              <h1 className="font-semibold">
                                {t(location.heading)}
                              </h1>
                              <p className="text-sm text-gray-500">
                                {t(location.text)}
                              </p>
                            </div>
                            <div className="md:ml-8">
                              <h1 className="font-semibold">
                                {t(client.heading)}
                              </h1>
                              <p className="text-sm text-gray-500">
                                {t(client.text)}
                              </p>
                            </div>
                          </div>
                          <div className="flex pt-4">
                            <div>
                              <h1 className="font-semibold">
                                {t(dates.heading)}
                              </h1>
                              <p className="text-sm text-gray-500">
                                {t(dates.text)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Transition.Child>
                    </div>
                  </Dialog>
                </Transition>
              </SwiperSlide>
            )
          }
        )}
      </Swiper>
    </>
  )
}

export default Carousel
