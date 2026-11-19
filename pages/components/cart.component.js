export class CartComponent{
  constructor(page){
    this.page=page;
    this.opened=false;
    this.cartIcon = page.locator('#cart-icon');
    this.caloriesNearPrice = page.locator('#cart-calories');
    this.caloriesBadge=page.locator('.calorie-badge');
  }

  async getCaloriesNearPrice() {
    let calories = (await this.caloriesNearPrice.textContent()).replace(/[^0-9-]/g, "");
    return +calories;
  }
  
  async getCaloriesBadge() {
    let calories = (await this.caloriesBadge.textContent()).replace(/[^0-9-]/g, "");
    return +calories;
  }
  async clickCartIcon() {
    this.opened=!this.opened;
    await this.cartIcon.click();
  }
}