const fs = require('fs')
const path = require('path')

const random_port = (length = 4) => {
  const num_str = '01234567890'
  let base_port = '8'
  for(let i = 0; i < length - 1; i++) {
    base_port += num_str[i]
  }
  return base_port
}

const set_random_port = () => {
  const port_share_path = './port_share.json'
  const port = Number(random_port)
  const write_port_obj = () => {
    const PORT = random_port()
    const port_obj = {PORT}
    fs.writeFileSync(path.resolve(process.cwd(), port_share_path), JSON.stringify(port_obj))
    return PORT
  }
  if(fs.existsSync(path.resolve(process.cwd(), port_share_path))) {
    fs.unlink(port_share_path)
    return write_port_obj()
  } else {
    return write_port_obj()
  }
}

module.exports = {
  set_random_port
}