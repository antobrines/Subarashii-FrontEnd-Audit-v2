import crypto from "crypto";

const searchText = 'naruto';
const url = Cypress.env('baseUrl') + '?search=' + searchText;

describe('Searchbar', () => {
    it('Searchbar research success', function () {
        cy.visit('/');
        cy.url().should('match', /login/)

        cy.get('#email').type('cesar@ynov.com');
        cy.get('#password').type('azertyuiop');
        cy.contains('Se connecter').click();

        //Test searchbar
        cy.get('.justify-content-end > .search-input > #search')
            .type(searchText)

        cy.url().should('equal', url)
    });
});
