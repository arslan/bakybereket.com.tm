import Background from './hero/background'
import Carousel from './hero/carousel'
import { ChevronRightIcon } from '@heroicons/react/solid'
import HeroTexts from './hero/hero_texts'
import Image from 'next/image'
import Line from './hero/line'
import { useTranslation } from 'next-i18next'

// Statically import images
import HeroImage from '../../public/mainSliderImg1.jpg'

function Hero() {
  const { t } = useTranslation('common')

  return (
    <div className="relative">
      <Background />
      <div className="flex lg:flex-row flex-col">
        <h1 className="flex-none md:w-96 font-black text-3xl my-auto py-12 md:py-48 text-dark-grey uppercase mr-5">
          {t('hero.heading')}
        </h1>
        <div className="flex grow relative md:mt-8 h-96">
          {/* <Carousel /> */}
          <Image
            className="md:object-scale-down object-cover h-48 w-[24rem]"
            src={HeroImage}
            alt="Rysgal Bank"
            width={550}
            height={200}
            quality={20}
            placeholder="blur"
          />
        </div>
      </div>

      <Line />
      <HeroTexts />
      <div className="absolute bottom-36 -right-14 rotate-90 hidden md:inline-flex text-sm">
        <h3 className="font-semibold text-dark-grey/60">{t('hero.scroll')}</h3>
        <ChevronRightIcon className="my-auto h-5 w-5 text-dark-grey/60" />
      </div>
    </div>
  )
}

export default Hero
