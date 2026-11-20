import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { LoginComponent } from '../pages/components/login.component';
import { CartComponent } from '../pages/components/cart.component';
import { CheckoutComponent } from '../pages/components/checkout.component';
import { RegisterComponent } from '../pages/components/register.component';

test.use({ ignoreHTTPSErrors: true });

test.describe('Card Payment', () => {

  let mainPage;
  let loginComponent;
  let cartComponent;
  let checkoutComponent;
  let registerComponent;

  test.beforeEach('Authorization', async ({ page }) => {

    mainPage = new MainPage(page);
    loginComponent = new LoginComponent(page);
    cartComponent = new CartComponent(page);
    checkoutComponent = new CheckoutComponent(page);
    registerComponent = new RegisterComponent(page);

    await mainPage.open();
    await mainPage.startRegister();
    await registerComponent.registration();
    await expect(registerComponent.registerStatus).toHaveText('Registration successful!');
    await loginComponent.login();
    });
  
  test('Card payment', async () => {
    await mainPage.addToCart();
    await cartComponent.openCheckout();
    await checkoutComponent.checkout();
    await expect(checkoutComponent.orderModel).toBeHidden( { timeout: 5000 });
  });
})