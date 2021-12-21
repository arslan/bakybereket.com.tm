import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
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
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col box-border "
    >
      <input
        className="bg-form-rgba mt-5 border-b-2 outline-none"
        type="text"
        placeholder="name"
        {...register('name', { required: true, maxLength: 80 })}
      />
      <input
        className="bg-form-rgba mt-5 border-b-2 outline-none"
        type="text"
        placeholder="Email"
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        className="bg-form-rgba mt-5 border-b-2 outline-none"
        type="tel"
        placeholder="Number"
        {...register('Number', {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />

      <textarea
        className="text-justify w-xl h-40 box-border rounded border-2 mt-5 outline-none"
        {...register('Message', {})}
      />
      <div className="flex items-center justify-center mt-5">
        <input
          className="w-4 h-4 mb-4"
          type="checkbox"
          placeholder="NDA"
          {...register('NDA')}
        />
        <p className="pl-2 not-italic w-[50%] mt-9 text-xs font-semibold h-20">
          Я хочу защитить свои данные, подписав NDA.
        </p>
        <input
          type="submit"
          className=" text-center bg-light-blue rounded-none shadow-xl px-6 py-0 min-w-min min-h-min h-10 font-normal text-xl text-white"
        />
      </div>
    </form>
  )
}
