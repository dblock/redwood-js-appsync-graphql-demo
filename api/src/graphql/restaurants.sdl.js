import gql from 'graphql-tag'

export const schema = gql`
	type Restaurant {
		name: String
		longitude: String
		latitude: String
	}

	type Zip {
		zip: String
		timezone: String
    restaurants: [Restaurant]
  }

  type Query {
    restaurants(zip: String!): Zip
  }
`