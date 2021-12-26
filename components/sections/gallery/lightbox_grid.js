import Image from 'next/image'
import { SRLWrapper } from 'simple-react-lightbox'
import { v4 as uuid_v4 } from 'uuid'

const images = [
  {
    source: '/gallery/1.png',
  },
  {
    source: '/gallery/2.png',
  },
  {
    source: '/gallery/3.png',
  },
  {
    source: '/gallery/4.png',
  },
  {
    source: '/gallery/5.png',
  },
  {
    source: '/gallery/6.png',
  },
  {
    source: '/gallery/7.png',
  },
  {
    source: '/gallery/8.png',
  },
  {
    source: '/gallery/9.png',
  },
  {
    source: '/gallery/10.png',
  },
  {
    source: '/gallery/11.png',
  },
  {
    source: '/gallery/12.png',
  },
  {
    source: '/gallery/13.png',
  },
  {
    source: '/gallery/14.png',
  },
  {
    source: '/gallery/15.png',
  },
  {
    source: '/gallery/16.png',
  },
  {
    source: '/gallery/17.png',
  },
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
