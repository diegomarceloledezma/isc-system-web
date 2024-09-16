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
      cy.get('[id="menu4-0"]').click()
      cy.get('[id="menu4-6"]').click()
      cy.get('[class="box-title"]').should("contain.text", 'Plan de Pagos (Bs)');
      cy.get('[alt="MIS FACTURAS"]').click();
      cy.get('[class="even"]').should("contain.text", 'LEDEZMA')
    });

    afterEach(() => {
        cy.get('[class="dropdown-toggle"]').click();
        cy.get('[class="pull-right"]').click();
    })
});