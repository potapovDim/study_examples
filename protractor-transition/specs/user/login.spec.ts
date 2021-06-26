import {MainPage} from '../../pages/main.po';
import {TablePage} from '../../pages/table.po';
import {client} from '../../transition/browser';

describe('WEB › Login ', function() {
  beforeEach(() => client.get('http://localhost:4000/'));

  const loginPage = new MainPage();
  const tablePage = new TablePage();

  it('login', async () => {
    await loginPage.login('admin', 'admin');
    await tablePage.checkThatUserLoggedIn('admin');

    await tablePage.checkThatMachineInList('Хозяин СРК-16В', '16', '6.99', '2.39', '6200', '70', '622286.51');
    await tablePage.addNewMachine('a', 'b', 'b', 'c', 'd', 'e', 'f',);
  });
});
