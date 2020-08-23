import {buildRequest, IRequest, IRespose} from './request';
import {expect} from 'chai';
import {chainProxify} from 'proxify-method';
import {logger} from './report'

interface ICommonResponseData extends Promise<IRespose> {
  assertCode(statusCode: number): ICommonResponseData;
  assertRequiredKeys(expectedKeys: string[]): ICommonResponseData;
}

function assertCode(expectedStatus, {status}) {
  logger(`\t assert status, should be ${expectedStatus}`);
  expect(expectedStatus).to.equal(status);
}

function assertRequiredKeys(expectedKeys: string[], {body}) {
  logger(`\t assert required keys, body should have ${expectedKeys.join(', ')}`);
  expect(body).to.include.keys(expectedKeys);
}

class BaseInterface {
  protected req: IRequest;

  constructor(host: string) {
    this.req = buildRequest(host);

      chainProxify('assertCode', assertCode)
      .chainProxify('assertRequiredKeys', assertRequiredKeys)
      .initChainModel(this);
  }
}


export {
  BaseInterface,
  ICommonResponseData
}

