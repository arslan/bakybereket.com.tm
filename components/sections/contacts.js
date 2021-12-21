import Image from 'next/image'
import iconInsta from '../../public/button/insta.svg'
import iconFacebook from '../../public/button/facebook.svg'
import iconLinked from '../../public/button/linked.svg'
import Form from './contacts/form'
import underline1 from '../../public/contactUnderline/underline1.svg'
import underline2 from '../../public/contactUnderline/underline2.svg'
import Link from 'next/link'


//
//absolute -z-10 w-2/4 h-full bg-clip-content bg-contain bg-no-repeat bg-center ml
//mx-60 mb-32 mt-40
const ContactsSection = () => {
  return (

    <div id="contacts" className="  text-dark-grey ">
      <div
        className="flex max-w-5xl m-auto items-center justify-between min-h-min bg-local bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: "url('/bgSection4.svg')" }}
      >
        <div className="flex flex-col ">
          <h2 className="not-italic font-semibold text-5xl pb-16 min-h-min">
            Наши контакты
          </h2>
          <p className="not-italic font-normal text-2xl max-w-[512px] h-20  min-h-min">
            ИП «Бакы Берекет» Ашхабад, Копетдагский район Анкара (1946 г.) улица
            дом № 23
            <Image src={underline1} />
          </p>
          <div className="pt-14 not-italic font-normal text-2xl">
            <p>Tel: +99312964862</p>
            <p>Fax: +99312964861</p>
            <Image src={underline2} />
          </div>

          <p className="pt-5 not-italic font-normal text-2xl">
            E.mail: bakybereket@gmail.com
          </p>
          <div className="flex  items-center justify-start text-white space-x-5 pt-6">
            <a href="https://">
              <button className="flex items-center justify-between transition duration-300 ease-out bg-light-blue rounded-none shadow-xl px-3 py-2 min-w-min min-h-min text-xs hover:ease-in hover:-translate-y-1">
                <Image src={iconInsta} />
                <p className="pl-3">instagram</p>
              </button>
            </a>
            <a href="https://">
              <button className="flex items-center justify-between transition duration-300 ease-out bg-light-blue rounded-none shadow-xl px-3 py-2 min-w-min min-h-min text-xs hover:ease-in hover:-translate-y-1">
                <Image src={iconLinked} />
                <p className="pl-3">linkedIn</p>
              </button>
            </a>
            <a href="https://">
              <button className="flex items-center justify-between transition duration-300 ease-out bg-light-blue rounded-none shadow-xl px-3 py-2 min-w-min min-h-min text-xs hover:ease-in hover:-translate-y-1">
                <Image src={iconFacebook} />
                <p className="pl-3">facebook</p>
              </button>
            </a>
          </div>
        </div>
        <div className="not-italic pl-8">
          <h2 className=" font-semibold text-5xl">Cвяжитесь с нами</h2>
          <p className="pt-12 font-semibold text-xl">
            Оставьте ваши данные чтобы мы могли с вами связаться
          </p>
          <div>
            <Form />
          </div>
        </div>
      </div>
      <p className="max-w-5xl m-auto not-italic font-semibold text-xl mt-28">
        Наше место положение
      </p>
      <iframe
        className="flex max-w-5xl m-auto justify-center  bottom-40 mt-7"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573.908712069224!2d58.39614365825083!3d37.91132999493373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf4ad054adaae0af2!2zMzfCsDU0JzQwLjgiTiA1OMKwMjMnNTAuMSJF!5e0!3m2!1sru!2sru!4v1639740119484!5m2!1sru!2sru"
        width="1330"
        height="545"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactsSection;
