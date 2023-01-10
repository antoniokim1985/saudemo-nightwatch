module.exports = {
    elements: {
        itemInformation:{
            locateStrategy:'xpath',
            selector: '//*[@id="item_4_title_link"]/div', 
        },
        buttonRemoveItem: {
            selector : '#remove-sauce-labs-backpack'
        },
        buttonCheckOut: {
            selector :'#checkout'
        }
    },
    commands: [{
          yourCartPageUrl: function() {
            return this.assert.urlContains('/cart.html')

            },
          checkItemInfo: function(itemInfo){
            return this.useXpath()
                       .assert.visible('@itemInformation')
                       .assert.containsText("@itemInformation", itemInfo); 
          },
          clickRemoveItem: function(){
            return this.waitForElementVisible('@buttonRemoveItem', 1000)
                        .click('@buttonRemoveItem')
          },
          clickCheckout: function(){
            return this.waitForElementVisible('@buttonCheckOut', 1000)
                       .click('@buttonCheckOut')
          }
        }
    ]
    
};