// Função : Testes no Cadastro e login do site Fando via Cypress
/* 
Autor  :  Erik Tomelin;
          Luan Lopes;
          Luiz Silva; 
          Gustavo Molkovski.
*/
// Data   : 11/24/2020

describe('N3 FANDO', () => {
    it('Entrar no Fando', () => {
        cy.visit('http://localhost/pac-fando/')
        cy.viewport(1000, 600)
    })

    it('Cadastrar Usuários', () => {
        cy.get(':nth-child(2) > form > .text-center > .btn-login')
        cy.get('.form-row > :nth-child(1) > input')
          .type('Giuberto', { delay: 50 })
        
        cy.get(':nth-child(2) > form > .text-center > .btn-login')
        cy.get('.form-row > :nth-child(2) > input')
          .type('Pedro Tomelin', { delay: 50 })

        cy.get(':nth-child(2) > form > .text-center > .btn-login')
        cy.get(':nth-child(3) > input')
          .type('pedro@tomelin.com', { delay: 50 })
        
        cy.get(':nth-child(2) > form > .text-center > .btn-login')
        cy.get(':nth-child(4) > input')
          .type('L3r0L3r0', { delay: 50 })

        cy.get(':nth-child(2) > form > .text-center > .btn-login')
    })

    it('Usuário Cadastrado', () => {
        cy.visit('http://localhost/pac-fando/menus/userCreated.php')
        cy.get('b')
          .get('.button-secondary')
        cy.wait(500)
    })

    it('Logar errado de usuário cadastrado', () => {
        cy.visit('http://localhost/pac-fando/')

        cy.get('form > :nth-child(1) > input')
          .type('erro@login.com', { delay: 50 })
        cy.get('form > :nth-child(2) > input')
          .type('senha_errada', { delay: 50 })

        cy.get(':nth-child(1) > form > .text-center > .btn-login')
    })

    it('Erro ao logar', () => {
        cy.visit('http://localhost/pac-fando/errors/userInvalid.php')
        cy.get('b')
          .get('.button-secondary')
        cy.wait(500)
    })

    it('Logar certo de usuário cadastrado', () => {
        cy.visit('http://localhost/pac-fando/')

        cy.get('form > :nth-child(1) > input')
          .type('pedro@tomelin.com', { delay: 50 })
        cy.get('form > :nth-child(2) > input')
          .type('L3r0L3r0', { delay: 50 })

        cy.get(':nth-child(1) > form > .text-center > .btn-login')
    })

    it('Entrando na Home', () => {
        cy.visit('http://localhost/pac-fando/menus/homeScreen.php')
    })    
  })