import LightboxGrid from "./sections/gallery/lightbox_grid";
import { useTranslation } from "next-i18next";

const GallerySection = () => {
  const { t } = useTranslation("common")
  return (
    <div className="mb-20">
      <h2 className="text-black font-bold text-lg text-center pb-8">
{t('gallery.heading')}        
      </h2>
      {/* className="grid grid-cols-5 gap-2 mx-auto pb-10" */}
      <LightboxGrid />
    </div>
  );
};

export default GallerySection;
