import LightboxGrid from "./sections/gallery/lightbox_grid";

const GallerySection = () => {
  return (
    <div className="mb-20">
      <h2 className="text-black font-bold text-lg text-center pb-8">
        Наши работы
      </h2>
      {/* className="grid grid-cols-5 gap-2 mx-auto pb-10" */}
      <LightboxGrid />
    </div>
  );
};

export default GallerySection;
