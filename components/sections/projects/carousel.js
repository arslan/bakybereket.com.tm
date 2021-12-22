import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import Image from "next/image";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const images = [
  { source: "/gallery/1.png", title: "", description: "", address: "", client: "", project_duration: "" },
  { source: "/gallery/2.png", title: "", description: "", address: "", client: "", project_duration: "" },
  { source: "/gallery/3.png", title: "", description: "", address: "", client: "", project_duration: "" },
  { source: "/gallery/4.png", title: "", description: "", address: "", client: "", project_duration: "" },
  { source: "/gallery/5.png", title: "", description: "", address: "", client: "", project_duration: "" },
  { source: "/gallery/6.png", title: "", description: "", address: "", client: "", project_duration: "" },
  { source: "/gallery/1.png", title: "", description: "", address: "", client: "", project_duration: "" },
];

function Carousel() {
  return (
    <>
      <div className="absolute bottom-2 z-10 right-2">
        <button as="div" className="prev-button-hero btn">
          <ChevronLeftIcon className="h-5 w-5 text-white" />
        </button>
        <button as="div" className="next-button-hero btn">
          <ChevronRightIcon className="h-5 w-5 text-white" />
        </button>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        autoplay={{ delay: 4000 }}
        navigation={{
          nextEl: ".next-button-hero",
          prevEl: ".prev-button-hero",
        }}
        pagination={{
          clickable: true,
        }}
        className=""
      >
        {images.map(({ source }) => {
          return (
            <SwiperSlide key={source} className="w-4/6">
              <h1 className="z-10 ml-4 my-2">Test</h1>
              <div className="h-[22rem] relative flex">
                <div className="bg-light-blue w-1"></div>
                <div className="w-3"></div>
                <div className="h-full w-full relative">
                  <Image src={source} layout="fill" objectFit="cover" />
                </div>
              </div>
              <p className="pt-4 ml-4 mb-16">
                Aliqua tempor commodo cillum eu nulla ea. Exercitation
                consectetur nostrud occaecat velit irure consequat ut dolor et
                aliquip. Laboris qui aute fugiat aute aliqua ex Lorem laboris.
                Lorem pariatur dolor ad nulla consequat.
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Carousel;
