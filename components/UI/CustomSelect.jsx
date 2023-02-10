import { Option, Select } from '@material-tailwind/react'
import React from 'react'

export const CustomSelect = ({
  value,
  formik,
  options,
  text,
  className,
  name,
  label,
  type,
  countries,
}) => {
  return (
    <>
      {type === 'customSelect' ? (
        <div className="my-8">
          {countries && (
            <Select
              className={className}
              name={name}
              id={name}
              value={value}
              {...formik.getFieldProps(text)}
              label={label}
              variant="standard"
            >
              {countries?.map((option) => (
                <Option value={option?.name?.toLowerCase()} key={option?.name}>
                  {option?.name}
                </Option>
              ))}
            </Select>
          )}

          {options && (
            <Select
              className={className}
              name={name}
              id={name}
              value={value}
              {...formik.getFieldProps(text)}
              label={label}
              variant="standard"
            >
              {options.map((option) => (
                <Option value={option.value} key={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          )}
        </div>
      ) : (
        <select
          className={className}
          name={name}
          id={name}
          value={value}
          {...formik.getFieldProps(text)}
          label={label}
        >
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </>
  )
}
