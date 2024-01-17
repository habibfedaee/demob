import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// require testData.json
const testData = require("../../../fixtures/testData.json");

Given("I navigate to the demoblaze website", () => {
  cy.visit("https://demoblaze.com");
});
When(
  "I add {string} from category {string} to the cart",
  (product, category) => {
    // click on category based on the parameter category:
    cy.get(".list-group-item").contains(category).click();
    // select the product:
    cy.contains(".card-title", product).click();

    // add to cart button click
    cy.contains("Add to cart").click();
  }
);
When("I finalize the purchase", () => {
  cy.contains("a.navlink", "Cart").click();
  cy.get("#orderModalLabel1").should("be.visible");
  cy.contains("button", "Place Order").click();
});
Then("I should get the order ready to ship", () => {
  // assert if the products from testdata exists in your order
  cy.contains("h2", "Thank you for your purchase!").should("be.visible");
});

// Generate scenarios dynamically based on test data
testData.forEach(({ category, product }) => {
  Then("I add product from category to the cart", { category, product });
  When("I finalize the Purchase");
  Then("I should get the order ready to ship");
});
