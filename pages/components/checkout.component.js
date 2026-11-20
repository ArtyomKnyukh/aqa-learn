export class CheckoutComponent {

    constructor(page) {
        this.page = page;
        this.nameField = page.locator('//*[@id="name"]');
        this.phoneField = page.locator('//*[@id="phone"]');
        this.addressField = page.locator('//*[@id="address"]');
        this.placeOrderBtn = page.locator('//*[@class="btn btn-primary w-100"]');
        this.cashRadioBtn = page.locator('//*[@id="cash"]');
        this.cardRadioBtn = page.locator('//*[@id="card"]');
        this.orderModel = page.locator('//*[@id="order-frame"]');
    } 

    async checkout(name="Bogdan", phone="1234567890", address="123 Main St") {
        await this.nameField.fill(name);
        await this.phoneField.fill(phone);
        await this.addressField.fill(address);
        await this.cardRadioBtn.check();
        await this.placeOrderBtn.click();
    }
}