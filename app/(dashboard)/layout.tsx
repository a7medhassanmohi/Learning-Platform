import React, { ReactNode } from 'react'
import Sidebar from './_components/Sidebar'

type Props = {
    children:ReactNode
}

const DashboardLayout = ({children}: Props) => {
  return (
    <div className="h-full">
        <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout