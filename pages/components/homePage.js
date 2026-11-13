import {Locator, Page} from '@playwright/test'

export class homePage {

    constructor(page) {
        this.page = page;
        this.loginBtn = page.Locator('//*[@id="login-btn"]');
        this.registerBtn = page.Locator('//*[@id="register-btn"]');
        this.cart = page.Locator('//*[@id="cart-icon"]');
    } 

    async open() {
        this.page.goto('https://burgershop-stage.qa-academy.eu/index.php?');
    }
}