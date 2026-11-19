export class PizzaPage {
    constructor(page) {
        this.page = page;

        // Link to the pizza section
        this.pizzaSectionBtn = page.locator('a[href="/pages/pizza.php"]');

        // Margherita Pizza сard
        this.margheritaCard = page.locator('.burger-body').filter({ hasText: 'Margherita' });

        // Size buttons inside the Margherita card
        this.smallBtn = this.margheritaCard.locator('[data-size="small"]');
        this.mediumBtn = this.margheritaCard.locator('[data-size="medium"]');
        this.largeBtn = this.margheritaCard.locator('[data-size="large"]');

        // The price and calories are inside the Margherita card
        this.price = this.margheritaCard.locator('.burger-price');
        this.calories = this.margheritaCard.locator('.calorie-badge');
    }
    async openPizzaSection() {
        await this.pizzaSectionBtn.click();
    }

    async selectSmall() {
        await this.smallBtn.click();
    }

    async selectMedium() {
        await this.mediumBtn.click();
    }

    async selectLarge() {
        await this.largeBtn.click();
    }
}