const rgb2hex = ([r, g, b]) =>{
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16)
    .substr(1)}`;
}

console.log(rgb2hex([255, 32, 255]))
// export default rgb2hex
