import {BaseInterface, decorateService, ICommonResponseData} from '../../lib';
import {urls} from '../config'

class AdminService extends BaseInterface {
  constructor(host = urls.adminService) {
    super(host);
  }

  getAdminData(): ICommonResponseData {
    return this.req.get({path: '/admin-user-details'}) as any;
  }
}
decorateService(AdminService);

export {
  AdminService
}
