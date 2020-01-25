export default ({ location }) => {
  const [longitude, latitude] = location.coordinates

  return {
    latitude,
    longitude,
  }
}
