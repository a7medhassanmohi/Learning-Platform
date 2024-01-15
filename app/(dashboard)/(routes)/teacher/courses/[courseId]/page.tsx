import React from 'react'

type Props = {
    params:{courseId:string}
}

const CourseIdPage = ({params}: Props) => {
  return (
    <div>CourseIdPage {params.courseId}</div>
  )
}

export default CourseIdPage