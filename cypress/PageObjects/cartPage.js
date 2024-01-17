class CartPage {
  // web elements inside cartpage:
  // item title:
  getSelectedItemTitle() {
    return cy.get("#tbodyid > h2");
  }

  // item price:
  getSelectedItemPrice() {
    return cy.get("#tbodyid > h3");
  }

  // item description:
  getSelectedItemDesc() {
    return cy.get("#more-information > p");
  }

  // add to cart button:
  getAddToCartButton() {
    return cy.get(".col-sm-12 > .btn");
  }

  // place order button:
  getPlaceOrderButton() {
    return cy.get(".btn.btn-success");
  }

  // purchase button:
  getPurchaseButon() {
    return cy.get(
      "#orderModal > div > div > div.modal-footer > button.btn.btn-primary"
    );
  }

  // added item title (can be many)
  getAddedItemTitle() {
    return cy.get("tr td:nth-child(2)");
  }

  // added item price:
  getAddedItemPrice() {
    return cy.get("tr td:nth-child(3)");
  }

  // total price label

  // added Item Delete Button
  getAddedItemDeleteButton() {
    return cy.get("#tbodyid > tr:nth-child(1) > td:nth-child(4) > a");
  }

  // form:
  getNameInput() {
    return cy.get("#name");
  }
  getCountryInput() {
    return cy.get("#country");
  }
  getCityInput() {
    return cy.get("#city");
  }
  getCreditCardInput() {
    return cy.get("#card");
  }
  getCardMonthInput() {
    return cy.get("#month");
  }
  getCardYearInput() {
    return cy.get("#year");
  }

  // place order button:
  getCheckoutButton() {
    return cy.get("#page-wrapper > div > div.col-lg-1 > button");
  }

  // final thank you message:
  getFinalThankyouMessage() {
    return cy.contains("Thank you for your purchase!");
  }
  // id#, amount, card number, name, date, ok
  getFinalIDNumber() {
    return cy.get("");
  }
  getFinalAmount() {
    return cy.get("");
  }
  getFinalCardNumber() {
    return cy.get("");
  }
  getFinalName() {
    return cy.get("");
  }
  getFinalPurchaseDate() {
    return cy.get("");
  }
  getFinalOKButton() {
    return cy.get(
      "body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button"
    );
  }
}
export default new CartPage();
