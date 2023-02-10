import React from 'react'
import { Input } from '@material-tailwind/react'

export const CustomInput = ({
  className,
  variant,
  type,
  name,
  formik,
  error,
  text,
  label,
  blur,
}) => {
  return (
    <div className="my-6">
      <Input
        className={`${className} text-xl`}
        variant={variant}
        type={type}
        name={name}
        {...formik.getFieldProps(text)}
        color="red"
        label={label}
        autoComplete="off"
      />

      {blur && error && <span className="text-red-500 py-4">{error}</span>}
    </div>
  )
}
