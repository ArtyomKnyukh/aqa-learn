import {Locator, Page} from '@playwright/test'

export class RegisterPage {

    constructor(page) {
        this.page = page;
        this.fullNameField = page.Locator('//*[@id="register-name"]');
        this.emailField = page.Locator('//*[@id="register-email"]');
        this.password = page.Locator('//*[@id="register-password"]');
        this.registerBtn = page.Locator('//*[@id="register-submit"]');
        this.registerStatus = page.Locator('//*[@id="register-success"]');
    }
}