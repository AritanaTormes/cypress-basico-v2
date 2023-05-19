Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
  cy.get('#firstName').type('Aritana')
  cy.get('#lastName').type('Tormes')
  cy.get('#email').type('aritana@example.com')
  cy.get('#open-text-area').type ('Teste')
  cy.contains('button', 'Enviar').click()
})