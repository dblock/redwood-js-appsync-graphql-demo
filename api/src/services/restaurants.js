import { request } from 'src/lib/db'
import { gql } from 'graphql-request'

export const restaurants = async (args) => {
  const query = gql`query GetZip($zip: String!) {
    get_zip(zip: $zip) {
      zip
      timezone
      restaurants {
        name
        longitude
        latitude
      }
    }
  }`

  var data = await request(query, args)
  return data.get_zip
}