import { Typography } from '@material-tailwind/react'
import Link from 'next/link'
import { links } from '../../constant/constant'
export const NavList = ({ handleCloseNav }) => {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {links.map((item) => (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
          onClick={handleCloseNav}
          key={item.link}
        >
          <Link href={item.link} className="flex items-center">
            {item.title}
          </Link>
        </Typography>
      ))}
    </ul>
  )
}
