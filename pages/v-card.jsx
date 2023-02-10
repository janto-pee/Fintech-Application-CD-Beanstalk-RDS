import MainLayout from '@/components/layouts/MainLayout'
import { Vcard } from '@/components/Vcard'
import React from 'react'

export default function VCard() {
  return (
    <MainLayout
      content={'A modeling and hotees site'}
      title="Vcard"
      className="lg:w-[50%] w-full mx-auto pt-20 px-4 pb-4"
    >
      <Vcard />
    </MainLayout>
  )
}
