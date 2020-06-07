import {$, $$} from 'protractor'

async function login() {
  await $$('.login_form input').get(0).sendKeys('admin');
  await $$('.login_form input').get(1).sendKeys('admin');
  await $('.login_form button').click()
}

export {
  login
}