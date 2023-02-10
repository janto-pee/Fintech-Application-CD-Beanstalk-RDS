import React from 'react'
import { RxInstagramLogo } from 'react-icons/rx'
import { ImFacebook } from 'react-icons/im'
import { BsSnapchat } from 'react-icons/bs'

//flex flex-col md:flex-row sm:justify-center items-center sm:items-start border border-gray-200 mt-40 space-x-5 py-16 px-8 w-full

export const Vcard = () => {
  return (
    <div className="flex py-8 px-4 flex-col justify-center items-center  mt-20 sm:flex-row sm:items-start border border-gray-200 max-w-lg sm:py-8 sm:px-4 mx-auto">
      <section className="flex flex-col justify-between  sm:space-y-7">
        <h1 className="text-2xl text-red-900 uppercase font-serif font-bold mb-8 whitespace-nowrap">
          Iludate-Agentur
        </h1>
        <div className="flex mb-4  items-center justify-center gap-3 sm:justify-start sm:mb-0">
          <div className="flex flex-col justify-center items-center">
            <RxInstagramLogo className="text-white bg-red-900 rounded-full text-[1.5rem] p-[0.2rem]" />
            <p className="text-[0.7rem] font-semibold">Instagram</p>
            <span className="text-[0.6rem] font-light">@emer_uu</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <ImFacebook className="text-white bg-red-900 rounded-full text-[1.5rem] p-[0.2rem]" />
            <p className="text-[0.7rem] font-semibold">Facebook</p>
            <span className="text-[0.6rem] font-light">Emery Muller</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <BsSnapchat className="text-white bg-red-900 rounded-full text-[1.5rem] p-[0.2rem]" />
            <p className="text-[0.7rem] font-semibold">Snapchat</p>
            <span className="text-[0.6rem] font-light">@emer_uu</span>
          </div>
        </div>
      </section>
      <section className="px-8 ">
        <div className="grid grid-cols-2 justify-items-center sm:justify-items-start">
          <div className="mb-4">
            <span className="text-xs">Name</span>
            <h2 className="uppercase font-semibold">Emery</h2>
          </div>
          <div>
            <span className="text-xs">Surname</span>
            <h2 className="uppercase font-semibold">Muller</h2>
          </div>

          <span className="text-xs col-span-2">Phone number</span>
          <p className="font-semibold col-span-2">0000 123-123 123 45</p>

          <span className="text-xs col-span-2">Email Address</span>
          <p className="font-semibold col-span-2">emerymodel@gmail.com</p>
        </div>
      </section>
    </div>
  )
}
