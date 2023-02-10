import { register } from '@/utils/schema'
import { ShowToast } from '@/utils/tools'
import { Button, Checkbox, Input } from '@material-tailwind/react'
import { useFormik } from 'formik'
import Link from 'next/link'
import React, { useState } from 'react'
import { CustomSelect } from '../UI/CustomSelect'
import { CustomInput } from '../UI/CustomInput'
import { CustomForm } from '../UI/CustomForm'
import CustomButton from '../UI/CustomButton'
import axios from 'axios'
import { useRouter } from 'next/router'

export const Signup = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      role: 'client',
    },
    validationSchema: register,
    onSubmit: async (values) => {
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/users`,
          values,
        )
        ShowToast('SUCCESS', 'Your registration is successful')
        router.push('/verify-email')
      } catch (error) {
        ShowToast(
          'ERROR',
          `Your registration is not successful - ${error.message}`,
        )
      }
    },
  })

  const options = [
    {
      value: 'model',
      label: 'Model',
    },
    {
      value: 'client',
      label: 'Client',
    },
    {
      value: 'hostess',
      label: 'Hostess',
    },
    {
      value: 'coach',
      label: 'Coach',
    },
  ]
  return (
    <div>
      <div>
        <label className="text-gray-500 text-sm flex justify-center pb-3 font-sans">
          Regsiter as:
        </label>
        <div className="flex flex-auto items-center justify-center gap-2">
          <Button className="bg-red-900 hover:shadow-none shadow-none rounded-full py-1 capitalize font-normal">
            {formik.values.role}
          </Button>
          <CustomSelect
            value={formik.values.role}
            text="role"
            className="border border-red-900 rounded-full text-red-900 text-sm py-1 px-2 focus:outline-none active::border-none"
            name="role"
            options={options}
            formik={formik}
          />
        </div>
      </div>
      <CustomForm onSubmit={formik.handleSubmit} className="">
        <CustomInput
          className={'pt-1 pb-1 w-full mb-6'}
          variant="standard"
          name="name"
          formik={formik}
          error={formik.errors.name}
          text={'name'}
          label="Name"
          blur={formik.touched.name}
          type={'text'}
        />
        <CustomInput
          className={'pt-1 pb-1 w-full mb-6'}
          variant="standard"
          name="email"
          formik={formik}
          error={formik.errors.email}
          text={'email'}
          label="Email"
          blur={formik.touched.email}
          type={'email'}
        />
        <CustomInput
          className={'pt-1 pb-1 w-full mb-6'}
          variant="standard"
          name="confirmEmail"
          formik={formik}
          error={formik.errors.confirmEmail}
          blur={formik.touched.confirmEmail}
          text={'confirmEmail'}
          label="Confirm email address"
          type={'email'}
        />
        <CustomInput
          className={'pt-1 pb-1 w-full mb-6'}
          variant="standard"
          name="password"
          formik={formik}
          error={formik.errors.password}
          blur={formik.touched.password}
          text={'password'}
          label="Password"
          type={'password'}
        />
        <CustomInput
          className={'pt-1 pb-1 w-full'}
          variant="standard"
          name="confirmPassword"
          formik={formik}
          error={formik.errors.confirmPassword}
          blur={formik.touched.confirmPassword}
          text={'confirmPassword'}
          label="Confirm password"
          type={'password'}
        />

        <div className="mt-2">
          <label className="text-sm text-red-900">
            If you got an invitation, please fill in now
          </label>
          <Input
            className=""
            variant="standard"
            type="text"
            name="invitationnCode"
            placeholder="Invitation code"
          />
        </div>

        {formik.values.role === 'model' && (
          <div>
            <Checkbox />I know about
            <Link href="/terms">books on date law</Link>
          </div>
        )}
        {formik.values.role === 'model' && (
          <div>
            <Checkbox />I accept <Link href="/terms">general conditions</Link>
          </div>
        )}

        <CustomButton
          className={'my-6 bg-primary'}
          type="submit"
          text={' Register now'}
        />
      </CustomForm>
    </div>
  )
}
