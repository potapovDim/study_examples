const {execSync} = require('child_process');
const {tryStringify, tryParse} = require('./utils');

function executeSyncRequest(url, method = 'GET', body, headers) {
  let cmd = 'node ./request.js';
  if(body) {
    cmd += ` --body='${tryStringify(body)}'`;
  }
  if(url) {
    cmd += ` --url='${tryStringify(url)}'`;
  }
  if(method) {
    cmd += ` --method='${tryStringify(method)}'`;
  }
  if(headers) {
    cmd += ` --findHeaders='${tryStringify(headers)}'`;
  }

  const responseData = execSync(cmd);
  return tryParse(responseData.toString('utf-8'));
}


const result = executeSyncRequest('http://localhost:4000/login', 'POST', {username: 'adminx', password: 'admin'})
console.log(result.status)
console.log(result.body)
console.log(result.headers)