import { useTranslation } from 'next-i18next'

function HeroTexts() {
  const { t } = useTranslation('common')

  return (
    <div className="flex hero-texts mb-14 mt-4 gap-14 mr-12">
      <div>
        <h2 className="relative w-[17rem]">
          {t('hero.hero_texts.first.heading')}
          <div className="line absolute w-0.5 h-[2.5rem] -top-[1.5rem] bg-light-blue -right-8">
            <div className="circle -left-[0.45rem] top-[1.8rem]">
              <div className="inner-circle"></div>
            </div>
          </div>
        </h2>
        <p>{t('hero.hero_texts.first.text')}</p>
      </div>
      <div>
        <h2 className="relative w-fit">
          {t('hero.hero_texts.second.heading')}
          <div className="line absolute w-0.5 h-[2.5rem] -top-[1.5rem] bg-light-blue -right-8">
            <div className="circle -left-[0.45rem] top-[1.8rem]">
              <div className="inner-circle"></div>
            </div>
          </div>
        </h2>
        <p>{t('hero.hero_texts.second.text')}</p>
      </div>
      <div>
        <h2 className="relative w-fit">
          {t('hero.hero_texts.third.heading')}
          <div className="line absolute h-0.5 w-[36.8rem] bg-light-blue -right-8 -top-[1.52rem]"></div>
          <div className="line absolute w-0.5 h-[2.5rem] -top-[1.5rem] bg-light-blue -right-8">
            <div className="circle -left-[0.45rem] top-[1.8rem]">
              <div className="inner-circle"></div>
            </div>
          </div>
        </h2>

        <p>{t('hero.hero_texts.third.text')}</p>
      </div>
    </div>
  )
}

export default HeroTexts
