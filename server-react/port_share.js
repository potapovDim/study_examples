const fs = require('fs')
const path = require('path')

const random_port = (length = 4) => {
  const num_str = '01234567890'
  let base_port = '8'
  for(let i = 0; i < length; i++) {
    base_port += num_str[i]
  }
  return base_port
}

const set_random_port = () => {
  const port_share_path = './port_share.json'
  const port = Number(random_port)
  if(fs.existsSync(path.resolve(process.cwd(), port_share_path))) {

  }
}

module.exports = {
  set_random_port
}