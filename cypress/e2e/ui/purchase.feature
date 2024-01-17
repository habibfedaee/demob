Feature: Purchase Products

    Scenario: Add products to cart and finalize Purchase
    Given I navigate to the demoblaze website
    When I add "<product>" from category "<category>" to the cart
    And I finalize the Purchase
    Then I should get the order ready to ship
