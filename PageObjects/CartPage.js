const {expect} = require('@playwright/test');

class CartPage
{
    constructor(page){

        this.page = page;
        this.Productname = "peterengland";
        this.RemoveFromcart = this.page.getByRole('button', { name: 'Remove from cart' });
        this.ConfirmRemove = this.page.getByRole('button', { name: 'Yes' });
        this.Emptycart = this.page.locator('#root');

        
    }

async verifyProdIncart(){

        await expect(this.page.locator('#root')).toContainText(this.Productname);

}

async removeProductFromCart(){

    await this.RemoveFromcart.click();
    await this.ConfirmRemove.click();
    await expect(this.Emptycart).toContainText('Your cart is empty!');

}

}
module.exports = {CartPage};