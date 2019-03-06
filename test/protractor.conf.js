var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'firefox'
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
      

    specs: ['*.spec.js'],
    suites: {
         products: 'products\\*.spec.js'
    },
    baseUrl: 'http://localhost:8080/',

    framework: 'jasmine',
    onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: 'tmp/screenshots',
           docTitle: 'Products Report'
        }).getJasmine2Reporter());
    },
};