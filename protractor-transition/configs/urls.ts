const {BASE_HOST, BASE_PORT} = process.env;

function getBaseUrl() {
  if (!BASE_HOST) {
    return `http://127.0.0.1:4000`;
  }
  if (BASE_HOST.startsWith('http')) {
    return `${BASE_HOST}${BASE_PORT ? ':' + BASE_PORT : ''}`;
  }
  if (!BASE_HOST.startsWith('http')) {
    return `http://${BASE_HOST}${BASE_PORT ? ':' + BASE_PORT : ''}`;
  }
}

export {
  getBaseUrl
};
