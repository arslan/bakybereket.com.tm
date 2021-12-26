import Image from 'next/image'
import LogoSVG from '../../../public/bb_logo.svg'

function Logo() {
  return <Image src={LogoSVG} width={250} />
}

export default Logo
