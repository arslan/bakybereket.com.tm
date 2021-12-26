import { useTranslation } from "next-i18next";

function HeroTexts() {
  const { t } = useTranslation("common");

  return (
    <div className="flex hero-texts mb-14 mt-4 gap-14 mr-12">
      <div>
        <h2 className="w-72">{t('hero.hero_texts.first.heading')}</h2>
        <p>
          {t('hero.hero_texts.first.text')}
        </p>
      </div>
      <div>
        <h2 className="w-64">{t('hero.hero_texts.second.heading')}</h2>
        <p>
          {t('hero.hero_texts.second.text')}
        </p>
      </div>
      <div>
        <h2>{t('hero.hero_texts.third.heading')}</h2>
        <p>
          {t('hero.hero_texts.third.text')}
        </p>
      </div>
    </div>
  );
}

export default HeroTexts;
