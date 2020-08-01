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
  console.log(cmd);

  const responseData = execSync(cmd);
  return tryParse(responseData.toString('utf-8'));
}

console.log('Sync code call 1')
const result = executeSyncRequest('http://localhost:4000/get_machines')
console.log(result.status)
console.log(result.body)
console.log('Sync code call 2')
console.log('Sync code call 2')
// console.log(result.headers)