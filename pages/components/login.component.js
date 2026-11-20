export class LoginComponent {

    constructor(page) {
        this.page = page;
        this.emailField = page.locator('//*[@id="login-email"]');
        this.passwordField = page.locator('//*[@id="login-password"]');
        this.loginBtn = page.locator('//*[@id="login-submit"]');
        this.loginStatus = page.locator('//*[@id="login-status"]');
        this.authContainer = page.locator('//*[@class="auth-container"]');
    }

    async login(email="test@gmail.com", password="123456") {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.loginBtn.click();
    }
}