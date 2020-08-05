import {BaseInterface, decorateService} from '../../lib';
import {urls} from '../config'

class UserService extends BaseInterface {
  constructor(host = urls.userService) {
    super(host);
  }

  getUserData() {
    return this.req.get({path: '/user-data'})
  }

  userLogin(body: {username?: string, password?: string}) {
    return this.req.post({path: '/user-login', body})
  }
}

decorateService(UserService);

export {
  UserService
}
