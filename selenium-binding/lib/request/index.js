const fetch = require('node-fetch');
const url = require('url');

function fetchy(baseUrl, method, path, body) {
  return fetch(baseUrl + path, {
    headers: {'Content-Type': 'application/json'},
    method,
    body: JSON.stringify(body)
  })
}


function getRequest(url) {
  return {
    get: ({path}) => fetchy(url, 'GET', path),
    del: ({path}) => fetchy(url, 'DELETE', path),
    post: ({path, body}) => fetchy(url, 'POST', path, body)
  }
}

module.exports = {
  getRequest
};