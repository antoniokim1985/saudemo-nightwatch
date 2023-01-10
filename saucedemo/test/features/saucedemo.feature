Feature: Saucedemo 
Background: I am using Chrome and Saucedemo is active

  @login
  Scenario Outline: Log in
  Given Being in saucedemo
  When I log in saucedemo with user <user> and pass <pass>
  Then I can access inventory page
  Examples:
      |user           |pass          |
      |"standard_user"|"secret_sauce"|
      |"problem_user" |"secret_sauce"|

  @logout
  Scenario Outline: Log out
  Given Being in saucedemo
  When I log in saucedemo with user <user> and pass <pass>
  Then I can access inventory page
  When I click burger menu
  And I press Log out
  Then I am returning to main page
  Examples:
      |user           |pass          |
      |"standard_user"|"secret_sauce"|
      |"problem_user" |"secret_sauce"|

  @additems  
  Scenario Outline: Add items
  Given Being in saucedemo
  When I log in saucedemo with user <user> and pass <pass>
  Then I can access inventory page
  When I Click ADD TO THE CART of an item
  Then I can see the cart with a 1
  When I click to the cart
  Then I can see the selected item in the cart
  Examples:
      |user           |pass          |
      |"standard_user"|"secret_sauce"|
      |"problem_user" |"secret_sauce"|

  @removeitems
  Scenario Outline: Remove item from the cart
  Given Being in saucedemo
  When I log in saucedemo with user <user> and pass <pass>
  Then I can access inventory page
  When I Click ADD TO THE CART of an item
  Then I can see the cart with a 1
  When I click on REMOVE on the item that it is already in the cart
  Then I can see that that the number 1 disappears from the chart icon  
  Examples:
      |user           |pass          |
      |"standard_user"|"secret_sauce"|
      |"problem_user" |"secret_sauce"|

  @checkout
  Scenario Outline: Checkout
  Given Being in saucedemo
  When I log in saucedemo with user <user> and pass <pass>
  Then I can access inventory page
  When I Click ADD TO THE CART of an item
  Then I can see the cart with a 1
  When I click to the cart
  Then I can see the selected item in the cart
  When I click CHECKOUT
  And I fill the from with firstName <firstName> lastName <lastName> and zipCode <zip>
  And I click CONTINUE
  Then I can check Item, Payment, Shipping and TotalCost information
  When I click FINISH
  Then I can see the message "THANK YOU FOR YOUR ORDER"
  Examples:
      |user           |pass          |firstName |lastName |zip       |
      |"standard_user"|"secret_sauce"|"John"    |"Doe"    |"AP11003" |
      |"problem_user" |"secret_sauce"|"John"    |"Doe"    |"AP11003" |

