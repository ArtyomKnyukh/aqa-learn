import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/main.page.js";
import { CartComponent } from "../pages/components/cart.component.js";

test.use({ ignoreHTTPSErrors: true });

test("Add a single item to the cart", async ({ page }) => {
  const mainPage = new MainPage(page);
  const cart = new CartComponent(page);

  await mainPage.open();
  await expect(mainPage.cartCounter).toHaveText("0");

  const firstCard = mainPage.cards.first();
  const { name, price, calories } = await mainPage.getProductDetails(firstCard);

  await test.step("1. Add item to the cart", async () => {
    await mainPage.addToCart(firstCard);
    await expect(mainPage.cartCounter).toHaveText("1");
  });

  await test.step("2. Open the cart", async () => {
    await mainPage.openCart();
    await expect(cart.cartItems).toHaveCount(1);
  });

  await test.step("3. Check item details", async () => {
    const item = cart.getItemDetails();

    await expect(item.name).toHaveText(name);
    await expect(item.price).toHaveText(price);
    await expect(item.calories).toHaveText(calories);
    await expect(item.quantity).toHaveText("1");
  });

  await test.step("4. Check the totals", async () => {
    await expect(cart.total).toHaveText(`Total: ${price}`);
    await expect(cart.cartCalories).toHaveText(`Calories: ${calories}`);
  });
});
