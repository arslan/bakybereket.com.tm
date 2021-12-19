import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        {...register('First name', { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="tel"
        placeholder="Mobile number"
        {...register('Mobile number', {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />

      <input
        className="w-4 h-4"
        type="checkbox"
        placeholder="NDA"
        {...register('NDA')}
      />

      <input
        type="submit"
        className="flex items-center  bg-light-blue rounded-none px-14 py-2 min-w-min min-h-min text-xs text-white"
      />
    </form>
  )
}
