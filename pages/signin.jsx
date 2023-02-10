import { Signin } from '@/components/auth/Signin'
import MainLayout from '@/components/layouts/MainLayout'
import React from 'react'

export default function signin() {
  return (
    <MainLayout
      content={'A modeling and hotees site'}
      title="Sign In Page"
      className="lg:w-[40%] w-full mx-auto pt-20 px-4 pb-4"
    >
      <h1 className="text-2xl text-red-900 uppercase font-serif font-bold text-center mt-6">
        Iludate &mdash; Agentur
      </h1>
      <p className="text-yellow-600 font-serif uppercase text-center pt-12">
        Log in
      </p>
      <p className="text-gray-500 text-sm text-center font-sans">
        Welcome to Illudate Agentur
      </p>
      <Signin />
    </MainLayout>
  )
}
