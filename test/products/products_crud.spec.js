const homePage = require('../page_objects/home.page');
const addProductPage = require('../page_objects/add-product.page');
const viewProductPage = require('../page_objects/view-product.page');

beforeEach(function() {
    browser.get('');
  });

it('should create a product', function(){

    // click add products

    homePage.addProduct.click();

    // fill out form
    addProductPage.productName.sendKeys("turbot")
    addProductPage.productDescription.sendKeys("fish")
    addProductPage.productPrice.sendKeys("100")

    // click submit
    addProductPage.submitButton.click()

    // check product name
    expect(viewProductPage.productName({name:"turbot"}).isDisplayed()).toBeTruthy();

})



