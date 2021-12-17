import Image from 'next/image'
import iconInsta from '../public/button/insta.svg'
import iconFacebook from '../public/button/facebook.svg'
import iconLinked from '../public/button/linked.svg'
import Link from 'next/link'

const Section_4 = () => {
  return (
    <div id="section4" className="px-60 bg-with">
      <div
        className="bg-local bg-no-repeat bg-contain bg-center px-14"
        style={{ 'background-image': "url('/bgSection4.svg')" }}
      >
        <div>
          <div>Наши контакты</div>
          <div>
            ИП «Бакы Берекет» Ашхабад, Копетдагский район Анкара (1946 г.) улица
            дом № 23
          </div>
          <div>Tel: +99312964862 Fax: +99312964861</div>
          <div>E.mail: bakybereket@gmail.com</div>
          <div className="flex items-center justify-start text-with space-x-5 mt-6">
            <a href="https://">
              <button className="flex items-center justify-between bg-very_light_blue rounded-none border-none px-3 py-2 min-w-min min-h-min text-xs">
                <Image src={iconInsta} />
                <div className="pl-3">Instagram</div>
              </button>
            </a>
            <a href="https://">
              <button className="flex items-center justify-between bg-very_light_blue rounded-none px-3 py-2 min-w-min min-h-min text-xs">
                <Image src={iconLinked} />
                <div className="pl-3">LinkedIn</div>
              </button>
            </a>
            <a href="https://">
              <button className="flex items-center justify-between bg-very_light_blue rounded-none px-3 py-2 min-w-min min-h-min text-xs">
                <Image src={iconFacebook} />
                <div className="pl-3">Facebook</div>
              </button>
            </a>
          </div>
        </div>
        <div>
          <div>свяжитесь с нами</div>
          <div>Оставьте ваши данные чтобы мы могли с вами связаться</div>
        </div>
      </div>
      <div className="flex items-center px-14 bottom-40 mb-32 mt-7">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573.908712069224!2d58.39614365825083!3d37.91132999493373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf4ad054adaae0af2!2zMzfCsDU0JzQwLjgiTiA1OMKwMjMnNTAuMSJF!5e0!3m2!1sru!2sru!4v1639740119484!5m2!1sru!2sru"
          width="1330"
          height="545"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default Section_4
