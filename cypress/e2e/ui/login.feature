Feature: Demoblaze Login

Scenario: positive login
    Given User navigates to Demoblaze
    When User intends to login
    When User enters username "hfboy"
    When User enters password "admin" 
    When User clicks the login button
    Then User should be able to login successfully