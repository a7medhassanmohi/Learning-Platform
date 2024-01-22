import React from 'react'

type Props = {
  videoUrl:string
}

const VideoPlayer = ({videoUrl}: Props) => {
  return (
    <video
    controls
    className='rounded-sm aspect-video max-w-full w-full '
    >
      <source src={videoUrl} />
    </video>
  )
}

export default VideoPlayer