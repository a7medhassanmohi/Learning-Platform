import { request, gql } from 'graphql-request'

const MasterUrl=`https://api-eu-west-2.hygraph.com/v2/clrnca0780wot01wde3mvi36y/master`

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