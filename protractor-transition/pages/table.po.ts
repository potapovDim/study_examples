import {$} from 'protractor';
import {waitFor} from '../transition/wait';
import {expect} from 'chai';
import {_$$} from '../transition/transition.element';

class TablePage {

	private greetingMessage: any;
	private manufacturer: any;
	private volume: any;
	private length: any;
	private width: any;
	private weight: any;
	private power: any;
	private price: any;
	private lastRow: any;
	private addButton;

	constructor() {
		this.greetingMessage = $('.header h3');
		// machine
		this.manufacturer = $('input[placeholder="Виробник"]');
		this.volume = $('input[placeholder="Робочий об\'єм"]');
		this.length = $('input[placeholder="Довжина"]');
		this.width = $('input[placeholder="Ширина"]');
		this.weight = $('input[placeholder="Маса"]');
		this.power = $('input[placeholder="Потужність трактора"]');
		this.price = $('input[placeholder="Ціна"]');
		this.addButton = $('.btn.btn-success');

		this.lastRow = _$$('tbody tr').last();
	}

	async checkThatUserLoggedIn(username) {
		await waitFor(async () => {

			return await this.greetingMessage.isDisplayed().then((result) => result, () => false);

		}, {timeout: 5000, message: 'Message should be visible'});
		expect(await this.greetingMessage.getText()).to.includes(username);
	}

	async addNewMachine(
		manufacturer,
		volume,
		length,
		width,
		weight,
		power,
		price,
	) {
		await this.manufacturer.sendKeys(manufacturer);
		await this.volume.sendKeys(volume);
		await this.length.sendKeys(length);
		await this.width.sendKeys(width);
		await this.weight.sendKeys(weight);
		await this.power.sendKeys(power);
		await this.price.sendKeys(price);
		await this.addButton.click();
	}

	async checkThatMachineInList(
		manufacturer,
		volume,
		length,
		width,
		weight,
		power,
		price,
	) {
		const lastRowText = await this.lastRow.getText();
		expect(lastRowText).to.includes(manufacturer);
		expect(lastRowText).to.includes(volume);
		expect(lastRowText).to.includes(length);
		expect(lastRowText).to.includes(width);
		expect(lastRowText).to.includes(weight);
		expect(lastRowText).to.includes(power);
		expect(lastRowText).to.includes(price);
	}
}

export {
	TablePage
};
