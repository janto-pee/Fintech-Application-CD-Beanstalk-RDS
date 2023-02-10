import { Signup } from '@/components/auth/Signup'
import React from 'react'
import MainLayout from '@/components/layouts/MainLayout'

export default function signin() {
  return (
    <MainLayout
      content={'A modeling and hotees site'}
      title="SignUp Page"
      className="lg:w-[40%] w-full mx-auto pt-24 px-4 pb-4"
    >
      <h1 className="text-2xl text-red-900 uppercase font-serif font-bold text-center">
        Iludate &mdash; Agentur
      </h1>
      <p className="text-yellow-600 font-serif uppercase text-center pt-[2rem]">
        Register
      </p>
      <p className="text-gray-500 text-sm text-center pb-[2rem] font-sans">
        Welcome to Illudate Agentur
      </p>
      <Signup />
    </MainLayout>
  )
}
