const {waitForElementVisible} = require('./commons/waiters')

class LoginPage {
  constructor() {
    this.rootPage = $('.modal')
    this.username = $('#app > div > div > div > form > div:nth-child(1) > input')
    this.password = $('#app > div > div > div > form > div:nth-child(2) > input')
    this.loginButton = $('#app > div > div > div > form > button')
  }

  async login(username, password) {
    await waitForElementVisible(this.rootPage)
    await this.username.sendKeys(username)
    await this.password.sendKeys(password)
    await this.loginButton.click()
  }
}

module.exports = {
  LoginPage
}

