const fetch = require('node-fetch')
const url = require('url')

async function _fetchy(slowTime, method, timeout, url, body, opts = {}) {

  const headers = opts.headers || {}
  headers["Content-Type"] = "application/json"
  if(method == "GET") {body = undefined}

  if(slowTime) {await (() => new Promise(res => setTimeout(res, slowTime)))()}

  const response = await fetch(url, {
    method, headers, timeout,
    body: typeof body === 'object' ? JSON.stringify(body) : body
  })

  const contentType = response.headers.get("content-type")

  if(contentType && contentType.includes("application/json")) {
    const body = await response.json()
    if(response.status > 300) {
      throw new Error(`Щось пішло не по плану  ${await response.text()}`)
    }
    return {body, headers: response.headers, status: response.status}
  } else {
    if(response.status > 300) {
      throw new Error(`Відповідь прийшла в форматі text варто перевірити запит${await response.text()}`)
    }
    return {body: await response.text(), headers: response.headers, status: response.status}
  }
}

const fetchy = (slowTime, method, URL, timeout, path, body, opts) => {
  return _fetchy(slowTime, method, timeout, url.resolve(URL, path), body, opts)
}

module.exports = (timeout = 5000, slowTime = 0, baseUrl) => {
  return {
    post: fetchy.bind(fetch, slowTime, 'POST', baseUrl, timeout),
    del: fetchy.bind(fetch, slowTime, 'DELETE', baseUrl, timeout),
    get: fetchy.bind(fetch, slowTime, 'GET', baseUrl, timeout),
  }
}