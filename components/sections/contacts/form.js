import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'next-i18next'
import HCaptcha from '@hcaptcha/react-hcaptcha'

export default function Form() {
  const [token, setToken] = useState(null)
  const captchaRef = useRef(null)

  // const onLoad = () => {
  //   captchaRef.current.execute()
  // }
  useEffect(() => {
    if (token) console.log(`hCaptcha Token: ${token}`)
  }, [token])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    if (!!token) {
      console.log(data)
      console.log(errors)
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log(res.status)
      })
    } else console.log('not ca')
  }
  const { t } = useTranslation('common')

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col box-border "
    >
      <input
        className="bg-form-rgba mt-5 border-b-2 outline-none"
        type="text"
        placeholder={t('contacts.form.name')}
        {...register('name', { required: true, maxLength: 80 })}
      />
      <input
        className="bg-form-rgba mt-5 border-b-2 outline-none"
        type="text"
        placeholder={t('contacts.form.email')}
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        className="bg-form-rgba mt-5 border-b-2 outline-none"
        type="tel"
        placeholder={t('contacts.form.tel')}
        {...register('Number', {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />

      <textarea
        className="text-justify w-xl h-40 box-border rounded border-2 mt-5 outline-none mb-5"
        {...register('Message', {})}
      />
      <HCaptcha
        sitekey="f8cd3bca-d3d7-48c2-b68d-c2cf89036ff4"
        // onLoad={onLoad}
        onVerify={setToken}
        ref={captchaRef}
      />
      <div className="flex items-center justify-start -mt-5">
        <input className="w-4 h-4 mb-4" type="checkbox" {...register('NDA')} />
        <p className="md:pr-6 pl-2 text-left not-italic w-[50%] mt-9 text-xs font-semibold h-20 ">
          {t('contacts.form.tick')}
        </p>
        <div className="mb-4 md:ml-11 ml-2">
          <input
            type="submit"
            value={t('contacts.form.submit_button')}
            className=" text-center bg-light-blue rounded-none shadow-xl px-10 py-0 min-w-min min-h-min h-10 font-normal text-xl text-white"
          />
        </div>
      </div>
    </form>
  )
}
