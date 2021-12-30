import Image from 'next/image'
import group1 from '../../public/about/Group1.svg'
import group2 from '../../public/about/Group2.svg'
import group3 from '../../public/about/Group3.svg'
import unsp from '../../public/about/unsplash.jpg'
import underline1 from '../../public/about/underline.svg'
import { useTranslation } from 'next-i18next'

const About = () => {
  const { t } = useTranslation('common')

  return (
    <div id="about" className="bg-white text-dark-grey mt-11">
      <div className="flex flex-col md:flex-row items-center justify-between h-80">
        <div className="flex flex-col pr-6 md:mb-0 mb-6">
          <div className="">
            <h1 className="text-dark-grey font-bold text-2xl my-auto md:pt-12 pb-2 md:mt-12 pr-20 uppercase">
              {t('about.heading_about')}
            </h1>
            <div className="w-4/6 h-0.5 bg-light-blue mb-4"></div>
          </div>
          <p className="text-left h-40 max-w-3xl">{t('about.text')}</p>
        </div>
        <div className="md:pl-6 w-full mx-auto md:my-0 mt-12 relative">
          <Image src={unsp} />
        </div>
      </div>
      <div className="flex flex-col items-center h-full md:pt-12 pt-48">
        <h1 className="text-dark-grey font-bold text-2xl my-auto pb-6 md:mt-12 uppercase">{t('about.heading_advantages')}</h1>
        <div className="flex md:flex-row gap-24 flex-col items-center text-center pt-8 pb-20">
          <div className="">
            <Image src={group1} width={80} height={80} placeholder="blur" blurDataURL={group1}/>
            <p>{t('about.advantages.1st')}</p>
          </div>
          <div className="">
            <Image src={group2} width={80} height={80} />
            <p>{t('about.advantages.2nd')}</p>
          </div>
          <div>
            <Image src={group3} width={80} height={80} />
            <p>{t('about.advantages.3rd')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
