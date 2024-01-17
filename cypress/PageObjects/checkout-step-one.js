class CheckOutStepOne {
  // title
  getTitle() {
    return cy.get(".title");
  }
  // checkout info:
  // 1. first name
  getFirstName() {
    return cy.get("#first-name");
  }
  // 2. last name
  getLastName() {
    return cy.get("#last-name");
  }
  // 3. zip / postal code
  getPostalCode() {
    return cy.get("#postal-code");
  }
  // cancel button
  getCancelButton() {
    return cy.get("#cancel");
  }
  // continue button
  getContinueButton() {
    return cy.get("#continue");
  }
}

export default CheckOutStepOne;
