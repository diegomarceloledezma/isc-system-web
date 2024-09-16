describe("Login Test", () => {
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
      cy.get('[class="small-box bg-green"]').click()
      cy.get('[class="sorting_asc"]').should("contain.text", 'NOMBRE DE LA MATERIA');
    });

    afterEach(() => {
        cy.get('[class="dropdown-toggle"]').click();
        cy.get('[class="pull-right"]').click();
    })
});