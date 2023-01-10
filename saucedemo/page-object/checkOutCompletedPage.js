module.exports = {
    elements: {
        infoCompleted: {
            selector : '.complete-header'
        }
    },
    commands: [{
          checkOutCompletedUrl: function() {
            return this.assert.urlContains('/checkout-complete.html')
            },
          checkCompletedInfo: function(message){
            return this.waitForElementVisible('@infoCompleted', 1000)
                       .assert.containsText("@infoCompleted", message); 
            }
        }
    ]
    
};