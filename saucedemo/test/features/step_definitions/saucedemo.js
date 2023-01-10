const {Given, Then, When, Before} = require('@cucumber/cucumber');

selectedItem = "Sauce Labs Backpack"
paymentInfo = "SauceCard #31337"
shippingInfo = "FREE PONY EXPRESS DELIVERY!"
totalPrice = "32.39"

Given(/^Being in saucedemo$/, function() {
  var loginPage = browser.page.loginPage()
  loginPage
            .navigate()
});

When(/^I log in saucedemo with user "(.*?)" and pass "(.*?)"$/, function(user, pass) {
  var loginPage = browser.page.loginPage()
  loginPage
            .checkLoginUrl()
            .login(user,pass)
});
  
Then(/^I can access inventory page$/, function() {
  var inventoryPage = browser.page.inventoryPage()
  inventoryPage
            .checkInventoryUrl()
            .loggedInProducts()
});

When(/^I click burger menu$/, function() {
  var inventoryPage = browser.page.inventoryPage()
  inventoryPage
            .clickBurgerMenu()
});

When(/^I press Log out$/, function() {
var inventoryPage = browser.page.inventoryPage()
inventoryPage
          .clickLogOut()
});

Then(/^I am returning to main page$/, function() {
  var loginPage = browser.page.loginPage()
  loginPage
            .checkLoginUrl()
  });

When(/^I Click ADD TO THE CART of an item$/, function() {
  var inventoryPage = browser.page.inventoryPage()
  inventoryPage
            .clickAddToTheCart(selectedItem)

});
  
Then(/^I can see the cart with a 1$/, function() {
  var inventoryPage = browser.page.inventoryPage()
  inventoryPage
            .checkCartItemNumber()

});

When(/^I click to the cart$/, function() {
    var inventoryPage = browser.page.inventoryPage()
    inventoryPage
              .clickToTheCart()
});

Then(/^I can see the selected item in the cart$/, function() {
    var yourCartPage = browser.page.yourCartPage()
    yourCartPage
              .yourCartPageUrl()
              .checkItemInfo(selectedItem)
});

When(/^I click on REMOVE on the item that it is already in the cart$/, function() {
  var inventoryPage = browser.page.inventoryPage()
  inventoryPage
             .clickRemoveToTheCart(selectedItem)
});

Then(/^I can see that that the number 1 disappears from the chart icon$/, function() {
  var inventoryPage = browser.page.inventoryPage()
  inventoryPage
            .checkCartItemNumberEmpty()
});


When(/^I click CHECKOUT$/, function() {
  var yourCartPage = browser.page.yourCartPage()
  yourCartPage
            .clickCheckout()
});

When(/^I fill the from with firstName "(.*?)" lastName "(.*?)" and zipCode "(.*?)"$/, function(firstName, lastName, zipCode) {
  var checkOutYourInfoPage = browser.page.checkOutYourInfoPage()
  checkOutYourInfoPage
            .checkOutInfoUrl()
            .sendFirstName(firstName)
            .sendLastName(lastName)
            .sendZIP(zipCode)
});

When(/^I click CONTINUE$/, function() {
  var checkOutYourInfoPage = browser.page.checkOutYourInfoPage()
  checkOutYourInfoPage
            .clickContinue()
});

Then(/^I can check Item, Payment, Shipping and TotalCost information$/, function() {
  var checkOutOverviewPage = browser.page.checkOutOverviewPage()
  checkOutOverviewPage
          .checkoutOverviewUrl()
          .checkItemInfo(selectedItem)
          .checkPaymentInfo(paymentInfo)
          .checkShippingInfo(shippingInfo)
          .checkTotalInfo(totalPrice)
            
});

When(/^I click FINISH$/, function() {
  var checkOutOverviewPage = browser.page.checkOutOverviewPage()
  checkOutOverviewPage
            .clickFinish()
});

Then(/^I can see the message "([^"]*)"$/, function(message) {
  var checkOutCompletedPage = browser.page.checkOutCompletedPage()
  checkOutCompletedPage
            .checkOutCompletedUrl()
            .checkCompletedInfo(message)
});