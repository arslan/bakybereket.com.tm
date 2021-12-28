import LightboxGrid from './sections/gallery/lightbox_grid'
import { useTranslation } from 'next-i18next'

const GallerySection = () => {
  const { t } = useTranslation('common')
  return (
    <div id='gallery' className="mb-20">
      <h1 className="text-dark-grey font-bold text-2xl my-auto mb-16 md:mt-12 text-center uppercase">
        {t('gallery.heading')}
      </h1>
      {/* className="grid grid-cols-5 gap-2 mx-auto pb-10" */}
      <LightboxGrid />
    </div>
  )
}

export default GallerySection
