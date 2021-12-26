import Carousel from './projects/carousel'
import Background from './projects/background'
import { useTranslation } from 'next-i18next'
import MyDialog from './projects/dialog'
import MyModal from './projects/headless_dialog'

function Projects() {
  const { t } = useTranslation('common')
  return (
    <div className="relative">
      <Background />

      <div className="flex flex-row flex-wrap">
        <div className="w-96 mr-16">
          <h1 className="font-bold text-2xl my-auto pt-12 pb-6 mt-12 pr-20 text-dark-grey uppercase">
            {t('projects.heading')}
          </h1>
          <p>{t('projects.text')} </p>
        </div>
        <div className="w-96 grow">
          <div className="flex relative">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
