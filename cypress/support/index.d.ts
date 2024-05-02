/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Commande permettant de se connecter à saucedemo
       * @example cy.login('standard_user', 'secrect_sauce')
       * @param username
       * @param password
       */
      login(username: string, password: string): Chainable<any>;
    }
  }