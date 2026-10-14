const { LoginPage } = require('./LoginPage');
const {WelcomePage} = require('./WelcomePage');
const {HomePage} = require('./HomePage');
const {CartPage} = require('./CartPage');

class POManager
{

constructor(page)
{
  
    this.page = page;
    this.lgnPage = new LoginPage(this.page);
    this.wlcmPage = new WelcomePage(this.page);
    this.homepage = new HomePage(this.page);
    this.cartPage = new CartPage(this.page);

}

getLoginPage()
{
    return this.lgnPage;

}

getWelcomePage()
{
    return this.wlcmPage;


}

getCartPage()
{
    return this.cartPage;

}

getHomePage()
{
    return this.homepage;
}

}
module.exports = {POManager};