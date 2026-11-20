export class BasePage {

    constructor(page) {
        this.page = page;
        this.loginBtn = page.locator('//*[@id="login-btn"]');
        this.registerBtn = page.locator('//*[@id="register-btn"]');
        this.cart = page.locator('//*[@id="cart-icon"]');
        this.userName = page.locator('//*[@id="user-display-name"]');
        
    }

}