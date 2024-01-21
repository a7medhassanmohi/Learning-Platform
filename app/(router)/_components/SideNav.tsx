"use client"
import React from 'react'
import {BadgeIcon, BookOpen, GraduationCap} from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
type Props = {}
type MenuType={
    id:number,
    name:string,
    icon:React.ElementType,
    path:string
}

const SideNav = (props: Props) => {
    const urlPath=usePathname()
    const menu:MenuType[]=[
        {
            id:1,
            name:"All Courses",
            icon:BookOpen,
            path:"/courses"
        },
        {
            id:2,
            name:"MemberShip",
            icon:BadgeIcon,
            path:"/membership"
        },
        {
            id:3,
            name:"Be Instructor",
            icon:GraduationCap,
            path:"/instructor"

        }
    ]
  return (
    <div className=' bg-white shadow-sm border h-screen'>
        <Image
        width={170}
        height={50}
        src={"/logo.svg"}
        alt='logo'
        className='object-contain m-2'
        />
        <hr className='mt-7' />
        {/* menu */}
        <div className='space-y-2 mt-7 '>

        {menu.map(({icon:Icon,id,name,path})=>(
            <Link key={id} href={path}>
            <div  className={cn('flex gap-3  items-center p-3 text-lg cursor-pointer text-gray-500 hover:bg-primary hover:text-white transition-all group',
            urlPath===path && "bg-primary text-white "
            )}>
                <Icon className="group-hover:animate-bounce"/>
                <p>
                {name}
                </p>
            </div>
            </Link>
        ))}
        </div>

    </div>
  )
}

export default SideNav