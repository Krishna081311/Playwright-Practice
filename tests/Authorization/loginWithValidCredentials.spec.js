const { test, expect } = require('@playwright/test');
const {POManager} = require ('../../PageObjects/POManager');
const dataset = require('../../testData/AuthorizationData/loginData.json');

test('Login to ShoppersStack with Valid Credentials', async ({ page }) => {

   
    const poManager =new  POManager(page);
    

    const loginPage = poManager.getLoginPage();
    const welcomePage = poManager.getWelcomePage();

    await welcomePage.goTo();
    await welcomePage.clickLogin();

    await loginPage.validLogin(dataset.email, dataset.password);



//   await page.goto('https://www.shoppersstack.com/');

//   await page.waitForLoadState('networkidle');
//   await expect(page.getByRole('heading', { name: 'Welcome to ShoppersStack.' })).toBeVisible();
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
//   await page.getByRole('textbox', { name: 'Email' }).fill('krishna081311@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Krishna@123');
//   await page.getByRole('button', { name: 'Login' }).click();

});