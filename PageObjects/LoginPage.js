const { expect } = require("@playwright/test");

class LoginPage
{
    constructor(page){
    
    this.page = page;
    this.LoginLink = page.getByRole('link', { name: 'Login' });
    this.emailTF = page.getByRole('textbox', { name: 'Email' });
    this.PasswordTF = page.getByRole('textbox', { name: 'Password' });
    this.LoginButton = page.getByRole('button', { name: 'Login' });
    


    }


async validLogin(emailID,password)
{
    await  this.emailTF.fill(emailID);
     await this.PasswordTF.fill(password);
     await this.LoginButton.click();
     await this.page.waitForLoadState('networkidle');
     await expect(this.page).toHaveTitle('ShoppersStack | Home');
    

}

}
module.exports = {LoginPage};
