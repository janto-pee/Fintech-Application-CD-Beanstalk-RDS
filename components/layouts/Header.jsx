import { useState, useEffect } from 'react'
import {
  Navbar,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react'
import Link from 'next/link'
import { links } from '../../constant/constant'
import { MobileLayout } from './MobileLayout'
import { NavList } from './NavList'

export const Header = () => {
  const [openNav, setOpenNav] = useState(false)
  const [language, setLanguage] = useState('EN')

  const handleEnglish = () => {
    setLanguage('EN')
  }
  const handleDutch = () => {
    setLanguage('DE')
  }

  const handleCloseNav = () => {
    setOpenNav(false)
  }
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false),
    )
  }, [])

  return (
    <Navbar
      className="w-full py-2 px-4 lg:px-8 lg:py-4 fixed z-[1000]"
      fullWidth
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <Link href="/">
            <span
              className="text-pink-600 font-semibold italic uppercase"
              onClick={handleCloseNav}
            >
              Iludate &mdash; Argentun
            </span>
          </Link>
        </Typography>
        <div className="hidden lg:block">
          <NavList handleCloseNav={handleCloseNav} />
        </div>
        <div className="hidden lg:block">
          <span
            className={language === 'EN' ? 'text-red-500' : 'text-gray-500'}
            onClick={handleEnglish}
          >
            EN
          </span>
          <span
            className={`mr-10 ${
              language === 'DE' ? 'text-red-500' : 'text-gray-500'
            }`}
            onClick={handleDutch}
          >
            DE
          </span>
          <Link href="/signin">
            <Button
              size="sm"
              className="hidden lg:inline-block bg-transparent text-gray-500 border border-gray-400"
            >
              <span>Login</span>
            </Button>
          </Link>
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
          {!openNav && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileLayout
        openNav={openNav}
        language={language}
        handleCloseNav={handleCloseNav}
        handleDutch={handleDutch}
        handleEnglish={handleEnglish}
      />
    </Navbar>
  )
}
