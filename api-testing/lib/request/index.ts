import * as fetchy from 'node-fetch';
import * as QS from 'querystring';
import * as URL from 'url';
import {logger} from '../report'

interface IRequestParams {
  path: string;
  body?: any
  headers?: object;
  queries?: object;
}

interface IRespose {
  body: any;
  status: number;
  headers: object;
}

interface IRequest {
  get(arg: IRequestParams): Promise<IRespose>;
  post(arg: IRequestParams): Promise<IRespose>;
  put(arg: IRequestParams): Promise<IRespose>;
  del(arg: IRequestParams): Promise<IRespose>
}

const methods = {
  post: 'POST',
  del: 'DELETE',
  get: 'GET',
  put: 'PUT'
}

function createReqBody(body: any, method: string) {
  if (method === methods.get) {
    return;
  }

  if (typeof body === 'object') {
    return JSON.stringify(body);
  } else if (typeof body === 'string') {
    return body;
  }
}

async function _fetch(host: string, method: string, {path, body, headers, queries}) {
  queries = queries ? `?${QS.stringify(queries)}` : '';
  body = createReqBody(body, method);
  headers = headers || {'Content-Type': 'application/json'};


  const requestUrl = `${URL.resolve(host, path)}${queries}`;
  logger(`\t${method} Request to ${requestUrl}`, body, headers, queries);
  const response = await fetchy(requestUrl, {method, headers, body});

  const responseHeaders = Array
    .from(response.headers.entries())
    .reduce((acc, [key, value]) => {acc[key] = value.toLowerCase(); return acc}, {})

  const responseBodyMethod = responseHeaders['content-type'].includes('application/json') ? 'json' : 'text'
  const responseData = {
    body: await response[responseBodyMethod](),
    status: response.status,
    headers: responseHeaders
  };

  logger(`\tResponse data`, responseData.body, responseData.status);

  return responseData;
}

function buildRequest(host: string): IRequest {
  return {
    get: _fetch.bind(_fetch, host, methods.get),
    post: _fetch.bind(_fetch, host, methods.post),
    put: _fetch.bind(_fetch, host, methods.put),
    del: _fetch.bind(_fetch, host, methods.del)
  }
}


export {
  buildRequest,
  IRequest,
  IRespose
}