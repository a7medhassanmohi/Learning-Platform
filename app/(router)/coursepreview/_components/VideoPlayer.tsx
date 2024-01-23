import React from 'react'

type Props = {
  videoUrl:string |undefined,
  poster:string |undefined
}

const VideoPlayer = ({videoUrl,poster}: Props) => {
  return (
    <video
    controls
    key={videoUrl}
    className='rounded-sm aspect-video max-w-full w-full '
    poster={poster || ""}
    >
      <source src={videoUrl} />
    </video>
  )
}

export default VideoPlayer