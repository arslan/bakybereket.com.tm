import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'next-i18next'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import channel from 'sharp/lib/channel'

export default function Form() {
  const [token, setToken] = useState(null)
  const captchaRef = useRef(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' })

  const onSubmitForm = async (data) => {
    await captchaRef.current.execute({ async: true })
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {})
    reset()
    captchaRef.current.resetCaptcha()
  }
  useEffect(() => {}, [token])
  const { t } = useTranslation('common')
  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="flex flex-col box-border "
    >
      <input
        className={
          errors?.name
            ? 'transition-colors duration-700 bg-form-rgba mt-5 outline-none border-b-2 border-b-red'
            : 'transition-colors duration-700 bg-form-rgba mt-5 outline-none border-b-2'
        }
        type="text"
        placeholder={t('contacts.form.name')}
        {...register('name', {
          required: true,
          maxLength: 80,
        })}
      />
      <input
        className={
          errors?.email
            ? 'transition-colors duration-700 bg-form-rgba mt-5 outline-none border-b-2 border-b-red'
            : 'transition-colors duration-700 bg-form-rgba mt-5 outline-none border-b-2'
        }
        type="email"
        placeholder={t('contacts.form.email')}
        {...register('email', {
          required: true,
          pattern: /^\S+@\S+$/i,
        })}
      />
      <input
        className={
          errors?.number
            ? 'transition-colors duration-700 bg-form-rgba mt-5 outline-none border-b-2 border-b-red'
            : 'transition-colors duration-700 bg-form-rgba mt-5 outline-none border-b-2'
        }
        type="tel"
        placeholder={t('contacts.form.tel')}
        {...register('number', {
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
        sitekey={process.env.HCAPTCHA}
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
            // disabled={isValid}
            value={t('contacts.form.submit_button')}
            className={`transition-colors duration-700 text-center  rounded-none shadow-xl px-10 py-0 min-w-min min-h-min h-10 font-normal text-xl text-white cursor-pointer ${
              token ? 'bg-light-blue' : 'bg-light-grey'
            } `}
          />
        </div>
      </div>
    </form>
  )
}
