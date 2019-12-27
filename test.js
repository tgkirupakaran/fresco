
module.exports = {
  'Mercury Tours Login' : function (client) {
    client
      .url('http://newtours.demoaut.com/')
      .waitForElementVisible('body', 1000)
      .assert.title('Welcome: Mercury Tours')
      .waitForElementVisible('input[name=userName]', 5000)
      .assert.visible('input[name=userName]')
      .setValue('input[name=userName]', 'mercury')
      .waitForElementVisible('input[name=password]', 5000)
      .assert.visible('input[name=password]')
      .setValue('input[name=password]', 'mercury')
      .waitForElementVisible('input[name=login]', 5000)
      .assert.visible('input[name=login]')
      .click('input[name=login]')
      .pause(1000)
      .end()
  }
};

this.demoTestGoogle = function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'Life is Beautiful')
      .waitForElementVisible('input[name=btnK]', 5000)
      .click('input[name=btnK]')
      .pause(1000)
      .end()
  };

  demoTestBailrafting

  this.demoTestBailrafting = function (browser) {
    browser
      .url('https://www.phptravels.net/')
      .waitForElementVisible('body', 1000)
      .assert.title('PHPTRAVELS | Travel Technology Partner')
      .waitForElementVisible('input[id=s2id_autogen2]', 1000)
      .assert.visible('input[id=s2id_autogen2]')
      .setValue('input[id=s2id_autogen2]','Delhi')

      .waitForElementVisible('input[id=checkin]', 1000)
      .assert.visible('input[id=checkin]')
      .setValue('input[id=checkin]', '03/30/2021')

      .waitForElementVisible('input[id=checkout]', 1000)
      .assert.visible('input[id=checkout]')
      .setValue('input[id=checkout]', '03/31/2021')

      .waitForElementVisible('input[name=children]', 1000)
      .assert.visible('input[name=children]')
      .setValue('input[name=children]', '1')

      .waitForElementVisible('button[type=submit]', 5000)
      .click('button[type=submit]')
      .pause(1000)
      .end()
  };


  this.demoTestBailrafting = function (browser) {
    browser
      .url('https://www.phptravels.net/')
      .waitForElementVisible('body', 1000)
      .assert.title('PHPTRAVELS | Travel Technology Partner')
      .waitForElementVisible('input[id=s2id_autogen2]', 1000)
      .assert.visible('input[id=s2id_autogen2]')
      .setValue('input[id=s2id_autogen2]','Delhi')

      .waitForElementVisible('input[id=checkin]', 1000)
      .assert.visible('input[id=checkin]')
      .setValue('input[id=checkin]', '03/30/2021')

      .waitForElementVisible('input[id=checkout]', 1000)
      .assert.visible('input[id=checkout]')
      .setValue('input[id=checkout]', '03/31/2021')

      .waitForElementVisible('input[name=children]', 1000)
      .assert.visible('input[name=children]')
      .setValue('input[name=children]', '1')

      .waitForElementVisible('button[type=submit]', 5000)
      .click('button[type=submit]')
      .pause(1000)
      .end()
  };

  module.exports = {
    'Travel Booking' : function (client) {
      client
      .url('https://www.phptravels.net/')
      .waitForElementVisible('body', 1000)
      .assert.title('PHPTRAVELS | Travel Technology Partner')
      .waitForElementVisible('input[id=s2id_autogen2]', 1000)
      .assert.visible('input[id=s2id_autogen2]')
      .setValue('input[id=s2id_autogen2]','Delhi')

      .waitForElementVisible('input[id=checkin]', 1000)
      .assert.visible('input[id=checkin]')
      .setValue('input[id=checkin]', '03/30/2021')

      .waitForElementVisible('input[id=checkout]', 1000)
      .assert.visible('input[id=checkout]')
      .setValue('input[id=checkout]', '03/31/2021')

      .waitForElementVisible('input[name=children]', 1000)
      .assert.visible('input[name=children]')
      .setValue('input[name=children]', '1')

      .waitForElementVisible('button[type=submit]', 5000)
      .click('button[type=submit]')
      .pause(1000)
      .end()
    }
  };

module.exports = {
  'Mercury Tours Login' : function (client) {
    client
      .url('http://newtours.demoaut.com/')
      .waitForElementVisible('body', 1000)
      .useXpath()
      .assert.title('Welcome: Mercury Tours')
      .waitForElementVisible('//input[@name="userName"]', 5000)
      .assert.visible('//input[@name="userName"]')
      .setValue('//input[@name="userName"]', 'mercury')
      .waitForElementVisible('//input[@name="password"]', 5000)
      .assert.visible('//input[@name="password"]')
      .setValue('//input[@name="password"]', 'mercury')
      .useCss()
      .waitForElementVisible('input[name=login]', 5000)
      .assert.visible('input[name=login]')
      .click('input[name=login]')
      .pause(1000)
      .end()
  }
};


