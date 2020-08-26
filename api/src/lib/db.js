// See https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor
// for options.

import { GraphQLClient } from 'graphql-request'

export const request = async (query, variables) => {
  const endpoint = process.env.APPSYNC_API_ENDPOINT_URL

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'x-api-key': process.env.APPSYNC_API_KEY,
    },
  })

  try {
    return await graphQLClient.request(query, variables)
  } catch (error) {
    console.log(error)
    return error
  }
}