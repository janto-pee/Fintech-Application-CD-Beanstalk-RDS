import React from 'react'

export const CustomForm = ({ children, onSubmit, className }) => {
  return (
    <form onSubmit={onSubmit} autoComplete="off" className={className}>
      {children}
    </form>
  )
}
