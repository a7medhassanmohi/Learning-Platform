import { Button } from '@/components/ui/button'
import { BellDot, Search } from 'lucide-react'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='p-4 bg-white flex justify-between items-center'>
        <div className=' border flex gap-2 rounded-md p-2 '>
            <Search className='  cursor-pointer '/>
            <input type='text' placeholder='Search' className='outline-none focus:outline-none focus:border-none  '/>
        </div>
        <div className='flex gap-2 items-center '>
    <BellDot className='text-gray-400'/>
    <Button>
        Get started
    </Button>

        </div>
    </div>
  )
}

export default Header