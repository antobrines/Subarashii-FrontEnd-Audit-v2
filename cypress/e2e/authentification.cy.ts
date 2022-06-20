import * as crypto from "crypto";

const url = Cypress.env('baseUrl')

describe('Sign In', () => {
    it('Register and SignIn success', () => {
        cy.visit('/');
        cy.contains('S\'inscrire').click();
        cy.url().should('match', /register/)

        const username = crypto.randomBytes(5).toString('hex');

        const email = username + '@yopmail.com'
        cy.get('#email').type(email);
        cy.get('#username').type(username);

        const password = crypto.randomBytes(5).toString('hex');
        cy.get('#password').type(password);
        cy.get('#confirm_password').type(password);

        cy.contains('S\'inscrire').click()

        cy.url().should('match', /login/)

        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.contains('Se connecter').click();

        cy.url().should('equal', url)
    })
})
