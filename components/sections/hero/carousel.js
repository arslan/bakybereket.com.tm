import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";


// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import Image from "next/image";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const images = [
  { source: "/gallery/1.png" },
  { source: "/gallery/2.png" },
  { source: "/gallery/3.png" },
  { source: "/gallery/4.png" },
  { source: "/gallery/5.png" },
  { source: "/gallery/6.png" },
  { source: "/gallery/1.png" },
];

function Carousel() {
  return (
    <>
      <div className="absolute bottom-20 z-10 -left-36">
        <button as="div" className="prev-button-hero btn">
          <ChevronLeftIcon className="h-5 w-5 text-white" />
        </button>
        <button as="div" className="next-button-hero btn">
          <ChevronRightIcon className="h-5 w-5 text-white" />
        </button>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={6}
        autoplay={{ delay: 4000 }}
        navigation={{
          nextEl: ".next-button-hero",
          prevEl: ".prev-button-hero",
        }}
        pagination={{
          clickable: true,
        }}
        className="my-12 w-full"
      >
        {images.map(({ source }) => {
          return (
            <SwiperSlide key={source} className="w-5/6">
              <Image src={source} layout="fill" objectFit="cover"></Image>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="w-12 bg-light-blue/90 bg-clip-content h-full right-0 absolute z-10 py-12 pointer-events-none"></div>
    </>
  );
}

export default Carousel;
