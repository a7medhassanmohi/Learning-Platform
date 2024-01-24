"use client"
import { getBanners } from '@/app/_utils/GlobalApi'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = {}
type BannerType={
    banner:{
        id:string,
        url:string
    }
    id:string;
    name:string;
    url:string;
}
const SideBanners = (props: Props) => {
    const [banner, setBanner] = useState<BannerType[]>([])
    const getSideBanner=()=>{
        getBanners().then((res:any)=>{
            setBanner(res?.sideBanners )
            
        })
    }
    useEffect(() => {
        getSideBanner()
    }, [])
    
  return (
    <div className='flex md:flex-col gap-2 overflow-hidden '>
        {banner.map((item,index)=>(
            <div key={item.id} className='relative cursor-pointer'>
                 <Image src={item?.banner?.url} alt='side banner' 
                 width={500}
                 height={300}
                 className='rounded-xl'
                 onClick={()=>window.open(item?.url)}
                 />

            </div>
        ))}
    </div>
  )
}

export default SideBanners