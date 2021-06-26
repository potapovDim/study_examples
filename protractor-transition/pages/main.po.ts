import {_$} from '../transition/transition.element';

class MainPage {

	private username: any;
	private password: any;
	private loginBtn: any;

	constructor() {
		this.username = _$('.login_form').$('[placeholder="Ім\'я користувача"]');
		this.password = _$('.login_form [placeholder="пароль"]');
		this.loginBtn = _$('.login_form button');
	}

	async login(username, password) {
		await this.username.sendKeys(username);
		await this.password.sendKeys(password);
		await this.loginBtn.click();
	}
}

export {
	MainPage
};
