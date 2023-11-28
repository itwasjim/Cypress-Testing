describe('Cypress Testing', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000')
  });

  it('gets the name input and types a name in it', () => {
      const inputName = 'Test Name'
      cy.get('.test-name')
          .type(inputName, { delay: 100 })
          .should('have.value', inputName)
  });

  it('get the email input and types an email address in it', () => {
      const inputEmail = 'test@email.com'
      cy.get('.test-email')
          .type(inputEmail, { delay: 100 })
          .should('have.value', inputEmail)
  });

  it('gets the password input and types a password in it', () => {
      const inputPassword = 'T3stP@s$w0rd'
      cy.get('.test-password')
          .type(inputPassword, { delay: 100 })
          .should('have.value', inputPassword)
  });

  it('checks the terms of service box', () => {
      cy.get('.tos')
          .should('be.checked')
  });

  it('checks to see if a user can submit the form data', () => {
      cy.get('.submit')
          .click()
  });

  it('checks for form validation if an input is left empty', () => {
      cy.get('.valid')
          .click()
          .should('be.visible')
  });
});