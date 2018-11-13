describe("The Home Page", function() {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load information", function() {
    cy.contains("info").click();
  });

  it("should return to homepage when title clicked", function() {
    cy.get(".title")
      .click()
      .url()
      .should("include", "http://localhost:3000/");
  });

  it("should accept searchbar input", function() {
    const searchText = "fisk";
    cy.get(".search-form")
      .children()
      .type(searchText)
      .should("have.value", searchText);
  });

  context("Search submission", () => {
    const searchText = "fisk";
    it("should search on submit", function() {
      cy.get(".search-form")
        .children()
        .type(searchText)
        .type("{enter}");

      cy.get(".productList")
        .children()
        .should("have.length", "greaterThan", 5);
    });

    it("should use paginate to go to next page", function() {});
  });
});
