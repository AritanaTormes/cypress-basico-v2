/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(function(){
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', function() {
     cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
  it('preenche os campos obrigatórios e envia o formulário', function(){
    const longtext = 'Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste, '
    cy.get('#firstName').type('Aritana')
    cy.get('#lastName').type('Tormes')
    cy.get('#email').type('aritana@example.com')
    cy.get('#open-text-area').type (longtext, {delay: 0})
    cy.get('.button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
    cy.get('#firstName').type('Aritana')
    cy.get('#lastName').type('Tormes')
    cy.get('#email').type('aritana@example,com')
    cy.get('#open-text-area').type ('Teste')
    cy.get('.button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })
  it.only('campo telefone continua vazio quando preenchido com valor não numerico', function(){
    cy.get('#phone')
      .type('abcdefghi')
      .should('have.value', '')
  })
})
