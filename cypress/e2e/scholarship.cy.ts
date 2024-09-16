describe("Statement of Account", () => {
    const Url = "https://sistemas.upb.edu";
    const validUsername = Cypress.env('USERNAME'); 
    const validPassword = Cypress.env('PASSWORD');

    beforeEach(() => {
        cy.visit(Url);
    })
  
    it("login with valid credentials", () => {
      cy.get('[name="user[username]"]').type(validUsername);
      cy.get('[id="password"]').type(validPassword);
      cy.get('[class="btn bg-blue btn-block btn-flat"]').click();
      cy.get('[id="menu4-0"]').click();
      cy.get('[id="menu4-17"]').click();
      cy.get('[class="btn btn-success btn-flat"]').click();
      cy.get('[class="content-header"]').should("contain.text", 'Verificación de Trabajo Becario');
    });

    afterEach(() => {
        cy.get('[class="dropdown-toggle"]').click();
        cy.get('[class="pull-right"]').click();
    })
});