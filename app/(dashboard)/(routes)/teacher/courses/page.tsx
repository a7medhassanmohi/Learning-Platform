import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='p-6'>
      <Link href="/teacher/create">
        <Button className='p-6'>
          new course
        </Button>
      </Link>
    </div>
  )
}

export default page