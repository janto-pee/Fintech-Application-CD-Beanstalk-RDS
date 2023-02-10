import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Button } from '@material-tailwind/react'
import MainLayout from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout
      content={'A modeling and hotees site'}
      title="Home Page"
      className="flex items-center justify-center flex-col h-[100vh]"
    >
      <h1 className="text-6xl mb-6 uppercase ital">Welcome</h1>
      <h2 className="font-semibold italic text-pink-400 mb-2">
        Let's get started
      </h2>
      <Button className="rounded-full bg-pink-600 px-20 " size="lg">
        Hello
      </Button>
    </MainLayout>
  )
}
