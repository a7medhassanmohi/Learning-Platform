import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'

type Props = {}

const Courses = (props: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5'>
      
      {/* left container */}
      <div className='md:col-span-2'>
      <WelcomeBanner/>
      </div>

      {/* right container */}
      <div className=''>

      </div>
    </div>
  )
}

export default Courses