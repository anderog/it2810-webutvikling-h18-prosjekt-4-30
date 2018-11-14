describe("The start page", function() {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load information-popup", function() {
    cy.contains("info").click();
  });

  it("should return to homepage when title clicked", function() {
    cy.get(".title")
      .click()
      .url()
      .should("contain", Cypress.config().baseUrl);
  });

  it("should accept searchbar input", function() {
    const searchText = "fisk";
    cy.get(".search-form")
      .children()
      .type(searchText)
      .should("have.value", searchText);
  });

  it("should choose category", function() {
    cy.get(".toggleButton").click();
    cy.get(".container").should("be.visible");
    cy.get(".container")
      .children()
      .should("have.length", 10)
      .each(button =>
        cy
          .wrap(button)
          .should("be.visible")
          .click()
          .should("have.css", "border-bottom")
      );

    cy.get(".toggleButton").click();
    cy.get(".container").should("not.be.visible");
  });

  it("should choose and show orderBy", function() {
    cy.get(".dropDown")
      .should("be.visible")
      .and("contain", "Sorter etter")
      .click();
    cy.get(".priceAscButton").should("be.visible");
    cy.get(".priceAscButton").click();
    cy.get(".priceAscButton").should("not.be.visible");
    cy.get(".dropDown").should("contain", "Pris (lavest først)");
  });
});
