const hex2rgb = hex => {
  return [1, 3, 5].map((h) => parseInt(hex.substring(h, h + 2), 16));
}
console.log(hex2rgb("#ffffff"))
export default hex2rgb
