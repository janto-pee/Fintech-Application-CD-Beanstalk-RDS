import { createProfile } from '@/utils/schema'
import { ShowToast } from '@/utils/tools'

import { useFormik } from 'formik'
import React, { useState } from 'react'
import { FiCamera } from 'react-icons/fi'
import CustomButton from './UI/CustomButton'
import { CustomForm } from './UI/CustomForm'
import { CustomInput } from './UI/CustomInput'
import { CustomSelect } from './UI/CustomSelect'
import { CustomTextarea } from './UI/CustomTextarea'
import { languages, covids, options, smokes } from '../constant/constant'

export const Profile = ({ status, countries }) => {
  const [showPassword, setShowPassword] = useState(false)

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      images: [],
      age: '',
      gender: '',
      nationality: '',
      height: '',
      weight: '',
      hairColor: '',
      country: '',
      city: '',
      sport: '',
      languages: '',
      smoker: '',
      profession: '',
      hobbies: '',
      covid: '',
      hashtag: '',
      message: '',
      birthday: '',
    },
    validationSchema: createProfile,
    onSubmit: (values) => {
      console.log(values)
      onFormSubmit(values)
      //   ShowToast("SUCCESS", "Login successfully");
    },
  })

  const handlePicValue = (e) => {
    const picArr = []
    picArr.push(e.target.files)

    formik.setFieldValue('images', ...picArr)

    // console.log(formik.values.images);
  }

  const onFormSubmit = (values) => {
    console.log(values, 'form')
  }
  return (
    <CustomForm onSubmit={formik.handleSubmit}>
      <div className="mt-6 flex flex-col justify-center items-center">
        <label
          htmlFor="images"
          className="flex flex-col items-center justify-center bg-gray-300 p-12  cursor-pointer rounded-lg"
        >
          <FiCamera className=" text-blue-gray-200" fontSize={40} />
          <span className="text-center text-sm my-3">
            Drop your images here or <br />
            <strong className="text-red-900">browse</strong>
          </span>
          <input
            type="file"
            id="images"
            onChange={handlePicValue}
            accept=".jpg.png,.jpeg"
            multiple
            className="hidden"
            name="images"
          />
          {formik.errors.images && formik.touched.images && (
            <div className="text-red-500">{formik.errors.images}</div>
          )}
        </label>
        <span className="text-gray-500 text-xs font-sans mt-2">
          Please upload at least 4 photos
        </span>
        <span className="text-gray-500 text-xs font-sans">max 8 photos</span>
      </div>
      <CustomInput
        className={'pt-1 pb-1 w-full'}
        variant="standard"
        name="firstname"
        formik={formik}
        error={formik.errors.firstname}
        text={'firstname'}
        label="First Name"
        type="text"
      />
      <CustomInput
        className={'pt-1 pb-1 w-full'}
        variant="standard"
        name="lastname"
        formik={formik}
        error={formik.errors.lastname}
        text={'lastname'}
        label="Last Name"
        type="text"
      />
      <CustomInput
        className={'pt-1 pb-1 w-full'}
        variant="standard"
        name="age"
        formik={formik}
        error={formik.errors.age}
        text={'age'}
        label="Age"
        type="text"
      />
      <CustomInput
        className={'pt-1 pb-1 w-full'}
        variant="standard"
        name="birthday"
        formik={formik}
        error={formik.errors.birthday}
        text={'birthday'}
        label="DOB"
        type="date"
      />
      <CustomSelect
        value={formik.values.gender}
        text="gender"
        className={'pt-1 pb-1 w-full'}
        name="gender"
        options={options}
        formik={formik}
        label="Gender"
        type="customSelect"
      />

      <CustomInput
        className={'pt-1 pb-1 w-full'}
        variant="standard"
        name="nationality"
        formik={formik}
        error={formik.errors.nationality}
        text={'nationality'}
        label="Nationality"
        type="text"
      />
      <CustomInput
        className={'pt-1 pb-1 w-full'}
        variant="standard"
        name="height"
        formik={formik}
        error={formik.errors.height}
        text={'height'}
        label="Height"
        type="text"
      />
      <CustomInput
        className={'pt-1 pb-1 w-full'}
        variant="standard"
        name="weight"
        formik={formik}
        error={formik.errors.weight}
        text={'weight'}
        label="Weight"
        type="text"
      />
      <CustomInput
        className={'pt-1 pb-1 w-full'}
        variant="standard"
        name="hairColor"
        formik={formik}
        error={formik.errors.hairColor}
        text={'hairColor'}
        label="HairColor"
        type="text"
      />
      <CustomSelect
        value={formik.values.country}
        text="country"
        className={'pt-1 pb-1 w-full'}
        name="country"
        countries={countries}
        formik={formik}
        label="Country"
        type="customSelect"
      />

      <CustomInput
        className={'pt-1 pb-1 w-full'}
        variant="standard"
        name="city"
        formik={formik}
        error={formik.errors.city}
        text={'city'}
        label="City"
        type="text"
      />
      <CustomInput
        className={'pt-1 pb-1 w-full'}
        variant="standard"
        name="city"
        formik={formik}
        error={formik.errors.city}
        text={'city'}
        label="City"
        type="text"
      />
      <CustomSelect
        value={formik.values.languages}
        text="languages"
        className={'pt-1 pb-1 w-full'}
        name="languages"
        options={languages}
        formik={formik}
        label="Languages"
        type="customSelect"
      />
      <CustomSelect
        value={formik.values.languages}
        text="smoker"
        className={'pt-1 pb-1 w-full'}
        name="smoker"
        options={smokes}
        formik={formik}
        label="Smoker"
        type="customSelect"
      />

      <CustomInput
        className={'pt-1 pb-1 w-full'}
        variant="standard"
        name="profession"
        formik={formik}
        error={formik.errors.profession}
        text={'profession'}
        label="Profession"
        type="text"
      />
      <CustomInput
        className={'pt-1 pb-1 w-full'}
        variant="standard"
        name="hashtag"
        formik={formik}
        error={formik.errors.hashtag}
        text={'hashtag'}
        label="Hashtag"
        type="text"
      />

      <CustomSelect
        value={formik.values.covid}
        text="covid"
        className={'pt-1 pb-1 w-full'}
        name="covid"
        options={covids}
        formik={formik}
        label="Covid"
        type="customSelect"
      />
      <CustomTextarea
        className={'pt-1 pb-1 w-full'}
        variant="outlined"
        name="message"
        formik={formik}
        error={formik.errors.message}
        text={'message'}
        label="My Experience"
        type="text"
      />

      <div className="flex gap-4">
        <CustomButton
          text={'Send for verification'}
          type="submit"
          className="bg-primary rounded-lg pt-1 pb-1 normal-case h-12"
        />
        <CustomButton
          text={'Save'}
          type="button"
          className="bg-white border text-primary border-primary rounded-full pt-1 pb-1"
        />
      </div>
    </CustomForm>
  )
}
