function tryStringify(data) {
  try {
    return JSON.stringify(data);
  } catch(error) {
    console.log(error);
    return '';
  }
}

function tryParse(data) {
  try {
    return JSON.parse(data);
  } catch(error) {
    console.log(error)
    return data;
  }
}

function findBody(argvs) {
  const body = argvs.find((i) => i.includes('--body='))
  if(body) {
    return tryParse(body.replace('--body='));
  }
}

function findUrl(argvs) {
  const body = argvs.find((i) => i.includes('--url='))
  if(body) {
    return tryParse(body.replace('--url='));
  }
}

function findHeaders(argvs) {
  const headers = argvs.find((i) => i.includes('--headers='))
  if(headers) {
    return tryParse(headers.replace('--headers='));
  }
}

function findMethod(argvs) {
  const method = argvs.find((i) => i.includes('--method='))
  if(method) {
    return tryParse(method.replace('--method='));
  }
}

module.exports = {
  tryStringify,
  tryParse,
  findBody,
  findUrl,
  findHeaders,
  findMethod
}
