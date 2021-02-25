const path = require('path')
const fsPromise = require('fs/promises')

const statsTryCatch = async function (absUrl, cb) {
  try {
    const stats = await fsPromise.stat(absUrl)
    if (stats[cb]()) {
      return true
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}
const getAbsUrl = function (basePath = __dirname, targetPath) {
  return targetPath ? path.join(basePath, targetPath) : basePath
}

const isDirectory = async function (basePath, targetPath) {
  const absUrl = getAbsUrl(basePath, targetPath)
  return await statsTryCatch(absUrl, 'isDirectory')
}

const isFile = async function (basePath = __dirname, targetPath) {
  const absUrl = getAbsUrl(basePath, targetPath)
  return await statsTryCatch(absUrl, 'isFile')
}
module.exports = {
  getAbsUrl,
  isDirectory,
  isFile
}
