
class HomePage{


    constructor(page){

    this.page = page;
    const Productname = "peterengland";
    this.searchField = page.locator('#search');
    this.searchIcon = page.getByTestId('SearchIcon');
    this.Product = page.getByText(Productname);
    this.addToCartBtn = page.getByRole('button', { name: 'add to cart' });
    this.cartBtn = page.getByRole('link', { name: '1' });


    }

async searchAndAddtocart(){
    await this.searchField.click();
    await this.searchField.fill('shirts');
    await this.searchIcon.click();
    await this.Product.click();
    await this.addToCartBtn.click();
    await this.cartBtn.click();
    await this.page.waitForLoadState('networkidle');

}


}
module.exports = {HomePage};
