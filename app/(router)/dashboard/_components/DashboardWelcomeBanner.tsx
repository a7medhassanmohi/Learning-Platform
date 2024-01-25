import Image from 'next/image'
import React from 'react'

type Props = {
    userFullName:string |null |undefined
}

const DashboardWelcomeBanner = ({userFullName}: Props) => {
  return (
    <div className='flex gap-5 items-center bg-white rounded-xl p-5'>
    <Image src="/panda.webp" alt="logo" 
    width={100}
    height={100}
    />
    <div className=''>
    <h2 className='font-bold text-[27px]'>Welcome Back <span className="text-primary">{userFullName}</span> </h2>
    <h2 className='text-gray-400'>Explore, Learn and build all real life Project</h2>
    </div>
</div>
  )
}

export default DashboardWelcomeBanner