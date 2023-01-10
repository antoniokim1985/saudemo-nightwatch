module.exports = {
    elements: {
        infoProducts:{
            locateStrategy:'xpath',
            selector: '//*[@id="header_container"]/div[2]/span', 
        },
        buttonBurgerMenuIcon: {
            selector : '#react-burger-menu-btn'
        },
        buttonLogOut: {
            selector :'#logout_sidebar_link'
        },
        //buttonAddCart: {
        //  locateStrategy:'xpath',
        //  selector: '//*[contains(text(),"Sauce Labs Backpack")]/../../../div[@class="pricebar"]/button[@id="add-to-cart-sauce-labs-backpack"]', 
        //},
        //buttonRemoveCart: {
        //  locateStrategy:'xpath',
        //  selector: '//*[contains(text(),"Sauce Labs Backpack")]/../../../div[@class="pricebar"]/button[@id="remove-sauce-labs-backpack"]', 
        //},
        buttonCart: {
          selector :'.shopping_cart_link'
        },
        infoCounterCart: {
          selector :'.shopping_cart_badge',
          //abortOnFailure: false
          
        },
        infoNameItem: {
          locateStrategy:'xpath',
          selector :'//*[@id="item_4_title_link"]/div'
        }
    },
    commands: [{
          checkInventoryUrl: function() {
            return this.assert.urlContains('/inventory.html')

            },
          loggedInProducts: function(){
            return this.useXpath()
                       .assert.visible('@infoProducts')
          },
          clickBurgerMenu: function(){
            return this.waitForElementVisible('@buttonBurgerMenuIcon', 1000)
                        .click('@buttonBurgerMenuIcon')
          },
          clickLogOut: function(){
            return this.waitForElementVisible('@buttonLogOut', 1000)
                       .click('@buttonLogOut')
          },
          clickAddToTheCart: function(selectedItem){
            xpath = '//*[contains(text(),"' + selectedItem + '")]/../../../div[@class="pricebar"]/button[@id="add-to-cart-sauce-labs-backpack"]'
            return this.useXpath()
                        .waitForElementVisible(xpath, 1000)
                        .click(xpath)
          },
          clickRemoveToTheCart: function(selectedItem){
            xpath = '//*[contains(text(),"' + selectedItem + '")]/../../../div[@class="pricebar"]/button[@id="remove-sauce-labs-backpack"]'
            return this.useXpath()
                        .waitForElementVisible(xpath, 1000)
                        .click(xpath)
          },          
          checkCartItemNumber: function(){
            return this.waitForElementVisible('@infoCounterCart', 1000)
                       .assert.containsText("@infoCounterCart", "1"); 
          },
          clickToTheCart: function(){
            return this.waitForElementVisible('@buttonCart', 1000)
                        .click('@buttonCart')
          },          
          checkCartItemNumberEmpty: function(){
            return this.waitForElementNotPresent('@infoCounterCart')          
          }
        }
    ]
    
};