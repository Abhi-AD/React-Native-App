import { request, gql } from 'graphql-request'

const MASTER_URL = `https://api-ap-south-1.hygraph.com/v2/cltyao30n00b507w6yg3hskc7/master`;


const getCateogory = async () => {
  const query = gql`
  query GetCategory {
    categories {
      id
      name
      icon {
        url
      }
      slug
    }
  }
`
  const result = await request(MASTER_URL, query);
  return result;
}

const getCourseList = async () => {
  const query = gql`
  query CourseList {
    courseLists(first: 50, orderBy: createdAt_DESC) {
      author
      description
      free
      id
      name
      sourceCode
      tag
      youtubeUrl
      demoUrl
      photo {
        url
      }
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
        }
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
}

const checkUserCourseEnrollment = async (slug, email) => {
  const query = gql`
  query MyQuery {
    userEnrollCourses(
      where: {courseId: "`+ slug + `", 
        userEmail: "`+ email + `"}
    )  {
      completedChapter {
        ... on CompletedChapter {
          id
          chapterId
        }
      }
      courseId
      id
    }
  }
  `
  const result = await request(MASTER_URL, query)
  return result;
}

const saveUserCourseEnrollment = async (slug, email) => {
  const query = gql`
  mutation Mymutation {
    createUserEnrollCourse(
      data: {courseId: "`+ slug + `", 
      courseList: {connect: {slug: "`+ slug + `"}},
       userEmail: "` + email + `"}
    ) {
      id
    }
    publishManyUserEnrollCourses {
      count
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
}


const checkUserMembership = async (email) => {
  const query = gql`
  query MyQuery {
    memberships(where: {email: "`+ email + `",active: true}) {
      id
      createdAt
      email
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
}

export default {
  getCateogory,
  getCourseList,
  checkUserCourseEnrollment,
  saveUserCourseEnrollment,
  checkUserMembership
}





