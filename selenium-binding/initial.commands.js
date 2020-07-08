const {getRequest} = require('./lib')


const request = getRequest('http://localhost:4444/wd/hub')

const chromeDefaultCaps = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};

const elementIdField = 'element-6066-11e4-a52e-4f735466cecf';


const usernameSelector = 'html body div#app div div#main_page div.modal_wrapper.login_form div.modal form div.form-group input.form-control';
const passwordSelector = 'input[type="password"]';
const submitButtonSelector = 'html body div#app div div#main_page div.modal_wrapper.login_form div.modal button.btn.btn-primary';

test()
async function test() {

  const createSessionResponse = await request.post({path: '/session', body: chromeDefaultCaps})
    .then((resp) => resp.json());

  const navigateToResponse = await request.post({
    path: `/session/${createSessionResponse.sessionId}/url`, body: {
      url: 'http://localhost:4000/'
    }
  }).then((resp) => resp.json())

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


  await (() => new Promise((res) => setTimeout(res, 2500)))();
  const closeSessionResponse = await request.del({path: `/session/${createSessionResponse.sessionId}`})
    .then((resp) => resp.json())

}