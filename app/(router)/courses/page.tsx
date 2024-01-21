import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'

type Props = {}

const Courses = (props: Props) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 p-5'>
      
      {/* left container */}
      <div className='lg:col-span-3 space-y-5'>
      <WelcomeBanner/>
      <CourseList/>
      </div>

      {/* right container */}
      <div className=''>

      </div>
    </div>
  )
}

export default Courses