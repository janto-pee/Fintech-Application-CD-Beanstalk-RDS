import React from 'react'
import { Button } from '@material-tailwind/react'

const CustomButton = ({ text, className, variant, onClick, type }) => {
  return (
    <Button
      variant={variant}
      fullWidth
      className={`${className} rounded-md`}
      type={type ? type : 'button'}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}

export default CustomButton
