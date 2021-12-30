import Image from 'next/image'
import { SRLWrapper } from 'simple-react-lightbox'
import { v4 as uuid_v4 } from 'uuid'

// Statically import the images
import Gallery_1 from '../../../public/gallery/1.jpg'
import Gallery_2 from '../../../public/gallery/2.jpg'
import Gallery_3 from '../../../public/gallery/3.jpg'
import Gallery_4 from '../../../public/gallery/4.jpg'
import Gallery_5 from '../../../public/gallery/5.jpg'
import Gallery_6 from '../../../public/gallery/6.jpg'
import Gallery_7 from '../../../public/gallery/7.jpg'
import Gallery_8 from '../../../public/gallery/8.png'
import Gallery_9 from '../../../public/gallery/9.jpg'
import Gallery_10 from '../../../public/gallery/10.jpg'


const images = [
  { source: Gallery_1 },
  { source: Gallery_2 },
  { source: Gallery_3 },
  { source: Gallery_4 },
  { source: Gallery_5 },
  { source: Gallery_6 },
  { source: Gallery_7 },
  { source: Gallery_8 },
  { source: Gallery_9 },
  { source: Gallery_10 },
]

function LightboxGrid() {
  return (
    <SRLWrapper>
      <div className="grid md:grid-cols-5 grid-cols-2 md:gap-0 gap-1">
        {images.map(({ source }) => {
          return (
            <div key={uuid_v4()} className="text-[0]">
              <a href={source}>
                <Image
                  src={source}
                  alt=""
                  width={1200}
                  height={800}
                  sizes="25vw"
                  objectFit="cover"
                  quality={20}
                  placeholder="blur"
                  priority
                />
              </a>
            </div>
          )
        })}
      </div>
    </SRLWrapper>
  )
}

export default LightboxGrid
