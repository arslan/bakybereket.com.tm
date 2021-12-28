import Image from 'next/image'
import LogoSVG from '../../../public/bb_logo.svg'

function Logo() {
  return (
    <div className="md:w-[15.6rem] ml-5 w-40 h-10 relative">
      <Image src={LogoSVG} layout="fill" />
    </div>
  )
}

export default Logo
