export const QUERY = gql`
  query RestaurantsQuery {
    restaurants {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ restaurants }) => {
  return JSON.stringify(restaurants)
}
