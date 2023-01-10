module.exports = {
    url: 'https://www.saucedemo.com/',
    elements: {
        inputUsername: '#user-name',
        inputPassword: '#password',
        buttonLogin: '#login-button'
    },
    commands: [{
        login : function(username, password){
            return this.setValue('@inputUsername', username)
                        .setValue('@inputPassword', password)
                        .click('@buttonLogin');
        },
    
        checkLoginUrl: function() {
            return this.waitForElementVisible('@inputUsername', 1000)
                       .assert.visible('@inputUsername')
        }
    }]
    };