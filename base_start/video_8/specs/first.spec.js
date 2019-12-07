const {LoginPage} = require('../page_objects/login.page')


describe('Login', function () {

  const loginPage = new LoginPage()

  it('Login test', async function () {
    await browser.get('http://localhost:5555/')

    await loginPage.login('test', 'test')
    await browser.sleep(25000)
  })
})