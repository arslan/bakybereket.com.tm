import Image from "next/image";

const gallerySection = () => {
  return (
    <>
    <div>
      Наши работы
    </div>
    <div>
      <Image className="" 
        src="about_us.png"
        alt="Picture of the author"
        width={500}
        height={500}
        />
        </div>
        
        </>

  );
}

export default gallerySection;