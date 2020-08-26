export const QUERY = gql`query($zip: String!) {
  restaurants(zip: $zip) {
    zip
    timezone
    restaurants {
      name
      longitude
      latitude
    }
  }
}`

export const Loading = () => <div>Loading ...</div>

export const Empty = () => <div>No zip yet!</div>

export const Failure = ({ error, zip }) => {
  return <div>Error loading zip {zip}: {error.message}</div>
}

export const Success = ({ restaurants }) => {
  return <div>
    <div>
      <h2>{restaurants.zip}</h2>
      <h3>{restaurants.timezone}</h3>
    </div>
    {restaurants.restaurants.map(r =>
      <div>
        <div>{r.name} ({r.longitude}:{r.latitude})</div>
        <iframe width="300" height="170" frameborder="0" scrolling="no"
          src={"https://www.google.com/maps/embed/v1/place?key=" + process.env.GOOGLE_MAPS_API_KEY + "&q=" + r.latitude + "," + r.longitude}
        ></iframe>
      </div>
    )}
  </div>
}
