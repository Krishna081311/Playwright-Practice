const {test} = require ('@playwright/test');
const {POManager} = require ('../../PageObjects/POManager');
const {shopperLogin} = require('../../Utils/Authorization/shopperLogin');

test( 'Add Product to Cart', async ({page})=> {

const shopperlogin = new shopperLogin(page);

await shopperlogin.loginAsShopper();
    const poManager = new POManager(page);

    const homePage = poManager.getHomePage();
    const CartPage = poManager.getCartPage();

    await homePage.searchAndAddtocart();
    await CartPage.verifyProdIncart();
    await CartPage.removeProductFromCart();






//   await page.locator('#search').click();
//   await page.locator('#search').fill('shirts');
//   await page.locator('#search').press('Enter');
//   await page.getByTestId('SearchIcon').click();
//   await page.getByText('Formals shirt').click();
//   await page.getByRole('button', { name: 'add to cart' }).click();
//   await page.getByRole('link', { name: '1' }).click();
//   await expect(page.locator('#root')).toContainText('Formals shirt');
//   await page.getByRole('button', { name: 'Remove from cart' }).click();
//   await page.getByRole('button', { name: 'Yes' }).click();





}

)