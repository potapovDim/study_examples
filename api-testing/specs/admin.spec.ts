import {expect} from 'chai';
import {serviceProvider} from '../framework'

describe('Admin', function() {
  it('admin-data', async () => {

    const {status, body, headers} = await serviceProvider.admin.getAdminData()
      .assertRequiredKeys(['username', 'postal_code', 'admin'])
      .assertCode(201);

    // assertCode(201, {status});
    // assertRequiredKeys(['username', 'postal_code', 'admin'], {body});
  })
})
