import {provider, pageProvider} from '../../framework';
import {$} from 'protractor';
import {DynamicTableCommonApproach} from './dynamic.table.common.approach';
import {DynamicTable} from './dynamic.table';

const {it, beforeEach} = provider.reporter;
const {loginData} = provider.data;
const {browser} = provider.browser;
const {expect} = provider.packages;


describe('Combains flow', function() {
  beforeEach(async () => {
    await browser.get('/');
    const userData = loginData({username: 'admin', password: 'admin'}).generate().toWeb();
    await pageProvider().main().sendKeys({login: userData});
    await pageProvider().main().click({login: {submit: null}});
    await pageProvider().tables().click({header: {toCombaine: null}});
  });

  afterEach(async () => browser.clearState());

  it('Common approach', async function() {
    const data = await new DynamicTableCommonApproach($('.dynamic_table')).get({expectedCount: 120});
  });

  it.only('Execute script approach', async function() {
    const data = await new DynamicTable($('.dynamic_table')).get({expectedCount: 120});
  });
});
