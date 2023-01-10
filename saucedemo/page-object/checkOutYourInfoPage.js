module.exports = {
    elements: {
        inputFirstName: {
            selector : '#first-name'
        },
        inputLastName: {
            selector :'#last-name'
        },
        inputZIP: {
          selector :'#postal-code'
        },
        buttonContinue: {
          selector :'#continue'
        }
    },
    commands: [{
          checkOutInfoUrl: function() {
            return this.assert.urlContains('/checkout-step-one.html')

            },
          sendFirstName: function(firstName){
            return this.setValue('@inputFirstName', firstName)
          },
          sendLastName: function(lastName){
            return this.setValue('@inputLastName', lastName)
          },
          sendZIP: function(zip){
            return this.setValue('@inputZIP', zip)
          },
          clickContinue: function(){
            return this.waitForElementVisible('@buttonContinue', 1000)
                       .click('@buttonContinue')
          }
        }
    ]
    
};