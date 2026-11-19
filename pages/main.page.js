import { CartComponent } from './components/cart.component.js';

export class MainPage{
  constructor(page){
    this.page=page;
    this.productList= page.locator('div.container.products-container > .row > .col-md-4');
    this.cart= new CartComponent(page);
  }

  async addItemToTheCart(itemIndex) {
    if (this.cart.opened) {
    await this.cart.clickCartIcon();
    this.cart.opened = false;
    }

    const productCard = this.productList.nth(itemIndex);
    const itemButton = productCard.locator("button.add-to-cart");
    const productName= await productCard.locator('button.add-to-cart').getAttribute('data-name');
    const calories= await productCard.locator('button.add-to-cart').getAttribute('data-calories');
    await itemButton.click();
    this.cart.opened = true;
    return { name: productName, calories: +calories };
  }

  async openPage(){
    await this.page.goto("https://burgershop-stage.qa-academy.eu/index.php");
  }
}