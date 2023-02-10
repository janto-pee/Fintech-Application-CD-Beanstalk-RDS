import { Profile } from '@/components/Profile'
import React, { useEffect, useState } from 'react'
import MainLayout from '@/components/layouts/MainLayout'

export default function CreateProfile() {
  const [countries, setCountries] = useState([])
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const getCountries = async () => {
      setStatus('loading')
      try {
        const res = await fetch('https://restcountries.com/v2/all')
        const data = await res.json()
        if (data) {
          setStatus('success')
          setCountries(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getCountries()
  }, [])
  return (
    <MainLayout
      title="Create user profile"
      content={'A modeling and hotees site'}
      className="mx-auto lg:w-[60%] w-full py-20 px-4"
    >
      <h2 className="text-2xl text-red-900 uppercase font-serif font-bold text-center">
        Iludate &mdash; Agentur
      </h2>
      <h1 className="text-yellow-600 font-serif uppercase text-center pt-[2rem]">
        Create Profile
      </h1>
      <p className="text-gray-500 text-sm text-center pb-[2rem] font-sans">
        Welcome to Illudate Agentur
      </p>
      <Profile status={status} countries={countries} />
    </MainLayout>
  )
}
