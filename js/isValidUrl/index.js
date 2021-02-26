export default isValidUrl = function (url) {
  try {
    new URL(url)
    return true
  } catch (e) {
    return false
  }
}
