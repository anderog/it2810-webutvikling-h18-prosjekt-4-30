describe("Search submission", () => {
  const searchText = "Gilde";
  beforeEach(() => {
    cy.get(".search-form")
      .children()
      .type(searchText)
      .type("{enter}");
  });

  it("should search on submit, and get correct products", function() {
    cy.get(".inner > span.Collapsible__trigger.is-closed").each(product => {
      cy.wrap(product)
        .invoke("text")
        .should("contain", searchText);
    });
  });

  it("should sort products", function() {
    // Should get nameAsc-sorting by default
    cy.get(".inner > span.Collapsible__trigger.is-closed")
      .first()
      .invoke("text")
      .should("contain", "Gilde Aquavit Bacalao");

    cy.get(".dropDown")
      .click()
      .get(".nameDescButton")
      .click();
    cy.get(".inner > span.Collapsible__trigger.is-closed")
      .first()
      .invoke("text")
      .should("contain", "Gilde Taffel");

    cy.get(".dropDown")
      .click()
      .get(".priceAscButton")
      .click();
    cy.get(".inner > span.Collapsible__trigger.is-closed")
      .first()
      .invoke("text")
      .should("contain", "Gilde Dill Aquavit");

    cy.get(".dropDown")
      .click()
      .get(".priceDescButton")
      .click();
    cy.get(".inner > span.Collapsible__trigger.is-closed")
      .first()
      .invoke("text")
      .should("contain", "Gilde Non Plus Ultra");
  });

  it("should use paginate to go to next page and back", function() {
    cy.get(".wrapper span").should("contain", "1 av 2");
    cy.get(".incrementButton").click();
    cy.get(".productList")
      .children()
      .should("have.length", 6);
    cy.get(".wrapper span").should("contain", "2 av 2");

    cy.get(".decrementButton").click();
    cy.get(".wrapper span").should("contain", "1 av 2");
    cy.get(".productList")
      .children()
      .should("have.length", 10);
  });
});
