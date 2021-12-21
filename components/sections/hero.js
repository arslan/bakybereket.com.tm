import Carousel from "./hero/carousel";
import Background from "./hero/background";

import Line from "./hero/line";
import HeroTexts from "./hero/hero_texts";

function Hero() {
  return (
    <div className="relative">
      <Background />
      <div className="flex">
        <h1 className="flex-none w-96 font-black text-3xl my-auto py-48 text-dark-grey">
          CONSTRUCTION AND LANDSCAPING
        </h1>
        <div className="flex grow relative">
          <Carousel />
        </div>
      </div>

      <Line />
      <HeroTexts />
    </div>
  );
}

export default Hero;
