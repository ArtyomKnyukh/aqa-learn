// @ts-check
import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page';

test.describe("UI-tests for BurgerShop", { tag: ['@ui'] }, () => {
  test('Verify correctness of kcal calculation of the order', async ({ page }) => {
  const mainPage = new MainPage(page);
  let totalCalories=0;
  await mainPage.openPage();
  const item1 = await mainPage.addItemToTheCart(0);
  totalCalories += item1.calories;
  const item2 = await mainPage.addItemToTheCart(1);
  totalCalories += item2.calories;
  const item3 = await mainPage.addItemToTheCart(2);
  totalCalories += item3.calories;
  await expect(await mainPage.cart.getCaloriesNearPrice()).toEqual(totalCalories);
  await expect(await mainPage.cart.getCaloriesBadge()).toEqual(await mainPage.cart.getCaloriesNearPrice());
  });
})