import React from 'react'

type Props = {}

const LoadingCoursePreview = (props: Props) => {
    return(
        <div  className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
           <div className='col-span-2 p-3  rounded-xl  '>
           <div className="aspect-video animate-pulse bg-slate-300 "></div>
           </div>
           <div className=''>
           <div className="h-full m-2 rounded-xl w-[90%] animate-pulse bg-slate-300 "></div>
           </div>
  
           
       </div>
    )
}

export default LoadingCoursePreview