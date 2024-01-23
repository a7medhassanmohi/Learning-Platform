import React from 'react'

type Props = {
  videoUrl:string,
  poster:string
}

const VideoPlayer = ({videoUrl,poster}: Props) => {
  return (
    <video
    controls
    className='rounded-sm aspect-video max-w-full w-full '
    poster={poster || ""}
    >
      <source src={videoUrl} />
    </video>
  )
}

export default VideoPlayer