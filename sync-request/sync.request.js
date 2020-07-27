const {execSync} = require('child_process');
const {tryStringify} = require('./utils');


function executeSyncRequest(url, method = 'GET', body, headers) {
  let cmd = 'node ./request.js';
  if(body) {
    cmd += ` --body=${tryStringify(body)}`;
  }
  if(url) {
    cmd += ` --url=${tryStringify(url)}`;
  }
  if(method) {
    cmd += ` --method==${tryStringify(method)}`;
  }

  const responseData = execSync(cmd);
}