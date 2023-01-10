module.exports = {
    elements: {
        infoItem: {
            locateStrategy:'xpath',
            selector : '//*[@id="item_4_title_link"]/div'
        },
        infoPayment: {
          locateStrategy:'xpath',
            selector : '//*[@id="checkout_summary_container"]/div/div[2]/div[2]'
        },
        infoShipping: {
          locateStrategy:'xpath',
          selector : '//*[@id="checkout_summary_container"]/div/div[2]/div[4]'
        },
        infoTotal: {
          locateStrategy:'xpath',
          selector : '//*[@id="checkout_summary_container"]/div/div[2]/div[7]'
        },
        buttonFinish: {
          selector : '#finish'
        }
    },
    commands: [{
          checkoutOverviewUrl: function() {
            return this.assert.urlContains('/checkout-step-two.html')
            },
            checkItemInfo: function(selectedItem){
              return this.useXpath()
                         .waitForElementVisible('@infoItem', 1000)
                         .assert.containsText("@infoItem", selectedItem); 
            },
            checkPaymentInfo: function(paymentInfo){
              return this.useXpath()
                         .waitForElementVisible('@infoPayment', 1000)
                         .assert.containsText("@infoPayment", paymentInfo); 
            },
            checkShippingInfo: function(shippingInfo){
              return this.useXpath()
                         .waitForElementVisible('@infoShipping', 1000)
                         .assert.containsText("@infoShipping", shippingInfo); 
            },
            checkTotalInfo: function(totalPrice){
              return this.useXpath()
                         .waitForElementVisible('@infoTotal', 1000)
                         .assert.containsText("@infoTotal", totalPrice); 
            },
            clickFinish: function(){
              return this.waitForElementVisible('@buttonFinish', 1000)
                         .click('@buttonFinish')
            }
        }
    ]
    
};