module.exports = {
  
  'Launch Application' : function (client) {
    client
      .url('http://www.google.com')
      .waitForElementVisible('body', 8000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
    },

  'Search for User' : function (client) { 
    client
      .setValue('input[type=text]', 'priyaranjan dwivedi')
      .waitForElementVisible('input[name=btnK]', 5000)
      .click('input[name=btnK]')
      .pause(1000)
      .end()
  }
};

module.exports = {
  'Launch Application': function (client) {
    client
    .url('https://www.phptravels.net/')
    .waitForElementVisible('body', 1000)
    .assert.title('PHPTRAVELS | Travel Technology Partner')
  },
  'City selection': function(client){
    client
    .waitForElementVisible('input[id=s2id_autogen2]', 1000)
    .assert.visible('input[id=s2id_autogen2]')
    .setValue('input[id=s2id_autogen2]','Delhi')
  },
  'Checkin and checkout date selection': function(client){
    client
    .waitForElementVisible('input[id=checkin]', 1000)
    .assert.visible('input[id=checkin]')
    .setValue('input[id=checkin]', '03/30/2021')

    .waitForElementVisible('input[id=checkout]', 1000)
    .assert.visible('input[id=checkout]')
    .setValue('input[id=checkout]', '03/31/2021')
  },
  'Number of Travels': function(client){
    client
    .waitForElementVisible('input[name=children]', 1000)
    .assert.visible('input[name=children]')
    .setValue('input[name=children]', '1')
  },
  'Check for Availability': function(client){
    client
    .waitForElementVisible('button[type=submit]', 5000)
    .click('button[type=submit]')
    .pause(1000)
    .end()
  }
};


module.exports = function (client) {
  this.goToGoogle = function() {
    client
      .windowMaximize()
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
    return client;
  };
  this.navigateSample01 = function() {
    client
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'mercury tours')
      .waitForElementVisible('input[name=btnK]', 5000)
    return client;
  };
};

module.exports = {
  'Smoke Demo test Google' : function (client) {
    client
      .page.homeScreen().goToGoogle()
      .page.homeScreen().navigateSample01()
  },
 
  'Smoke Demo test Mercury' : function (client)	{
  	 client
  	   .page.search().mercuryTourLogin()
  	   .end();
  }
}

POM
module.exports = {
  url: 'http://google.com',
  elements: {
    searchBar: { 
      selector: 'input[type=text]' 
    },
    submit: { 
      selector: 'input[name=btnK]', 
      locateStrategy: 'xpath' 
    }
  }
};

Script
module.exports = {
  //our test case name as google
  'GoogleTest': function (client) {
   //defining our variable as google
   // page is repersentaion of pages folder
   // google is our POM js file 
    var google = client.page.google();

    google.navigate()
      .assert.title('Google')
      // @searchBar is our element name for search box.

      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .click('@submit');

    client.end();
  }
};

POM
module.exports = {
  sections: {
    googlePage: {
      selector: 'div.jsb',
      elements: {
        googleSearch: {
          selector: 'input[name='btnK']'
        },
        feelingLucky: {
          selector: 'input[name='btnI']'
        }
      }
    }
  }
};

Script
var google = client.page.google();

//call section followed by our section name

var searchPage = google.section.googlePage;
    searchPage.click(@googleSearch);
    searchPage.click(@feelingLucky);



module.exports = function(client){
  this.launchApplication = function () {
    client
    .url('https://www.phptravels.net/')
    .waitForElementVisible('body', 1000)
    .assert.title('PHPTRAVELS | Travel Technology Partner')
    return client
  };
  this.citySelection = function(){
    client
    .waitForElementVisible('input[id=s2id_autogen2]', 1000)
    .assert.visible('input[id=s2id_autogen2]')
    .setValue('input[id=s2id_autogen2]','Delhi')
    return client
  };
  this.CheckinAndCheckoutDateSelection = function(){
    client
    .waitForElementVisible('input[id=checkin]', 1000)
    .assert.visible('input[id=checkin]')
    .setValue('input[id=checkin]', '03/30/2021')

    .waitForElementVisible('input[id=checkout]', 1000)
    .assert.visible('input[id=checkout]')
    .setValue('input[id=checkout]', '03/31/2021')
    return client
  };
  this.NumberOfTravellers = function(client){
    client
    .waitForElementVisible('input[name=children]', 1000)
    .assert.visible('input[name=children]')
    .setValue('input[name=children]', '1')
    return client
  };
  this.CheckForAvailability = function(client){
    client
    .waitForElementVisible('button[type=submit]', 5000)
    .click('button[type=submit]')
    return client
  };
};