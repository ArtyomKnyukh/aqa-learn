import { test, expect} from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { PizzaPage } from '../pages/pizza.page';

test.use({ ignoreHTTPSErrors: true });

test.describe('Pizza size button updates price and calories', () => {
    let mainPage;
    let pizzaPage;

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        pizzaPage = new PizzaPage(page);

        await mainPage.open();
        await pizzaPage.openPizzaSection();
    });
    test('Margherita: Small is default, Medium and Large update price and calories', async () => {
        // Check that the size buttons are visible and that Small is selected by default.
        await expect(pizzaPage.smallBtn).toBeVisible();
        await expect(pizzaPage.mediumBtn).toBeVisible();
        await expect(pizzaPage.largeBtn).toBeVisible();

        await expect(pizzaPage.smallBtn).toHaveClass(/active/);
        await expect(pizzaPage.mediumBtn).not.toHaveClass(/active/);
        await expect(pizzaPage.largeBtn).not.toHaveClass(/active/);

        // Remember the initial price and calories (Small size)
        const smallPrice = (await pizzaPage.price.textContent()).trim();
        const smallCalories = (await pizzaPage.calories.textContent()).trim();

        // Medium size - Check the button backlight and the price/calorie update
        await pizzaPage.selectMedium();
        await expect(pizzaPage.mediumBtn).toHaveClass(/active/);
        await expect(pizzaPage.smallBtn).not.toHaveClass(/active/);

        await expect(pizzaPage.price).not.toHaveText(smallPrice);
        await expect(pizzaPage.calories).not.toHaveText(smallCalories);

        // Remember the initial price and calories (Medium size)
        const mediumPrice = (await pizzaPage.price.textContent()).trim();
        const mediumCalories = (await pizzaPage.calories.textContent()).trim();

        // Large size -> Check the button backlight and the price/calorie update
        await pizzaPage.selectLarge();
        await expect(pizzaPage.largeBtn).toHaveClass(/active/);
        await expect(pizzaPage.mediumBtn).not.toHaveClass(/active/);

        await expect(pizzaPage.price).not.toHaveText(mediumPrice);
        await expect(pizzaPage.calories).not.toHaveText(mediumCalories);
    });
});
