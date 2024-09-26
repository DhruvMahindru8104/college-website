'use client'
import React from 'react'
import { Avatar,AvatarImage,AvatarFallback } from '../avatar'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
function Footer() {
    const pathname=usePathname()
  return (
    <>
    <footer className="p-4 bg-transparent border-t-2 mt-6 md:p-8 lg:p-10 ">
  <div className="mx-auto max-w-screen-xl text-center">
    <div className='flex justify-center items-center gap-2'>
     <Avatar className='h-10 w-10 md:h-12 md:w-12' >
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
      <span className='text-2xl font-bold ' >Shahazada Nand College</span>
    </div>

    <p className="my-6 text-gray-500 dark:text-gray-400">
    Empowering Minds, Shaping Futures with Knowledge, Innovation, and Growth.
    </p>
    <ul className="flex flex-wrap justify-center items-center mb-6 gap-4 text-gray-900 dark:text-white">
      <li className={clsx('hover:text-blue-400', pathname === '/' && 'text-blue-400')}>
        <Link href='/'>Home</Link>
      </li>
      <li className={clsx('hover:text-blue-400', pathname === '/about' && 'text-blue-400')}>
        <Link href='/about'>About</Link>
      </li>
      <li className={clsx('hover:text-blue-400', pathname === '/contact' && 'text-blue-400')}>
        <Link href='/contact'>Contact Us</Link>
      </li>
      <li className={clsx('hover:text-blue-400', pathname === '/alumni' && 'text-blue-400')}>
        <Link href='/alumni'>Alumni</Link>
      </li>
    </ul>
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2024-25{' '}
      <Link
        className="hover:underline"
        href="#"
      >
        Shehzada Nand College
      </Link>
      . All Rights Reserved.
    </span>
  </div>
</footer>
    </>
  )
}

export default Footer