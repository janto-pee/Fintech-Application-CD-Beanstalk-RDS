import React from 'react'

export const Hr = ({ text }) => {
  return (
    <div className="my-4 before:border-t flex before:flex-1 items-center before:border-gray-400 after:border-t after:flex-1  after:border-gray-400">
      <p className="text-center text-sm font-normal mx-4 text-gray-500">
        {text}
      </p>
    </div>
  )
}
