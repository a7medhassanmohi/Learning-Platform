import React, { Suspense } from 'react'
import DashboardWelcomeBanner from './_components/DashboardWelcomeBanner'
import { auth, currentUser, useUser } from '@clerk/nextjs'
import InProgressCourseList from './_components/InProgressCourseList'

type Props = {}

const DashboardPage = async (props: Props) => {
  const user=await currentUser()
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 p-5 gap-1'>
      <div className='lg:col-span-4 space-y-5'>

      <DashboardWelcomeBanner userFullName={user?.firstName || "" + user?.lastName|| ""}/>
      <InProgressCourseList userEmail={user?.emailAddresses[0].emailAddress}/>
      </div>
    </div>
  )
}

export default DashboardPage