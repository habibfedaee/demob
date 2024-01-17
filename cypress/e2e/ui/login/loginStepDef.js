import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../../PageObjects/homePage.js";

// Positive Login
// Background:
Given("User navigates to Demoblaze", () => {
  cy.visit("https://demoblaze.com");
});
When("User intends to login", () => {
  homePage.getNavLogin().click();
});
When("User enters username {string}", (username) => {
  homePage.getLoginUsernameInput().should("be.visible").type(username);
});
When("User enters password {string}", (password) => {
  homePage.getLoginPasswordInput().should("be.visible").type(password);
});
When("User clicks the login button", () => {
  homePage.getLoginLoginButton().click();
});
Then("User should be able to login successfully", () => {
  // expect(
  //   cy.get("#nameofuser").should("be.visible").should().contains("Welcome")
  // );
  expect(cy.contains("Welcome ").should("exist"));
});
