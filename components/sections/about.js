import Image from 'next/image'
import group1 from '../../public/about/Group1.svg'
import group2 from '../../public/about/Group2.svg'
import group3 from '../../public/about/Group3.svg'
import unsp from '../../public/about/unsplash.jpg'
import underline1 from '../../public/about/underline.svg'

const About = () => {
  return (
    <div className="max-w-5xl">
      <div className="flex">
        <div className="flex flex-col">
          <h2>О нас</h2>
          <Image src={underline1} />
          <p>
            Индивидуальное предприятие «Бакы Берекет» было основано в 2014 году
            и является одной из ведущих компаний в Туркменистане,
            специализирующейся на строительстве жилищных комплексов,
            коммерческой недвижимости, нежилых помещений, а также проектировании
            зданий.
          </p>
        </div>
        <Image src={unsp} />
      </div>
      <div className="flex flex-col items-center">
        <h2>Наше преимущество</h2>
        <div className="flex items-center text-center">
          <div className="">
            <Image src={group1} />
            <p>Безопасно</p>
          </div>
          <div>
            <Image src={group2} />
            <p>Надёжно</p>
          </div>
          <div>
            <Image src={group3} />
            <p>Современно</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
