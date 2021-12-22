import Carousel from "./hero/carousel";
import Background from "./hero/background";
import { ChevronRightIcon } from "@heroicons/react/solid";

import Line from "./hero/line";
import HeroTexts from "./hero/hero_texts";

function Hero() {
  return (
    <div className="relative">
      <Background />
      <div className="flex">
        <h1 className="flex-none w-96 font-black text-3xl my-auto py-48 text-dark-grey">
          СТРОИТЕЛЬСТВО И ОБУСТРОЙСТВО
        </h1>
        <div className="flex grow relative">
          <Carousel />
        </div>
      </div>

      <Line />
      <HeroTexts />
      <div className="absolute bottom-36 -right-14 rotate-90 hidden lg:inline-flex text-sm">
        <h3 className="font-semibold text-dark-grey/60">ПРОКРУТКА ВНИЗ</h3>
        <ChevronRightIcon className="my-auto h-5 w-5 text-dark-grey/60" />
      </div>
    </div>
  );
}

export default Hero;
