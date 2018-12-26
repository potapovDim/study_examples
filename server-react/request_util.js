const fetch = require('node-fetch')

let URL = null

async function _fetchy(method, url, body, opts) {

  opts = opts || {};
  const headers = opts.headers || {}
  if(method == "GET")
    body = undefined
  if(body != null) {
    headers["Content-Type"] = "application/json"
  }
  if(opts.token) {
    headers.authorization = "Bearer " + opts.token
  }

  const response = await fetch(url, Object.assign({
    method, headers, body: typeof body === 'object' ? JSON.stringify(body) : body
  }, opts))


  const contentType = response.headers.get("content-type")
  if(contentType && contentType.includes("application/json")) {
    const body = await response.json()
    return {body, status: response.status, headers: response.headers}
  } else {
    return {body: await response.text(), status: response.status, headers: response.headers}
  }
}

const fetchy = (method, path, body, opts) => _fetchy(method, URL + path, body, opts);


module.exports = function(host) {
  URL = host
  return {
    fetchy_util: {
      get: fetchy.bind(global, "GET"),
      put: fetchy.bind(global, "PUT"),
      post: fetchy.bind(global, "POST"),
      del: fetchy.bind(global, "DELETE")
    }
  }
};