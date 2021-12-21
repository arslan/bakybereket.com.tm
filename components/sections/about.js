import Image from 'next/image'
import group1 from '../../public/about/Group1.svg'
import group2 from '../../public/about/Group2.svg'
import group3 from '../../public/about/Group3.svg'
import unsp from '../../public/about/unsplash.jpg'
import underline1 from '../../public/about/underline.svg'

const About = () => {
  return (
    <div id="about" className="bg-white text-dark-grey mt-11">
      <div className="flex items-center justify-between h-80 ">
        <div className="flex flex-col pr-6">
          <div className="">
            <h2 className="text-dark-grey -mb-14">О нас</h2>
            <Image className="" src={underline1} />
          </div>
          <p className="text-left h-40 max-w-3xl">
            Индивидуальное предприятие «Бакы Берекет» было основано в 2014 году
            и является одной из ведущих компаний в Туркменистане,
            специализирующейся на строительстве жилищных комплексов,
            коммерческой недвижимости, нежилых помещений, а также проектировании
            зданий.
          </p>
        </div>
        <div className="pl-6 w-full">
          <Image src={unsp} />
        </div>
      </div>
      <div className="flex flex-col items-center h-72 pt-16">
        <h2 className="text-dark-grey">Наше преимущество</h2>
        <div className="flex flex-wrap items-center text-center pt-8 pb-20">
          <div className="">
            <Image src={group1} width={80} height={80} />
            <p>Безопасно</p>
          </div>
          <div className="px-24">
            <Image src={group2} width={80} height={80} />
            <p>Надёжно</p>
          </div>
          <div>
            <Image src={group3} width={80} height={80} />
            <p>Современно</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
