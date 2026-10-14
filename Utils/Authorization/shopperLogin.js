const {POManager} = require ('../../PageObjects/POManager');
const dataset = require('../../testData/AuthorizationData/loginData.json')

class shopperLogin{

constructor(page){

    this.page = page;
    
}

async loginAsShopper()
{

    const poManager = new POManager(this.page);
    
    const loginPage = poManager.getLoginPage();
    const welcomePage = poManager.getWelcomePage();

    await welcomePage.goTo();
    await welcomePage.clickLogin();

    await loginPage.validLogin(dataset.email, dataset.password);


}



}

module.exports = {shopperLogin};