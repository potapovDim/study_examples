const fs = require('fs')
const path = require('path')

function getContent(item) {
  return fs.readFileSync(path.resolve(process.cwd()`./${item}.html`))
}

module.exports = {
  getContent
}
