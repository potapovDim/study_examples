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

    response.on('end', function() {
      process.stdout.write(tryStringify({
        body: data.join(''),
        status: response.statusCode,
        headers: response.headers
      }));
    })
  });

  if(reqData) {
    req.write(tryStringify(reqData))
  }

  req.end();
}

const reqUrl        = findUrl(args);
const reqMethod     = findMethod(args);
const reqBody       = findBody(args);
const reqHeaders    = findHeaders(args);

const opts = {
  reqData           : reqBody,
  method            : reqMethod,
  headers           : reqHeaders,
  ...url.parse(reqUrl)
}

makeRequest(opts)