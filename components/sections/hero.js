import Background from './hero/background'
import Carousel from './hero/carousel'
import { ChevronRightIcon } from '@heroicons/react/solid'
import HeroTexts from './hero/hero_texts'
import Image from 'next/image'
import Line from './hero/line'
import { useTranslation } from 'next-i18next'

function Hero() {
  const { t } = useTranslation('common')

  return (
    <div className="relative">
      <Background />
      <div className="flex">
        <h1 className="flex-none w-96 font-black text-3xl my-auto py-48 text-dark-grey uppercase mr-5">
          {t('hero.heading')}
        </h1>
        <div className="flex grow relative">
          {/* <Carousel /> */}
          <Image className='object-scale-down h-48 w-[24rem]'
            src="/mainSliderImg1.jpg"
            alt="Picture of the author"
            width={550}
            height={200}
             />
              
            
        </div>
      </div>

      <Line />
      <HeroTexts />
      <div className="absolute bottom-36 -right-14 rotate-90 hidden lg:inline-flex text-sm">
        <h3 className="font-semibold text-dark-grey/60">{t('hero.scroll')}</h3>
        <ChevronRightIcon className="my-auto h-5 w-5 text-dark-grey/60" />
      </div>
    </div>
  )
}

export default Hero
