import { VerifyEmailAddress } from '@/components/auth/VerifyEmail'
import MainLayout from '@/components/layouts/MainLayout'
import CustomButton from '@/components/UI/CustomButton'
import React from 'react'

export default function VerifyEmail() {
  return (
    <MainLayout
      content={'A modeling and hotees site'}
      title="Verify Email Page"
      className="lg:w-[40%] w-full mx-auto pt-24 px-4 pb-4"
    >
      <VerifyEmailAddress />
    </MainLayout>
  )
}
