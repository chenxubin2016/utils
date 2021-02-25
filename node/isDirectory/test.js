const {isDirectory,isFile} = require('./index')
function test() {
  return new Promise(async resolve => {
    const res = await isDirectory('../../', 'js/')
    resolve(res)
  })
}

test().then(res => {
  console.log(res)
})
