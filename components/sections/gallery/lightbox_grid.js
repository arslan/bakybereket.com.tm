import Image from 'next/image'
import { SRLWrapper } from 'simple-react-lightbox'
import { v4 as uuid_v4 } from 'uuid'

const images = [
  {source: '/gallery/1.jpg',},
  {source: '/gallery/2.jpg',},
  {source: '/gallery/3.jpg',},
  {source: '/gallery/4.jpg',},
  {source: '/gallery/5.jpg',},
  {source: '/gallery/6.jpg',},
  {source: '/gallery/7.jpg',},
  {source: '/gallery/8.png',},
  {source: '/gallery/9.jpg',},
  {source: '/gallery/10.jpg',},
  
]

function LightboxGrid() {
  return (
    <SRLWrapper>
      <div className="grid grid-cols-5 gap-0">
        {images.map(({ source }) => {
          return (
            <div key={uuid_v4()} className="text-[0]">
              <a href={source}>
                <Image
                  src={source}
                  alt=""
                  width={1200}
                  height={800}
                  objectFit="cover"
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
