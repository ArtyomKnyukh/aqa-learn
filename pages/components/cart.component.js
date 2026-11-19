export class CartComponent {
  constructor(page) {
    this.page = page;

    this.checkoutBtn = page.locator('#checkout-btn');
    this.cartItems = page.locator('#cart-items .cart-item');
    this.total = page.locator('#cart-total');
    this.cartCalories = page.locator('#cart-calories');
  }

  async openCheckout() {
    await this.checkoutBtn.click();
  }

  getItemDetails(index = 0) {
    const item = this.cartItems.nth(index);

    return {
      name: item.locator('.cart-item-title'),
      price: item.locator('.cart-item-price'),
      calories: item.locator('.calorie-badge'),
      quantity: item.locator('.quantity-value'),
    };
  }
}