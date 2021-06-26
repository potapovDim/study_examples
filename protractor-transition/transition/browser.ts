import {browser} from 'protractor';
import {pubsub, events} from './pubsub';
import {WebDriver} from 'selenium-webdriver';
import * as _http from 'selenium-webdriver/http';

class Client {
	private protClient: typeof browser;
	private seleniumClient: WebDriver;

	constructor() {

		pubsub.subscribe(events.updateClient, this.setCurrentClient.bind(this));
	}

	setCurrentClient(protClient) {
		this.protClient = protClient;
	}

	async initSeleniumClient() {
		if (!this.protClient) {
			this.protClient = pubsub.getCurrentClient();
		}

		if (this.seleniumClient) {
			return;
		}

		const config = await this.protClient.getProcessedConfig();
		const session = await this.protClient.getSession();

		const driver = await new WebDriver(
			// @ts-ignore
			session.id_,
			new _http.Executor(Promise.resolve(config.seleniumAddress)
				.then((url) => new _http.HttpClient(url, null, null))
			)
		);

		pubsub.publish(events.updateSeleniumClient, driver);
		this.seleniumClient = driver;
	}

	async get(url) {
		await this.initSeleniumClient();

		await this.seleniumClient.get(url);
	}
}

const client = new Client();

export {
	client
};
