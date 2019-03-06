# test-protractor-course

Set up your GitHub repository with a README and .gitignore file

 npm init -y

 npm install protractor --save-dev
 npm install protractor-beautiful-reporter --save-dev
 npm install jasmine-data-provider --save-dev // what's this?

Then create your framework:
> test
>> page_objects
>> products

then create your `protractor.conf.js` in `tests`:

var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:8080/',

    capabilities: {
        'browserName': 'chrome'
      },

    //   multiCapabilities: [{
    //     'browserName': 'firefox'
    //   }, {
    //     'browserName': 'chrome'
    //   }]  

    // capabilities: {
    //     browserName: 'chrome',
      
    //     chromeOptions: {
    //        args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    //      }
    //   }

    // run a group of tests
    specs: ['products/*.spec.js'],
    suites: {
         products: 'products/*.spec.js'
    },

    framework: 'jasmine',
    onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: 'tmp/screenshots',
           docTitle: 'Products Report'
        }).getJasmine2Reporter());
    },
};

Then create your spec file:

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


Then update your `test` script in `package.json`





