import Image from 'next/image'
import iconInsta from '../../public/button/insta.svg'
import iconFacebook from '../../public/button/facebook.svg'
import iconLinked from '../../public/button/linked.svg'
import Form from './contacts/form'
import Link from 'next/link'

const ContactsSection = () => {
  return (
    <div id="contacts" className="max-w-5xl mx-auto">
      <div
        className="flex bg-local bg-no-repeat bg-contain bg-center px-14"
        style={{ backgroundImage: "url('/bgSection4.svg')" }}
      >
        <div className="">
          <h2>Наши контакты</h2>
          <p>
            ИП «Бакы Берекет» Ашхабад, Копетдагский район Анкара (1946 г.) улица
            дом № 23
          </p>
          <p>Tel: +99312964862</p>
          <p>Fax: +99312964861</p>
          <p>E.mail: bakybereket@gmail.com</p>
          <div className="flex items-center justify-start text-white space-x-5 mt-6">
            <a href="https://">
              <button className="flex items-center justify-between bg-light-blue rounded-none border-none px-3 py-2 min-w-min min-h-min text-xs">
                <Image src={iconInsta} />
                <p className="pl-3">instagram</p>
              </button>
            </a>
            <a href="https://">
              <button className="flex items-center justify-between bg-light-blue rounded-none px-3 py-2 min-w-min min-h-min text-xs">
                <Image src={iconLinked} />
                <p className="pl-3">linkedIn</p>
              </button>
            </a>
            <a href="https://">
              <button className="flex items-center justify-between bg-light-blue rounded-none px-3 py-2 min-w-min min-h-min text-xs">
                <Image src={iconFacebook} />
                <p className="pl-3">facebook</p>
              </button>
            </a>
          </div>
          <p>Наше место положение</p>
        </div>
        <div className="">
          <h2>Cвяжитесь с нами</h2>
          <p>Оставьте ваши данные чтобы мы могли с вами связаться</p>
          <div>
            <Form />
          </div>
        </div>
      </div>
      <div className="flex items-center px-14 bottom-40 mb-32 mt-7">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573.908712069224!2d58.39614365825083!3d37.91132999493373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf4ad054adaae0af2!2zMzfCsDU0JzQwLjgiTiA1OMKwMjMnNTAuMSJF!5e0!3m2!1sru!2sru!4v1639740119484!5m2!1sru!2sru"
          width="1330"
          height="545"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default ContactsSection
