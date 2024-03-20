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

export default {
  getCateogory
}





