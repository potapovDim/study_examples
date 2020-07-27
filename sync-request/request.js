const http = require('http');
const url = require('url');
const {tryStringify, findBody, findHeaders, findMethod, findUrl} = require('./utils');
// remove two first arguments
const args = process.argv; args.splice(0, 2);

function makeRequest(opts = {}) {
  const reqData = opts.reqData;

  delete opts.reqData;

  const acceptJSONHeader = {
    headers: {
      'Accept': 'application/json; charset=utf-8',
      'Content-Type': 'application/json'
    }
  };

  const options = {
    ...opts,
    headers: {
      ...acceptJSONHeader.headers,
      ...opts.headers
    }
  };

  const req = http.request(options, function(response) {
    const data = [];
    response.on('data', data.push.bind(data));

    console.log(data)

    response.on('end', function() {
      console.log(data.join(''), response.statusCode, response.headers);
    })
  });

  if(reqData) {
    req.write(tryStringify(reqData))
  }

  req.end();
}

const opts = {
  reqData: {username: 'adminx', password: 'admin'},
  method: 'POST',
  ...url.parse('http://localhost:4000/login')
}

const reqUrl        = findUrl(args);
const reqMethod     = findMethod(args);
const reqBody       = findBody(args);
const reqHeaders    = findHeaders(args);

// const opts = {
//   reqData           : reqBody,
//   method            : reqMethod,
//   headers           : reqHeaders,
//   ...url(reqUrl)
// }

makeRequest(opts)