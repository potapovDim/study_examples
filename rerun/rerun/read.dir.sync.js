const path = require('path')
const fs = require('fs')


function getFilesListWithSubDirs(dirPath, filesList = []) {
  if (!fs.statSync(dirPath).isDirectory()) {
    throw new Error(`First arg is not ad rirectory: ${dirPath}`)
  }

  const filesAndDirs = fs
    .readdirSync(dirPath)
    .map((fileOrDir) => path.resolve(dirPath, fileOrDir))

  filesAndDirs.forEach((fileOrDir) => {
    if (fs.statSync(fileOrDir).isDirectory()) {
      getFilesListWithSubDirs(fileOrDir, filesList)
    } else {
      filesList.push(fileOrDir)
    }
  })

  return filesList
}


module.exports = {
  getFilesListWithSubDirs
}
