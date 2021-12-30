import Image from 'next/image'
import iconInsta from '../../public/button/insta.svg'
import iconFacebook from '../../public/button/facebook.svg'
import iconLinked from '../../public/button/linked.svg'
import Form from './contacts/form'

import { useTranslation } from 'next-i18next'

//
//absolute -z-10 w-2/4 h-full bg-clip-content bg-contain bg-no-repeat bg-center ml
//mx-60 mb-32 mt-40
const ContactsSection = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <div id="contacts" className="flex flex-col text-dark-grey">
        <div
          className="flex flex-col md:flex-row m-auto bg-local bg-no-repeat bg-[center_right_13rem] bg-46%"
          style={{ backgroundImage: "url('/bgSection4.svg')" }}
        >
          <div className="flex flex-col md:mr-12">
            <div>
              <h2 className="not-italic pb-16 min-h-min text-dark-grey font-bold text-2xl uppercase">
                {t('contacts.heading')}
              </h2>
              <p className="not-italic font-normal  max-w-[512px] relative min-h-min">
                {t('contacts.company')} <br /> {t('contacts.address')}{' '}
              </p>
              <div className="w-full h-0.5 bg-light-blue my-3"></div>

              <div className="pt-1 not-italic font-normal relative min-h-min">
                <p>{t('contacts.tel')}</p>
                <p>{t('contacts.fax')}</p>
              </div>
              <div className="w-4/6 h-[0.150rem] bg-light-blue my-3"></div>
            </div>

            <p className="pt-2 not-italic font-normal">
              {t('contacts.email')}{' '}
            </p>
            <div className="flex items-center justify-start text-white space-x-5 pt-6 mb-8">
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
          <div className="flex flex-col justify-start md:ml-12">
            <h1 className="text-dark-grey font-bold text-2xl uppercase pb-12">
              {t('contacts.form.heading')}
            </h1>
            <p className="mt-0 font-semibold ">{t('contacts.form.text')}</p>
            <div className="">
              <Form />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="max-w-5xl m-auto not-italic font-semibold text-xl mt-16">
          {t('location.heading')}
        </p>
        <div className="flex h-[30rem] mb-40">
          <iframe
            className="m-auto grow h-full mt-7"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573.908712069224!2d58.39614365825083!3d37.91132999493373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf4ad054adaae0af2!2zMzfCsDU0JzQwLjgiTiA1OMKwMjMnNTAuMSJF!5e0!3m2!1sru!2sru!4v1639740119484!5m2!1sru!2sru"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactsSection
