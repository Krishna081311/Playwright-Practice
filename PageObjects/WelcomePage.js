const { expect } = require("@playwright/test");

class WelcomePage
{
    constructor(page){
    
    this.page = page;
    this.WlcmText = page.getByRole('heading', { name: 'Welcome to ShoppersStack.' });
    this.WlcmLogin = page.getByRole('button', { name: 'Login' });


    }

    async goTo()
{
    await this.page.goto("https://www.shoppersstack.com/");
    await this.page.waitForLoadState('networkidle');
    await expect(this.WlcmText).toBeVisible();
    
}

    async clickLogin(){

        await this.WlcmLogin.click();

    }


}
module.exports = {WelcomePage};