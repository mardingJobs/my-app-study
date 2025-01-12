"use client"
import Image from 'next/image'
import React from 'react'
import AAA from '/public/aaa.jpg'

export default function Page() {
  return (
    <div className='h-screen relative'>
      <div className='absolute inset-0 -z-10'>
        <Image alt='' src={AAA} fill style={{ objectFit: 'cover' }} />
        <div className='absolute inset-0 bg-gradient-to-l'></div>
      </div>
      <div className='flex justify-center pt-48 text-6xl'>
        <h1>你好</h1>
      </div>
    </div>
  )
}
