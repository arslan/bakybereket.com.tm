import Image from "next/image";
import { LightBox } from "react-lightbox-pack";
import React from 'react';

const images = [
  { 
    source: "/gallery/1.png",
    id: 1,
  },
  { 
    source: "/gallery/2.png",
    id: 2,
  },
  { 
    source: "/gallery/3.png",
    id: 3,
  },
  { 
    source: "/gallery/4.png",
    id: 4,
  },
  { 
    source: "/gallery/5.png",
    id: 5,
  },
  { 
    source: "/gallery/6.png",
    id: 6,
  },
  { 
    source: "/gallery/1.png",
    id: 7,
  },
];

const GallerySection = () => {
  const [toggle, setToggle] =  React.useState(false);
	const [sIndex, setSIndex] =  React.useState(0);

  const  lightBoxHandler  = (state, sIndex) => {
		setToggle(state);
		setSIndex(sIndex);
	};
  
  return (
    <>
      <h2 className="text-black font-bold text-lg text-center pb-8">
        Наши работы
      </h2>
      
      <div className="container grid grid-cols-5 gap-2 mx-auto pb-10">
        {images.map(({source}, index) => {
          return (
            <div className="w-full rounded" key={source.id}>
              <Image className="" 
                src={source}
                alt=""
                width={400}
                height={200}
                onClick={() => {
                  lightBoxHandler(true, index)
                }}
              />
            </div>
          );
        }
        )}
          <LightBox
            state={toggle}
            event={lightBoxHandler}
            data={images}
            imageWidth="60vw"
            imageHeight="70vh"
            thumbnailHeight={50}
            thumbnailWidth={50}
            setImageIndex={setSIndex}
            imageIndex={sIndex}
          />
      </div>
    </>
  );
}

export default GallerySection;