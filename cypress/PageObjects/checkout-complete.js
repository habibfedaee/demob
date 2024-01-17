class CheckoutComplete {
  // nagivation: (Checkout: Complete!) should appear
  getTitle() {
    return cy.get("#header_container > div.header_secondary_container > span");
  }
  // thank you message: complete header
  getCompleteHeader() {
    return cy.get(".complete_header");
  }
  // order message: complete text
  getCompleteText() {
    return cy.get(".complete-text");
  }
  // Back Home button
  getBackHomeButton() {
    return cy.get("#back-to-products");
  }
}

export default CheckoutComplete;
