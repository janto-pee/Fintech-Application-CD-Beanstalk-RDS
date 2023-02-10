import { Button, MobileNav } from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'
import { NavList } from './NavList'

export const MobileLayout = ({
  openNav,
  handleEnglish,
  handleDutch,
  handleCloseNav,
  navList,
  language,
}) => {
  return (
    <MobileNav open={openNav} className="z-[1000]">
      <div className="container mx-auto">
        <NavList handleCloseNav={handleCloseNav} />
        <div className="flex flex-col">
          <div className="mb-4">
            <span
              className={language === 'EN' ? 'text-red-500' : 'text-gray-500'}
              onClick={handleEnglish}
            >
              EN
            </span>
            <span className="text-gray-500">|</span>
            <span
              className={language === 'DE' ? 'text-red-500' : 'text-gray-500'}
              onClick={handleDutch}
            >
              DE
            </span>
          </div>
          <Link href="/signin" onClick={handleCloseNav}>
            <Button
              size="sm"
              className="lg:inline-block bg-transparent text-gray-500 border border-gray-400"
            >
              <span>Login</span>
            </Button>
          </Link>
        </div>
      </div>
    </MobileNav>
  )
}
