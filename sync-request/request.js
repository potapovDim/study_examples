const http = require('http');
const url = require('url');

function tryStringify(data) {
  if(typeof data === 'string') {
    return data;
  } else {
    try {
      return JSON.stringify(data);
    } catch(error) {
      console.log(error);
      return '';
    }
  }
}

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
    port: 4000,
    host: '127.0.0.1',
    method: 'GET',
    path: '/',

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
      console.log('END', data.join(''))
    })
  });

  if(reqData) {
    req.write(tryStringify(reqData))
  }

  req.end();
}


const opts = {
  reqData: {username: 'admin', password: 'admin'},
  port: 4000,
  host: '127.0.0.1',
  method: 'POST',
  path: '/login',
}

makeRequest()
makeRequest(opts)