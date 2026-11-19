export class MainPage {
  constructor(page) {
    this.page = page;

    this.loginBtn = page.locator('#login-btn');
    this.registerBtn = page.locator('#register-btn');
    this.cart = page.locator('#cart-icon');
    this.userName = page.locator('#user-display-name');

    this.cards = page.locator('.products-container > .row > .col-md-4');
    this.cartCounter = page.locator('#cart-count');
    this.addButton = this.cards.first().locator('.add-to-cart');
  }

  async open() {
    await this.page.goto('https://burgershop-stage.qa-academy.eu/index.php');
  }

  async startRegister() {
    await this.registerBtn.click();
  }

  async startLogin() {
    await this.loginBtn.click();
  }

  async addToCart(card) {
    const button = card ? card.locator('.add-to-cart') : this.addButton;
    await button.click();
  }

  async openCart() {
    await this.cart.click();
  }

  async getProductDetails(card) {
    return {
      name: await card.locator('.burger-title').innerText(),
      price: await card.locator('.burger-price').innerText(),
      calories: await card.locator('.calorie-badge').innerText(),
    };
  }
}