import {Locator, Page} from '@playwright/test'

export class HomePage {

    constructor(page) {
        this.page = page;
        this.loginBtn = page.Locator('//*[@id="login-btn"]');
        this.registerBtn = page.Locator('//*[@id="register-btn"]');
        this.cart = page.Locator('//*[@id="cart-icon"]');
        this.addButton = 'button:has-text("Add to Cart")';
    } 

    async open() {
        this.page.goto('https://burgershop-stage.qa-academy.eu/index.php?');
    }
}