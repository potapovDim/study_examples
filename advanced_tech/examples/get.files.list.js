const path = require('path')
const fs = require('fs')

function getFilesList(pathToDir, filesList = []) {
  if(!fs.existsSync(pathToDir)) {
    throw Error(`${pathToDir} does not exist`)
  }
  const initialList = fs.readdirSync(pathToDir)
  initialList.forEach((pathTo) => {
    const joinedPath = path.join(pathToDir, pathTo)
    if(fs.statSync(joinedPath).isDirectory()) {
      filesList = getFilesList(joinedPath, filesList)
    } else {
      filesList.push(joinedPath)
    }
  })
  return filesList
}
