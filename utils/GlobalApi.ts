"use server"
import { request, gql } from 'graphql-request'

const MasterUrl=`https://api-eu-west-2.hygraph.com/v2/${process.env.HYGRAPH_API_KEY}/master`

export const getCourseList=async()=>{
  
const query=gql`
query MyQuery {
    courseLists(first: 20, orderBy: createdAt_DESC) {
      author
      id
      name
      free
      description
      demoUrl
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
        }
      }
      banner {
        url
      }
      sourceCode
      totalChapters
      tag
    }
  }
  

`

const result =await request(MasterUrl,query)
return result
}

export const getBanners=async()=>{
const query=gql`
query GetSideBanners {
  sideBanners {
    id
    name
    url
    banner {
      id
      url
    }
  }
}

`
const result =await request(MasterUrl,query)
return result
}

export async function getCourseById(id:string){
if(!id)return new Error("id of course is require")
const query=gql`
query GetSideBanners {
  courseList(where: {id:"${id}"}) {
    author
      id
      name
      free
      description
      demoUrl
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
          shortDesc
        }
      }
      banner {
        url
      }
      sourceCode
      totalChapters
      tag
  }
}

`
const result =await request(MasterUrl,query)
return result
}


export async function enrollCourses(courseId:string,userEmail:string,){
  if(!courseId)return new Error("id of course is require")
  if(!userEmail)return new Error("userEmail is require")
const query=gql`
mutation MyMutation {
  createUserEnrollCourse(
    data: {courseId: "${courseId}", userEmail: "${userEmail}", courseList: {connect: {id: "`+courseId+`"}}}
  ) {
    id
    courseId
  }
  publishManyUserEnrollCoursesConnection {
    edges {
      node {
        id
      }
    }
  }
}

`
const result =await request(MasterUrl,query)
return result

}

export async function checkUserEnrolledCourses(courseId:string,userEmail:string){
  if(!courseId)return new Error("id of course is require")
  if(!userEmail)return new Error("userEmail is require")
const query=gql`
query MyQuery {
  userEnrollCourses(where: {courseId: "`+courseId+`", userEmail: "`+userEmail+`"}) {
    courseId
    userEmail
    id
  }
}

`

const result =await request(MasterUrl,query)
return result
}

export async function getUserEnrolledCourseDetails(enrollId:string,userEmail:string |undefined){
  if(!enrollId)return new Error("id of course is require")
  if(!userEmail)return new Error("userEmail is require")
  const query=gql`
  query MyQuery {
    userEnrollCourses(where: {id: "`+enrollId+`", userEmail: "`+userEmail+`"}
    first: 100
    ) {
      completedChapter {
        ... on CompletedChapter {
          id
          chapterId
          stage
        }
      }
      courseId
      id
      userEmail
      courseList {
        author
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            shortDesc
            video {
              url
            }
          }
        }
        demoUrl
        description
        free
        name
        sourceCode
        totalChapters
        tag
      }
    }
  }
  
  `
  const result =await request(MasterUrl,query)
  
return JSON.parse(JSON.stringify(result))
}