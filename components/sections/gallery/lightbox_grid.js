import Image from "next/image";
import { SRLWrapper } from "simple-react-lightbox";

const images = [
  {
    source: "/gallery/1.png",
  },
  {
    source: "/gallery/2.png",
  },
  {
    source: "/gallery/3.png",
  },
  {
    source: "/gallery/4.png",
  },
  {
    source: "/gallery/5.png",
  },
  {
    source: "/gallery/6.png",
  },
  {
    source: "/gallery/7.png",
  },
  {
    source: "/gallery/8.png",
  },
  {
    source: "/gallery/9.png",
  },
  {
    source: "/gallery/10.png",
  },
  {
    source: "/gallery/11.png",
  },
  {
    source: "/gallery/12.png",
  },
  {
    source: "/gallery/13.png",
  },
  {
    source: "/gallery/14.png",
  },
  {
    source: "/gallery/15.png",
  },
  {
    source: "/gallery/16.png",
  },
  {
    source: "/gallery/17.png",
  },
];

function LightboxGrid() {
  return (
    <SRLWrapper>
      <div className="grid grid-cols-5 gap-0">
        {images.map(({ source }) => {
          return (
            <a href={source} key={source.id} className="text-[0]">
              <Image
                src={source}
                alt=""
                width={300}
                height={180}
                objectFit="cover"
              />
            </a>
          );
        })}
      </div>
    </SRLWrapper>
  );
}

export default LightboxGrid;
