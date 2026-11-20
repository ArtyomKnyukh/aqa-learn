import {BasePage} from './base.page.js'

export class MainPage extends BasePage {

    constructor(page) {
        super(page);
        this.addButton = page.locator('//*[@class="add-to-cart"]').first();
    } 

    async open() {
        await this.page.goto('');
    }

    async startRegister() {
        await this.registerBtn.click();
    }

    async startLogin() {
        await this.loginBtn.click();
    }

    async addToCart() {
        await this.addButton.click();
    }

    async openCart() {
        await this.cart.click();
    }
}