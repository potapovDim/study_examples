import {WebElement, By, WebDriver} from 'selenium-webdriver';
import {pubsub, events} from './pubsub';


const SELENIUM_ELEMENT_METHODS = [
	'click', 'sendKeys', 'getText',
];


function getStrategy(selector: string) {
	if (selector.includes('xpath=')) {
		return By.xpath(selector.replace('xpath=', ''));
	}

	return By.css(selector);
}


class TransitionElements {
	private selector: string;
	private client: WebDriver;
	private elements: WebElement[];
	private getParent: any;


	constructor(selector, client, getParentElement?) {
		this.selector = selector;
		this.client = client;
		this.getParent = getParentElement;

		pubsub.subscribe(events.updateSeleniumClient, this.setSeleniumClient.bind(this));
	}

	setSeleniumClient(client) {
		this.client = client;
	}

	async getElement(index) {
		if (!this.client) {
			this.client = pubsub.getCurrentClient();
		}

		if (this.getParent) {
			const parent = await this.getParent() as WebElement;
			this.elements = await parent.findElements(getStrategy(this.selector));
		} else {
			this.elements = await this.client.findElements(getStrategy(this.selector));
		}

		if (index === -1) {
			index = this.elements.length - 1;
		}
		console.log(index);
		return this.elements[index];
	}

	last() {
		return new TransitionElement(this.selector, this.client, this.getElement.bind(this, -1), true);
	}
}


class TransitionElement {
	private selector: string;
	private client: WebDriver;
	private element: WebElement;
	private getParent: any;
	private usePagent: boolean;

	constructor(selector, client, getParentElement?, usePagent?) {
		this.selector = selector;
		this.client = client;
		this.getParent = getParentElement;
		this.usePagent = usePagent;

		pubsub.subscribe(events.updateSeleniumClient, this.setSeleniumClient.bind(this));

		SELENIUM_ELEMENT_METHODS.forEach((methodName) => {
			this[methodName] = async (...args) => {
				await this.getElement();
				return this.element[methodName].call(this.element, ...args);
			};
		});
	}


	setSeleniumClient(client) {
		this.client = client;
	}

	async getElement() {
		if (this.client) {
			this.client = pubsub.getCurrentClient();
		}

		if (this.getParent) {
			const parent = await this.getParent() as WebElement;
			if (this.usePagent) {

				this.element = parent;

				return parent;
			}

			this.element = await parent.findElement(getStrategy(this.selector));
		} else {
			this.element = await this.client.findElement(getStrategy(this.selector));
		}

		return this.element;
	}

	$(selector) {
		return new TransitionElement(selector, this.client, this.getElement.bind(this));
	}
}

function _$(selector, root?) {
	let getParent = null;
	if (root) {
		getParent = () => {
			return root;
		};
	}
	return new TransitionElement(selector, null, getParent);
}

function _$$(selector, root?) {
	let getParent = null;
	if (root) {
		getParent = () => {
			return root;
		};
	}
	return new TransitionElements(selector, null, getParent);
}


export {
	_$,
	_$$
};
