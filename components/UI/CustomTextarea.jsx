import React from 'react'
import { Input, Textarea } from '@material-tailwind/react'

export const CustomTextarea = ({
  className,
  variant,
  type,
  name,
  formik,
  error,
  text,
  label,
}) => {
  return (
    <div className="my-6">
      <Textarea
        className={`${className} text-xl`}
        variant={variant}
        type={type}
        name={name}
        {...formik.getFieldProps(text)}
        color="red"
        label={label}
        autoComplete="off"
      />
      {error && <p className="text-red-500 py-4">{error}</p>}
    </div>
  )
}
