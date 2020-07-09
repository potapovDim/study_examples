const {getRequest} = require('./lib')


const request = getRequest('http://localhost:4444/wd/hub')

const chromeDefaultCaps = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};

const elementIdField = 'element-6066-11e4-a52e-4f735466cecf';



class ElementOwnBinding {
  constructor(cssSelector, sessionId) {
    this.sessionId = sessionId;
    this.cssSelector = cssSelector;
    this.elemenId = null;
  }

  async initElement() {
    const resp = await request.post({
      path: `/session/${this.sessionId}/element`, body: {
        using: 'css selector', value: this.cssSelector
      }
    }).then((resp) => resp.json())
    this.elemenId = resp.value[elementIdField];
  }


  async sendKeys(stringValue) {
    if(!this.elemenId) {
      await this.initElement()
    }


    const resp = await request.post({
      path: `/session/${this.sessionId}/element/${this.elemenId}/value`,
      body: {text: stringValue, value: stringValue.split('')}
    }).then((resp) => resp.text())
  }

  async click() {
    if(!this.elemenId) {
      await this.initElement()
    }

    const resp = await request.post({
      path: `/session/${this.sessionId}/element/${this.elemenId}/click`,
      body: {button: 0}
    }).then((resp) => resp.text());
  }
}



const usernameSelector = 'input.form-control';
const passwordSelector = 'input[type="password"]';
const submitButtonSelector = '.login_form button.btn.btn-primary';

test()
async function test() {

  const createSessionResponse = await request.post({path: '/session', body: chromeDefaultCaps})
    .then((resp) => resp.json());

  const username = new ElementOwnBinding(usernameSelector, createSessionResponse.sessionId);
  const password = new ElementOwnBinding(passwordSelector, createSessionResponse.sessionId);
  const submit = new ElementOwnBinding(submitButtonSelector, createSessionResponse.sessionId);

  const navigateToResponse = await request.post({
    path: `/session/${createSessionResponse.sessionId}/url`,
    body: {
      url: 'http://localhost:4000/'
    }
  }).then((resp) => resp.json());

  await username.sendKeys('admin');
  await password.sendKeys('admin');
  await submit.click()


  await (() => new Promise((res) => setTimeout(res, 5500)))();

  const closeSessionResponse = await request.del({path: `/session/${createSessionResponse.sessionId}`})
    .then((resp) => resp.json())







  /*

    const usernameElementResponse = await request.post({
      path: `/session/${createSessionResponse.sessionId}/element`, body: {
        using: 'css selector', value: usernameSelector
      }
    }).then((resp) => resp.json())


    const sendKeysToUsernameResponse = await request.post({
      path: `/session/${createSessionResponse.sessionId}/element/${usernameElementResponse.value[elementIdField]}/value`,
      body: {text: 'admin', value: 'admin'.split('')}
    }).then((resp) => resp.text())


    const passworElementResponse = await request.post({
      path: `/session/${createSessionResponse.sessionId}/element`, body: {
        using: 'css selector', value: passwordSelector
      }
    }).then((resp) => resp.json())

    const sendKeysToPasswordResponse = await request.post({
      path: `/session/${createSessionResponse.sessionId}/element/${passworElementResponse.value[elementIdField]}/value`,
      body: {text: 'admin', value: 'admin'.split('')}
    }).then((resp) => resp.text())

    const submitButtonElementResponse = await request.post({
      path: `/session/${createSessionResponse.sessionId}/element`, body: {
        using: 'css selector', value: submitButtonSelector
      }
    }).then((resp) => resp.json())

    const clickOnSubmitButtonResponse = await request.post({
      path: `/session/${createSessionResponse.sessionId}/element/${submitButtonElementResponse.value[elementIdField]}/click`,
      body: {button: 0}
    }).then((resp) => resp.text());

  */
}