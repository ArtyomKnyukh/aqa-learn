export class RegisterComponent {

    constructor(page) {
        this.page = page;
        this.fullNameField = page.locator('//*[@id="register-name"]');
        this.emailField = page.locator('//*[@id="register-email"]');
        this.passwordField = page.locator('//*[@id="register-password"]');
        this.registerBtn = page.locator('//*[@id="register-submit"]');
        this.registerStatus = page.locator('//*[@id="register-success"]');
    }

    async registration(fullname="Bogdan", email="test@gmail.com", password="123456") {
        await this.fullNameField.fill(fullname);
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.registerBtn.click();

    }
}