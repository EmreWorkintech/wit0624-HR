beforeEach(() => {
  cy.visit("http://localhost:5173/");
  cy.contains("Login").click();
});

describe("template spec", () => {
  it("passes", () => {
    //Arrange

    //Act
    cy.get("[data-cy='username-input']").type("Emre@wit.com.tr");
    cy.get("[data-cy='password-input']").type("123456");
    cy.get("[data-cy='submit-login-form']").click();

    //Arrange
    cy.url().should("eq", "http://localhost:5173/users");
  });
});
